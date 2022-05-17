import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testForm = new FormGroup(
    {
      firstName: new FormControl('ranvijay', Validators.required),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('',Validators.required)
    }
  );

  showTestFormData(){
    console.warn(this.testForm.value);
  }

  title = 'ng-learn-app';
  address = {
    city: "Noida",
    landmark: "Pari Chowk",
    pinCode: "201310"
  };
  techStack = [".Net Core", "Sql Server", "React", "Angular", "Mongodb", "GraphQL"];
  siteUrl = window.location.href;
  getPageTitle() {
    return this.title;
  }
  num1 = 20;
  num2 = 30;

  userName = "ranvijay";
  getName(name: any = '') {
    return name === "" ? alert(this.userName) : alert(name);
  }

  showDataFromChildToParent(data: any = '') {
    alert(data);
  }

  getEventName(name: any) {
    console.warn(name);
  }

  getTextboxValue(eventTarget: any) {
    console.warn(eventTarget.value);
  }

  disabled = true;
  setTextboxEnabled() {
    this.disabled = false;
  }

  show = false;
  elseIfShow = true;
  task = "print";
  color = "red";

  updateColor() {
    this.color = "orange";
  }

  userList = [
    {
      name: "ranvijay",
      age: 29
    },
    {
      name: "raj",
      age: 28
    },
    {
      name: "aarush",
      age: 3
    }
  ];

  userData:any={
    city:"Noida"
  }

  saveFormDetails(value: any) {
    console.warn(value);
  }

  formatLabel(value: any) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
