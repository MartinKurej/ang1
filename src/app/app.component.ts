import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogManagement';
  public collapsed = false;

  constructor(private el: ElementRef) {

  }

  expandCollapseHandle() {
    this.collapsed = !this.collapsed;
  }
}
