import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service in Angular';
  msg:any;
  othersms:string="";
  constructor(private _messageService :MessageService){

  }

  getmessagefirst(){
    this.msg=this._messageService.getmessagefirst();
    this.othersms=this._messageService.getmessagefromsecond()
  }

}
