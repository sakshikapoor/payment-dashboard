import { Component, OnInit, Input } from '@angular/core';
import { VendorDetailsService } from '../service/vendor-details.service';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})
export class RecentTransactionComponent implements OnInit {

  @Input() recentTransactions;
  vendors = [];

  constructor(private vendorDetailsService: VendorDetailsService) { }

  ngOnInit() {
    this.vendorDetailsService.vendors.subscribe((response) => {
      this.vendors = response;
    })
  }

  getIcon(id) {
    return (this.vendors.find((vendor) => vendor.id === id)).icon;
  }

}
