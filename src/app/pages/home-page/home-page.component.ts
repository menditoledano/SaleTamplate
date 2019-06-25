import { EmailService } from './../../email.service';
import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import swal from 'sweetalert2';


//


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(private _emailService: EmailService) { }
  email = new Email('','','','');
  swal= null;
 
 
  //
  
  model: any = {};
  
    onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }

//


 sendEmail() {
    
    swal.fire({
      title: 'Are you sure?',
      text: 'sent you email?!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
      
    }).then((result) => {
      if (result.value) {
        this._emailService.sendEmail(this.email);
        swal.fire(
          'Your email has been sent',
          'Thanks for contacting us!',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Your mail is cancaled',
          'error'
        )
      }
    })
  }

  ngOnInit() {
  }

}
