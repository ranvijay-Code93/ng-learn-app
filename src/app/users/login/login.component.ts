import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Input is used for getting params from parent to child
  @Input() userName:any
  @Input() title:any
  @Input() user:any

  // Output is used for passing params from child to parent
  @Output() showDataFromChildToParent:EventEmitter<any>=new EventEmitter()

  constructor() {
   }
   today=Date.now();
   stringToSlice="power";
   amount=100;
  ngOnInit(): void {
    this.showDataFromChildToParent.emit("function call from child to parent works.");
  }

  sendData(data:any=''){
    this.showDataFromChildToParent.emit(data);
  }

}
