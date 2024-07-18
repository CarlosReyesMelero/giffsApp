import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtTagIput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag ( newTag: string ){
  searchTag ( ){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
  }
}
