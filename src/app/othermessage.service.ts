import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthermessageService {

  constructor() { }

  getothermessagefromsecond(){
  
    return "Other Service Injected";
  }                                                   
}
