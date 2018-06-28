import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  submitUserHobby = function(user){
    console.log("user clicked the button")
    console.log(user)
  }

  constructor() { }

  ngOnInit() {
  }

}
