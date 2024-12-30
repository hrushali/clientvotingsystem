import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-usersignupcomponant',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './usersignupcomponant.component.html',
  styleUrl: './usersignupcomponant.component.css'
})
export class UsersignupcomponantComponent implements OnInit {

 

  constructor(private http:HttpClient){
    
  }
  voter = new FormGroup({
    voterID: new FormControl(),
    votername: new FormControl(),
    password: new FormControl(),
    createAt: new FormControl(),
    
    
  });
  ngOnInit(){
    this.getvoter
  }

  reloadPage(): void {
    window.location.reload(); // This will reload the entire page
  }
  getvoter(){
    const url = "http://localhost:8080/voter/voteradd";
    this.http.post(url,this.voter.value).subscribe((response:any)=>{
 })
  }

}
