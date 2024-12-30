import { CommonModule, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-admin',
  imports: [CommonModule,RouterLink,UpperCasePipe,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  poster= new FormGroup({
    posterID:new FormControl(),
    pcontent : new FormControl(),
  })
  posterliste:any[]=[];
  
    resultlist:any[]=[];
  
    clist: any[]=[];
  
    constructor(private http:HttpClient){
  
    }
    ngOnInit() {
      this.getcandidate();
      this.getresult();
      this.getposter()
    }
  
  
    reloadPage(): void {
      window.location.reload(); // This will reload the entire page
    }
    getcandidate(){
  
     this.http.get("http://localhost:8080/candidates/getcand").subscribe((result:any)=>{
  
      this.clist=result;
  
     })
    }
    deletecandidate(c_id:any) {
      const baseURL = "http://localhost:8080/candidates/delete";
      this.http.delete(baseURL + "/" + c_id).subscribe((response)=>{
        console.log(response);
        this.getcandidate();
      }, error => {
        console.log("some error is comming" + error);
      })
    }
  
  
    getresult(){
      this.http.get("http://localhost:8080/votes/grouped-by-candidate").subscribe((response:any)=>{
  this.resultlist=response;
      })
    }
  
  
  
    addposter(){
      const url = "http://localhost:8080/poster/addposter";
  
      this.http.post(url,this.poster.value).subscribe((response:any)=>{
  
      })
    }
  
    getposter(){
      this.http.get("http://localhost:8080/poster/getposter").subscribe((response:any)=>{
        this.posterliste=response;
      })
    }
  
    deleteposter(posterId:any){
      const baseURL = "http://localhost:8080/poster/deleteposter";
      this.http.delete(baseURL + "/" + posterId).subscribe((response)=>{
        console.log(response);
        this.getposter();
      }, error => {
        console.log("some error is comming" + error);
      })
  
    }
  }
  