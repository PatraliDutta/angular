import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myName

  @Output() parcelToParent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  sendToParentNow = function(received){
    console.log("sending to parent...")
    this.parcelToParent.emit(received)

  }

}
