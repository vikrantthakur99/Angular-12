import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Employee } from "../model/employees";

@Injectable({providedIn:"root"})
export class EmployeeService {
constructor(private http : HttpClient){}

    //Create Employee in Database
    createEmployee(employees: { ename: string, desc: string, rank: string }){
        console.log(employees);
        const headerss = new HttpHeaders({ 'myHeader': 'DevOps' });
        this.http.post<{ name: string }>('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json', employees, { headers: headerss })
          .subscribe((res) => {
            console.log(res);
          });
    }

    //Fetch Employee From Database
    fetchEmployee(){
       return this.http.get<{ [key: string]: Employee }>('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json')
          .pipe(map((res) => {
            const employess = [];
            for (const key in res) {
              if (res.hasOwnProperty(key)) {
                employess.push({ ...res[key], id: key })
              }
              // we are using id and assigning value key so that we can use later deleting data and fetching data of a given employee
            }
            return employess; 
          }))
    }

    //Delete Employee From Database
    deleteEmployee(id:string){
        this.http.delete('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees/' + id + '.json')
        .subscribe();

    }

    //Delete All Employees From Database
    deleteAllEmployees(){
        this.http.delete('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json')
        .subscribe();
     }

     //updateproduct

     updateEmployee(id:string,value: Employee){
        this.http.put('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees/' + id + '.json',value)
        .subscribe();
     }

}