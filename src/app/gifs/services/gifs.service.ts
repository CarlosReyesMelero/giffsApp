import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'Pog0qsXNZ4t7DGfRDN0Kq9MapRCYvNjq'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,20);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag.trim().toLowerCase());


    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '40')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( (resp) => {

        this.gifList = resp.data;
    });
  }
}
