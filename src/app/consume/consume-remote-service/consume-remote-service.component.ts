import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../../myservices/remoteservice.service';
import {UserInfo} from "../../interface/user-info";
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {

  userinfo:UserInfo[];
  observableUserInfo:Observable<UserInfo[]>

  constructor(private remoteservice:RemoteserviceService) { 

   
  }

  ngOnInit() {
    this.getRemoteData()
  }
  getRemoteData(){
    console.log("this is remote data")
      this.observableUserInfo = this.remoteservice.getRemoteDataService()
      this.observableUserInfo.subscribe(
        user=>{
          this.userinfo=user
          console.log(this.userinfo)
        },
        (err:HttpErrorResponse) =>{
          if(err.error instanceof Error){
            console.log('server side error')

          }else{
            console.log('Client side error')
          }
        }
      )
      console.log("--------")
    

  }

}
