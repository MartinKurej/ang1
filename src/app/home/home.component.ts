import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blogs } from '../models/blogs';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogForm: FormGroup;
  public listOfBlogs: Blogs[] = [];

  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router) {
    this.blogForm = this.formBuilder.group(
      {
        search: ['']
      }
    )
   }

  ngOnInit(): void {
    this.listOfBlogs = this.blogService.blogs();
    this.blogForm.controls['search'].valueChanges.subscribe(
      (searchText:string) => {
        this.listOfBlogs = this.blogService.blogs();
        this.listOfBlogs = this.listOfBlogs.filter(blog => {
          return blog.title.toLowerCase().trim().includes(searchText.toLowerCase().trim());
        });
      }
    )
  }

  editBlog(blog: Blogs) {
    this.router.navigate(['addblog'], { queryParams: { blog: JSON.stringify(blog) }, queryParamsHandling: 'merge' })
  }
}
