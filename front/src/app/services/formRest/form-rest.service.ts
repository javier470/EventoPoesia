import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormRestService {


  constructor(
    private http: HttpClient
  ) { }

  sendForm(params: {}) {
    return this.http.post(environment.baseUrl + 'addForm', params);
  }

  getResults(){
    return this.http.get(environment.baseUrl+'getForms');
  }

}
