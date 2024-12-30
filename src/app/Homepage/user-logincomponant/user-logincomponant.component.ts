import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-user-logincomponant',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './user-logincomponant.component.html',
  styleUrls: ['./user-logincomponant.component.css'], // Corrected property name
})
export class UserLogincomponantComponent implements OnInit {
 

  logingerror : any;
 
  voter = new FormGroup({
    votername: new FormControl(''), 
    password: new FormControl(''), 
  });

  // votes= new FormGroup({
  //   voterID:new FormControl(''),
  // });

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {
    
   
    
  }

  /**
   * Handles user login by making a POST request to the back-end.
   */
  login(): void {
    const url = 'http://localhost:8080/voter/login';

    console.log('Login attempt with:', this.voter.value);

    this.http.post<boolean>(url, this.voter.value).subscribe(
      (response) => {
        if (response!=null) {
          console.log('Login successful!');

          this.router.navigate(['/home2'])
         

        } else {


          this.logingerror="Invalid voter ID or password."

          console.log('Invalid voter ID or password.');
        }
      },
      (error) => {
        console.error('Login failed due to an error:', error);
      }
    );
  }





 
  
  get f() {
    return this.voter.controls;
  }
}
