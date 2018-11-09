import { EmailService } from './../../email.service';
import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(private _emailService: EmailService) { }
  email = new Email('','','','');

 sendEmail() {
    this._emailService.sendEmail(this.email);
  }

  ngOnInit() {
  }

}
