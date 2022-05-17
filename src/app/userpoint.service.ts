import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserpointService {

  constructor(private http:HttpClient) { }

   userData:userType={
     name:'ranvijay',
     age:29,
     city:'noida'
  };

  getUserData(){
    return this.userData;
  }

  getUserList(){
    let url='https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}

interface userType{
  name:string,
  age:number,
  city:string
}
