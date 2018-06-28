import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interface/user-info';
// import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class RemoteserviceService {

  constructor(private httpClient: HttpClient) {}

  getRemoteDataService():Observable<UserInfo[]>{

      return this.httpClient.get<UserInfo[]>('http://jsonplaceholder.typicode.com/users')

    }
}
