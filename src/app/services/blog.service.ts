import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  private listOfBlogs: Blogs[] = [
    {
      title: 'My First Blog',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam voluptatibus necessitatibus accusamus fugia Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam voluptatibus necessitatibus accusamus fugiat'
    },
    {
      title: 'My Second Blog',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam voluptatibus necessitatibus accusamus fugia Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam voluptatibus necessitatibus accusamus fugiat'
    },
    {
      title: 'My Third Blog',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam voluptatibus necessitatibus accusamus fugia Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam voluptatibus necessitatibus accusamus fugiat'
    }
  ];

  private listOfMenu = [
    {
      label: "Home",
      url: ""
    },
    {
      label: "Contact",
      url: "contact"
    },
    {
      label: "About",
      url: "about"
    }
  ]

  public addBlog(blog: Blogs) {
    this.listOfBlogs.push(blog);
  }

  public checkIfBlogTitleExist(title: string) {
    let index = this.listOfBlogs.findIndex(b => b.title === title);
    return index === -1 ? true : false;
  }

  public updateBlog(blog: Blogs) {
    let index = this.listOfBlogs.findIndex(b => b.title === blog.title);
    this.listOfBlogs[index].text = blog.text;
  }

  public blogs(): Blogs[] {
    return this.listOfBlogs;
  }

  public menus() : Menu[] {
    return this.listOfMenu;
  }
}
