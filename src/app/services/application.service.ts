import { Injectable } from '@angular/core';
import { APIService, Application, ListApplicationsQuery } from '../API.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private api: APIService) { }

  getApplications(): Observable<ListApplicationsQuery> {
    return from(this.api.ListApplications());
  }
}
