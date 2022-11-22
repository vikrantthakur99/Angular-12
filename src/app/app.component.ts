import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-routing';
  constructor(private routernav:Router){ }
  student(){
    this.routernav.navigate(['/student']);
  }
}
