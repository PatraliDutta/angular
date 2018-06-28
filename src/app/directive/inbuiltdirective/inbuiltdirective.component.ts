import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltdirective',
  templateUrl: './inbuiltdirective.component.html',
  styleUrls: ['./inbuiltdirective.component.css']
})
export class InbuiltdirectiveComponent implements OnInit {

   friends = ['abc','bca','cba','acb']
  // friends = []

  name='patrali'

  constructor() { }

  ngOnInit() {
  }

}
