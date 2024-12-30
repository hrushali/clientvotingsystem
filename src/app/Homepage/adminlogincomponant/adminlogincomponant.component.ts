import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-adminlogincomponant',
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './adminlogincomponant.component.html',
  styleUrl: './adminlogincomponant.component.css'
})
export class AdminlogincomponantComponent implements OnInit {

  loginerror: any;

  Admin = new FormGroup({
adminID: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private http:HttpClient , private router:Router){

  }



  ngOnInit(): void {
     
  }

  adminlogin():void{
     const url = 'http://localhost:8080/admin/Adminlogin';

    console.log('Login attempt with:', this.Admin.value);

    this.http.post<boolean>(url, this.Admin.value).subscribe(
      (response) => {
        if (response) {
          console.log('Login successful!');

          this.router.navigate(['/admindashboard'])
         

        } else {


          this.loginerror="Invalid Admin ID or password."

          console.log('Invalid voter ID or password.');
        }
      },
      (error) => {
        console.error('Login failed due to an error:', error);
      }
    );
  }
  get f() {
    return this.Admin.controls;
  }
  reloadPage(): void {
    window.location.reload(); // This will reload the entire page
  }
}