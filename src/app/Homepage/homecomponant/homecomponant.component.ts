import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homecomponant',
  imports: [RouterLink,CommonModule],
  templateUrl: './homecomponant.component.html',
  styleUrl: './homecomponant.component.css'
})
export class HomecomponantComponent implements OnInit {
  ngOnInit(): void {
        this.getposter();
    }
    posterliste:any[]=[];
    constructor(private http:HttpClient){}
    getposter(){
      this.http.get("http://localhost:8080/poster/getposter").subscribe((response:any)=>{
        this.posterliste=response;
      })

}
}
