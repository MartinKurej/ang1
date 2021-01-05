import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogForm: FormGroup;
  isEdit = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private blogService: BlogService, private activatedRoute: ActivatedRoute) {
    this.blogForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        text: ['', Validators.required]
      }
    )

    this.activatedRoute.queryParams.subscribe(
      data => {
        if (!data.hasOwnProperty('blog')) {
          this.isEdit = false;
          this.blogForm.controls['title'].enable();
        }
        else {
          this.isEdit = true;
          this.blogForm.controls['title'].disable();
          let title = JSON.parse(data.blog).title;
          let text = JSON.parse(data.blog).text;
          this.blogForm.controls['title'].setValue(title);
          this.blogForm.controls['text'].setValue(text);
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.isEdit) {
      let status = this.blogService.checkIfBlogTitleExist(this.blogForm.controls['title'].value);
      if(status) {
        this.blogService.addBlog({
          title: this.blogForm.controls['title'].value,
          text: this.blogForm.controls['text'].value
        });
      }
      else {
        alert('Blog already exist..')
      }
    }
    else {
      this.blogService.updateBlog({
        title: this.blogForm.controls['title'].value,
        text: this.blogForm.controls['text'].value
      });
    }
    this.router.navigate(['']);
  }

}
