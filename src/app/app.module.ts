import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from  './filter.pipe';


import { AppComponent } from './app.component';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
