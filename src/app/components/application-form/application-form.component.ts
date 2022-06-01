import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, CreateApplicationInput } from 'src/app/API.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  public createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      jobPostUrl: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public onCreate(application: CreateApplicationInput) {
    this.api
      .CreateApplication(application)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating application...', e);
      });
  }

  ngOnInit(): void {
  }

}
