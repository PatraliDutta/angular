import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Headers} from '@angular/http';



@Component({
  selector: 'app-crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.css']
})
export class CrudoperationsComponent implements OnInit {

  constructor(private http: HttpClient) { }

products =[]

id : number
private headers = new Headers({ 'Content-Type': 'application/json'});

  fetchData = function(){

    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products= res
      }
    )
    }

    deleteProduct = function(id){
      if(confirm("Confirm Delete?")){
        const url = `${"http://localhost:5555/products"}/${id}`
        return this.http.delete(url, {headers: this.headers}).subscribe(
          (res: Response) => {
            this.products= res
        })
      }

    }
    

  ngOnInit() {

    this.fetchData()
  }

}
