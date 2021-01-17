import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.scss']
})
export class BillPaymentComponent implements OnInit {

  @Input() allowedBills = [];

  constructor() { }

  ngOnInit() {

  }

}
