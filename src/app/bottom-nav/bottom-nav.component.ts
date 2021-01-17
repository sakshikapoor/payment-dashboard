import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  currentURL;
  isHomePage = false;
  showNotification = true;

  constructor(
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.url.subscribe((url: any) => {
      if (url && url.length) {
        this.currentURL = url[0].path;
        if (this.currentURL === '') {
          this.isHomePage = true;
        }
      }
    })
  }

  ngOnInit() {
  }

}
