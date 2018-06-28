import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalserviceService {

  sweets = ['rasogulla','gulabjam', 'laddu', 'jalebi']

  constructor() { }

  getLocalSweets(){
    return "These are local sweets"
  }
}
