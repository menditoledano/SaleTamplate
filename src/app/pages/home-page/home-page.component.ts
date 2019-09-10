import {EmailService} from './../../email.service';
import {Component, OnInit} from '@angular/core';
import {Email} from '../../models/email';
import swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Carrier} from '../../models/carriers.model';


//


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _emailService: EmailService, private modalService: NgbModal) {
  }

  carriers: Carrier[] = [{
    name: 'AT&T',
    id: 1,
    pictureUrl: '',
    price: '45',
    paypalButtonId: '79GNJHL8U54LQ',
    detailes: 'string'
  }, {
    name: 'T-Mobile',
    id: 2,
    pictureUrl: '',
    price: '85',
    paypalButtonId: 'T7ZMX9GPLBL9W',
    detailes: 'string'
  }, {
    name: 'H2O',
    id: 3,
    pictureUrl: '49U339MG7BDGS',
    price: '115',
    paypalButtonId: '',
    detailes: ''
  },
    {
      name: 'Test',
      id: 4,
      pictureUrl: '',
      price: '0.1',
      paypalButtonId: 'VU3MFB3QLXJGU',
      detailes: 'test Test unlimited'
    }];

  closeResult: string;
  email = new Email('', '', '', '');
  swal = null;
  model: any = {};


  test(event) {
    const events = event;
    console.log(events);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, {windowClass: 'paymantModal'});
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
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Your mail is cancaled',
          'error'
        );
      }
    });
  }

  ngOnInit() {
  }

}
