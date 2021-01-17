import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorDetailsService {

  vendors = new BehaviorSubject<any>(null);

  constructor() { }
}
