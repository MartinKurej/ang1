import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
      }
    );
   }

  ngOnInit(): void {
    
  }

  public onSubmit() {
    if(this.contactForm) {
      console.log(`Name - ${this.contactForm.controls['name'].value}`);
      console.log(`Email - ${this.contactForm.controls['email'].value}`);
      console.log(`Message - ${this.contactForm.controls['message'].value}`);
    }
  }

}
