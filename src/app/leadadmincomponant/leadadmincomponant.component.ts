import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink , Router} from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-leadadmincomponant',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './leadadmincomponant.component.html',
  styleUrl: './leadadmincomponant.component.css'
})
export class LeadadmincomponantComponent implements OnInit{


leadlist:any[]=[];
  admin= new FormGroup({
    adminID: new FormControl(),
    adminname: new FormControl(),
  password:new FormControl(),
  })
  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
     this.getadmin(); 
  }
  reloadPage(): void {
    window.location.reload(); // This will reload the entire page
  }

  getadmin(){
    this.http.get("http://localhost:8080/admin/Admin").subscribe((response:any)=>{
this.leadlist=response;
    })
  }

  addadmin(){
    const url="http://localhost:8080/admin/addadmin"
    this.http.post(url,this.admin.value).subscribe((response:any)=>{
this.leadlist=response;
    })
  }


  deleteadmin(adminid:any){
    const url="http://localhost:8080/admin/deleteadmin"
    this.http.delete(url+"/"+adminid).subscribe((response)=>{
      this.getadmin();
    }, error => {
      console.log("some error is comming" + error);
    })
  }

}
