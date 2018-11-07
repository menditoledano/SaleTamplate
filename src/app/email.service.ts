import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  _baseUrl = 'https://api.emailjs.com/api/v1.0/email';
  constructor(private http: HttpClient) {}

  sendEmail () {
    this.http.post("/api/sendEmail",
    {
        "name": "Customer004",
        "email": "customer004@email.com",
        "tel": "0000252525"
    })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );         
  }
}

  
