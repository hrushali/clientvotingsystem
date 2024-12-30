import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-calvotescomponant',
  imports: [],
  templateUrl: './calvotescomponant.component.html',
  styleUrl: './calvotescomponant.component.css'
})
export class CalvotescomponantComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//   votes: { c_id: number; voterID: number; total_votes: number }[] = [];
//   newVote = {
//     voter: {
//       voterID: '',
//     },
//     candidate: {
//       c_id: null,
//     },
//   };

//   private apiUrl = 'http://localhost:8080/votes/v'; // Replace with your backend API URL

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getVotes();
//   }

//   getVotes(): void {
//     this.http.get<any[]>(`${this.apiUrl}/votes`)  // Update with your backend URL
//       .subscribe(
//         (data) => {
//           this.votes = this.groupVotesByCandidateAndVoter(data); // Group votes by candidate and voter
//         },
//         (error) => {
//           console.error('Error fetching votes:', error);
//         }
//       );
//   }

//   // Grouping votes by candidate and voter and counting total votes
//   groupVotesByCandidateAndVoter(votes: any[]): { c_id: number; voterID: number; total_votes: number }[] {
//     const groupedVotes = {};

//     // Loop through each vote and group by candidate_id and voterID
//     votes.forEach(vote => {
//       const key = `${vote.c_id}-${vote.voterID}`; // Combine candidate_id and voterID for unique grouping
//       if (groupedVotes[key]) {
//         groupedVotes[key]++;
//       } else {
//         groupedVotes[key] = 1;
//       }
//     });

//     // Convert the grouped votes into an array of { candidate_id, voterID, total_votes }
//     return Object.keys(groupedVotes).map(key => {
//       const [c_id, voterID] = key.split('-');
//       return {
//         c_id: Number(c_id),
//         voterID: voterID,
//         total_votes: groupedVotes[key]
//       };
//     });
//   }

//   addVote(): void {
//     this.http.post(this.apiUrl, this.newVote).subscribe(
//       () => {
//         console.log('Vote added successfully');
//         this.getVotes(); // Refresh the vote counts after adding a vote
//       },
//       (error) => {
//         console.error('Error adding vote:', error);
//       }
//     );
//   }
}