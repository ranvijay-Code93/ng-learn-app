import { Component, OnInit } from '@angular/core';
import {UserpointService} from '../../userpoint.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private user:UserpointService) {
    
   }

  ngOnInit(): void {
  }

  userDetails:any={};
  userList:any=[];
  getUserDataUsingService(){
    this.userDetails=this.user.getUserData();
  }

  showUserList(){
    this.user.getUserList().subscribe((data)=>{
      this.userList=data;
      console.warn(data);
    })
  }

}
