import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { VendorsComponent } from './vendors/vendors.component';
import { RecentTransactionComponent } from './recent-transaction/recent-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    BillPaymentComponent,
    VendorsComponent,
    RecentTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
