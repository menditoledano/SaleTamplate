import {EmailService} from './../../email.service';
import {Component, OnInit} from '@angular/core';
import {Email} from '../../models/email';
import swal from 'sweetalert2';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as carriers from '../../db/carriers.json';

//

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(
    private _emailService: EmailService,
    private modalService: NgbModal
  ) {}

  carriers = carriers.data;


  closeResult: string;
  email = new Email('', '', '', '');
  swal = null;
  model: any = {};

  test(event) {
    const events = event;
    console.log(events);
  }
  clicked(index) {
    // only show clicked img info
    console.log(this.carriers[index]);
    // @ts-ignore
    this.carriers[index].show = !this.carriers[index].show;
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'paymantModal' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  sendEmail() {
    swal
      .fire({
        title: 'Are you sure?',
        text: 'sent you email?!',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      })
      .then(result => {
        if (result.value) {
          this._emailService.sendEmail(this.email);
          swal.fire(
            'Your email has been sent',
            'Thanks for contacting us!',
            'success'
          );
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelled', 'Your mail is cancaled', 'error');
        }
      });
  }

  ngOnInit() {}
}
