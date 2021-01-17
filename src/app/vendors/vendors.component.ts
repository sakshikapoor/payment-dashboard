import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  @Input() allowedVendors: [];

  constructor() { }

  ngOnInit() {

  }

}
