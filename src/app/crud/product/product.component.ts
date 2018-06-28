import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  
  constructor(private http: HttpClient) { }

  confirmationString : String =" New product has been added"

  isAdded : boolean = false

  productObj: object = []

  addNewData= function(product){
    this.productObj ={
      "name" : product.name,
      "color" : product.color
    }
    this.http.post("http://localhost:5555/products/", this.productObj).subscribe(
        (res: Response) => {
           console.log(res)
          this.isAdded = true
          
        }
  
    )

  }

  ngOnInit() {
  }

}
