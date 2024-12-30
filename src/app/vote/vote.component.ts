import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  
  clist: any[] = [];
  dbvoter: any;
  voterID: any;

  votes = new FormGroup({
    c_id: new FormControl(),
    voterID: new FormControl(),
  });

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const sessionurl = 'http://localhost:8080/voter/session';
    this.http.get(sessionurl).subscribe((response: any) => {
      if (response) {
        this.dbvoter = response;
        this.voterID = response.voterID;
        console.log("voterID from session:", this.voterID);
      } else {
        console.log("Response did not work");
      }
    });

    this.getvotescard();
  }

  getvotescard(): void {
    this.http.get("http://localhost:8080/candidates/getcand").subscribe((response: any) => {
      this.clist = response;
    });
  }

  selectCandidate(c_id: number): void {
    this.votes.patchValue({
      c_id: c_id, 
      voterID: this.voterID 
    });
    console.log('Selected candidate:', c_id);
  }

  addvotes(): void {
    if (this.votes.valid) {
      // Prepare the JSON object to send
      const voteData = {
        voter: {
          voterID: this.votes.value.voterID
        },
        candidate: {
          c_id: this.votes.value.c_id
        }
      };

      console.log("Submitting Vote with values:", voteData);

      const urlvotes = "http://localhost:8080/votes/addvotes";
      this.http.post(urlvotes, voteData).subscribe({
        next: (response: any) => {
          console.log("Vote successfully added:", response);

          this.router.navigate(['/submitvote'])
        },
        error: (error) => {
          alert("your response already submited");
        }
      });
    } else {
      console.error('Form is not valid.');
    }
  }
}
