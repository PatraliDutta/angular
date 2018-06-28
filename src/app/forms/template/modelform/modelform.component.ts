import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  hobbyForm;

  constructor() { }

  ngOnInit() {

    this.hobbyForm = new FormGroup({
      fname:new FormControl("", Validators.compose([
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname:new FormControl("", this.myCustomMinLength),
      hobby:new FormControl()
    })
  }

  myCustomMinLength(control){
    if(control.value.length <3){
      return {'ln':true}
    }
  }

  submitUserHobby = function(user){
    console.log("user clicked the button")
    console.log(user)
  }

}
