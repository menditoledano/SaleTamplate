import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import swal from 'sweetalert2';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  choosenDate: any = -1;
  debugger;
  inputState = history.state;

  onSubmitBuy() {
    if (this.choosenDate === -1) {
      swal.fire(
        'Enter a landing date',
        'To activate the SIM',
        'warning'
      );
    } else {
      this.document.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' +
        this.inputState.paypalButtonId + '&custom=' +
        this.choosenDate.month + '/' + this.choosenDate.day + '/' + this.choosenDate.year;
    }
  }

  ngOnInit() {
  }

}

