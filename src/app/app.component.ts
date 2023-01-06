import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './model/employees';
import { EmployeeService } from './Service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employeedetails';

  allEmployees: Employee[] = [];
  isFetching: boolean = false;
  editMode:boolean=false;
  currentEmployeeId:string;
  @ViewChild('employeeForm') form :NgForm;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.fetchEmployees();
    // this.updateEmployees();
  }

  onEmployeeFetch() {
    this.fetchEmployees();
  }


  //CREATE
  onEmployeeCreate(employees: { ename: string, desc: string, rank: string }) {
    //service implemented
   
    if(!this.editMode)
    {
      this.employeeService.createEmployee(employees);
    }
    else
    {
      this.employeeService.updateEmployee(this.currentEmployeeId,employees);
    }

    //normal component code
    // console.log(employees);
    //     const headerss = new HttpHeaders({ 'myHeader': 'DevOps' });
    //     this.http.post<{ name: string }>('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json', employees, { headers: headerss })
    //       .subscribe((res) => {
    //         console.log(res);
    //       });
  }

  //GET
  private fetchEmployees() {
    // this.isFetching = true;
    // this.http.get<{ [key: string]: Employee }>('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json')
    //   .pipe(map((res) => {
    //     const employess = [];
    //     for (const key in res) {
    //       if (res.hasOwnProperty(key)) {
    //         employess.push({ ...res[key], id: key })
    //       }
    //       // we are using id and assigning value key so that we can use later deleting data and fetching data of a given employee
    //     }
    //     return employess;
    //   }))
    //   .subscribe((employeess) => {
    //     console.log(employeess);
    //     this.allEmployees = employeess;
    //     this.isFetching = false;
    //   });
    this.isFetching =true;
    this.employeeService.fetchEmployee().subscribe((employess) =>{
      this.allEmployees = employess;
      this.isFetching=false;
    })

  }
  //DELETE
  onDeleteEmployee(id: string) {
    // this.http.delete('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees/' + id + '.json')
    //   .subscribe();
    this.employeeService.deleteEmployee(id);
    
  }

  onDeleteAllEmployee() {
    // this.http.delete('https://angularhttp-e57c7-default-rtdb.firebaseio.com/employees.json')
    //   .subscribe();
    this.employeeService.deleteAllEmployees()
  }
  onEditClicked(id:string){
    this.currentEmployeeId = id;
    //get the employee based on id
   let currentEmployee=  this.allEmployees.find((e)=>{
     return  e.id === id
    });
    // console.log(currentEmployee);

    //populate the form with the employee details
    this.form.setValue({
      ename:currentEmployee.ename,
      desc:currentEmployee.desc,
      rank:currentEmployee.rank
    });

    //change the button value to update employee
    this.editMode=true; 


  }
} 

