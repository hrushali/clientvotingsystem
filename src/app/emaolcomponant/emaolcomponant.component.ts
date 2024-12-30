import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import emailjs from 'emailjs-com';  

@Component({
  selector: 'app-emaolcomponant',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './emaolcomponant.component.html',
  styleUrl: './emaolcomponant.component.css'
})
export class EmaolcomponantComponent implements OnInit {
  
    contact = new FormGroup({
      subject: new FormControl(''),
      massage: new FormControl(''),  
    });
  
    responseMessage: string | null = null;
  
    constructor(private router:Router) {}
  
    ngOnInit(): void {}
  
    onSubmit(): void {
      if (this.contact.valid) {
        const formData = this.contact.value;
    
        
        const templateParams = {
          to_name: 'Admin',    
          from_name: 'User',      
          subject: formData.subject, 
          massage: formData.massage  
        };
    
      
        emailjs.init('G5CZgAqfGx8R9ZxnS'); 
    
       
        emailjs
          .send(
            'service_v18u807',  
            'template_m5hu4vy',  
            templateParams,
            'G5CZgAqfGx8R9ZxnS' 
          )
          .then(
            (response) => {
              console.log('Email sent successfully:', response);
              this.responseMessage = 'Your query has been sent successfully!';
              this.contact.reset(); 
            },
            (error) => {
              console.error('Error sending email:', error);
              this.responseMessage = `Failed to send your query. Error: ${error.text || error.message}`;
            }
          );

          this.router.navigate(["/emailsubmit"])

      } else {
        this.responseMessage = 'Please fill out all fields.';
      }
    }
    
  }

