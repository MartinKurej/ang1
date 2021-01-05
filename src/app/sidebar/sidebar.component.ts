import { Component, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../models/menu';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidebar', {
    static: false
  }) sidebar: any;

  public menus: Menu[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.menus = this.blogService.menus();
  }

  toggleSidebar() {
    // this.sidebar
    // if (mini) {
    //     console.log("opening sidebar");
    //     document.getElementById("mySidebar").style.width = "250px";
    //     document.getElementById("main").style.marginLeft = "250px";
    //     this.mini = false;
    // } else {
    //     console.log("closing sidebar");
    //     document.getElementById("mySidebar").style.width = "85px";
    //     document.getElementById("main").style.marginLeft = "85px";
    //     this.mini = true;
    // }
}
}
