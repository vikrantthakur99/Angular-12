import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { OthermessageService } from './othermessage.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageService,OthermessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
