import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName = ''

  constructor() { }

  ngOnInit() {
  }

  receivedFromChild = function(e){
    console.log(e)
    this.myName = e

  }

}
