import { Component, OnInit } from '@angular/core';
import { LocalserviceService } from "../../myservices/localservice.service"

@Component({
  selector: 'app-consume-local-service',
  templateUrl: './consume-local-service.component.html',
  styleUrls: ['./consume-local-service.component.css']
})
export class ConsumeLocalServiceComponent implements OnInit {

  constructor(private localservice:LocalserviceService) { 

    console.log(localservice.sweets)
    console.log(localservice.getLocalSweets())
    localservice.sweets.push('emerti')
    console.log(localservice.sweets)
  }

  ngOnInit() {
  }

}
