import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultcomponant',
  imports: [CommonModule,RouterLink],
  templateUrl: './resultcomponant.component.html',
  styleUrl: './resultcomponant.component.css'
})
export class ResultcomponantComponent implements OnInit {
resultlist :any[]=[];
constructor(private http:HttpClient){}
  ngOnInit(): void {
      this.getresult();
  }
  getresult():void{
    this.http.get("http://localhost:8080/votes/grouped-by-candidate").subscribe((response:any)=>{
this.resultlist=response;
    })

  }
}
