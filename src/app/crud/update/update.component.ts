import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id : number
  products = []
  data: object = {}
  productObj: object = {}

  private headers = new Headers({ 'Content-Type': 'application/json'});
  
  constructor(private router : Router, private route: ActivatedRoute, private http: HttpClient) { }

  updateProduct = function(product){

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id']
      const url = `${"http://localhost:5555/products"}/${this.id}`
        this.http.get(url).subscribe(
          (res: Response) => {
            this.data= res
        })
    })
 
  }

}
