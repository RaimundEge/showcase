import { Component, OnInit, Input } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() pageData!: Data;

  constructor() { }

  ngOnInit(): void {
  }

  urlOK(): boolean {
    var answer = !(this.pageData.url === '')
    console.log(answer + ": " + this.pageData.url);
    return answer
  }

}
