import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService, Outcome } from 'src/app/API.service';
import { Application } from '../table/table-datasource';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  public updateForm: FormGroup;
  public outcomeKeys: String[] = [
    "SECOND_INTERVIEW",
    "ACCEPTED",
    "REJECTED",
    "GHOSTED"];
  public type = Outcome;
  public fakeApplication: Application = {
    // __typename: 'Application',
    id: '',
    company: '',
    description: '',
    jobPostUrl: '',
    position: '',
    response: false,
    outcome: Outcome.GHOSTED,
    createdAt: '',
    updatedAt: ''
  };
  public currentApplication: Application = this.fakeApplication;
  public outcome = Outcome;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      __typename: ['', ],
      createdAt: ['', ],
      updatedAt: ['', ],
      id: ['', ],
      company: ['', ],
      position: ['', ],
      jobPostUrl: ['', ],
      description: ['', ],
      response: ['', ],
      outcome: [Outcome, ],
    });
  }

  ngOnInit(): void {
  }

  public loadForm = (app: any): void =>  {
    // Load form with application data
    // this.currentApplication = app;
    this.updateForm.addControl('__typename', new FormControl('',));
    this.updateForm.setValue(app);
    this.updateForm.removeControl('__typename');
  }

  public onUpdate(application: Application) {
    this.api.UpdateApplication(application).then((event) => {
      this.updateForm.reset();
      this.currentApplication = this.fakeApplication;
    }).catch((e) => {
      console.log('error updating application...', e);
    });
  }

}
