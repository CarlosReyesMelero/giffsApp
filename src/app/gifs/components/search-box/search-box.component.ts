import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {


  constructor (private GifsService: GifsService) {}

  @ViewChild('txtTagIput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag ( newTag: string ){
  searchTag ( ){
    const newTag = this.tagInput.nativeElement.value;
    // console.log({newTag})
    this.GifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = ' ';
  }
}
