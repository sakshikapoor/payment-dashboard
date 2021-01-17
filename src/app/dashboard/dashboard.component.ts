import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  activeAccounts = 3;
  simplCardData = new BehaviorSubject<any>(null);
  payLaterCardData = new BehaviorSubject<any>(null);

  ngOnInit() {
    this.getPaymentDetails();
  }

  getPaymentDetails() {
    this.simplCardData.next({
      minAmountDue: 1500,
      dueDate: '15 Aug',
      totalExpenditure: 1800,
      billOverdue: true,
    });

    this.payLaterCardData.next({
      amountDue: 1150,
      message: 'Clear last month’s dues with ICICI bank on/before 15th to avoid late payment fees. Manage account',
    })
  }
}
