import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    console.log("in firstClick()");
    return console.log('clicked');
  }
  getUsers() {
    console.log("in getUsers()");
    return this.http.get('https://reqres.in/api/users')
  }
}

