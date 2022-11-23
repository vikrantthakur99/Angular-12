import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  othermsg:string="";
  constructor(private  _othermessageservice : OthermessageService) { }

  getmessagefirst(){
    return "Service worked";
  }
  
  getmessagefromsecond(){
    this.othermsg=this._othermessageservice.getothermessagefromsecond();
    return this.othermsg;
  }
 
}
 