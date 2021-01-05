import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../models/menu';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menus: Menu[] = [];

  @Output() public readonly expCollapse = new EventEmitter<boolean>();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.menus = this.blogService.menus();
  }

  expandCollapse() {
    // document ?? document.getElementById('sidebar').style.display = 'none';
    // document ?? document.getElementById('main').style.width = '100%';
    this.expCollapse.emit(true);
  }

}
