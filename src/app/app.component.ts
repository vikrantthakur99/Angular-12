import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeedetails';

  constructor(private http:HttpClient){}

  onEmployeeCreate(employees: {ename:string, desc:string, rank:string}){
  console.log(employees);
  const headers = new HttpHeaders ({'myHeader':'DevOps'});
  this.http.post('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json',employees,{headers:headers})
  .subscribe((res)=> {
    console.log(res);
  });
  
  }
}
