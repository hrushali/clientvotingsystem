import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidatecomponant',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './candidatecomponant.component.html',
  styleUrl: './candidatecomponant.component.css'
})
export class CandidatecomponantComponent {


constructor(private http:HttpClient){

}

   candidates = new FormGroup({
      c_id: new FormControl(),
      c_name: new FormControl(),
      partyname: new FormControl(),
     
      
    });
    // ngOnInit(){
    //   this.addcandidate();
    // }
  
    reloadPage(): void {
      window.location.reload(); // This will reload the entire page
    }
    addcandidate(){
      const url = "http://localhost:8080/candidates/cand/addcand";
      this.http.post(url,this.candidates.value).subscribe((response:any)=>{
   })
    }
  
  }


