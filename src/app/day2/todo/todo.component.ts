import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task = ["Learn Angular 6", "Read about Eureka","Have Fun","Dine out"]
  onetask = ""
  money = 50
  myDate = new Date()

  scores = [10,3,6,13,22,56]

  addTask = function(){
  console.log("addtask function called")
  this.task.push(this.onetask)
  this.onetask=""
  }
  deleteTask = function(received){
    console.log("removing task is done")
    this.task.splice(received,1)
  }

  constructor() { }

  ngOnInit() {
  }

}
