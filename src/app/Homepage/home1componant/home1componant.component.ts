import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home1componant',
  imports: [RouterLink],
  templateUrl: './home1componant.component.html',
  styleUrl: './home1componant.component.css'
})
export class Home1componantComponent implements OnInit {

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
