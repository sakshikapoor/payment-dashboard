import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() data;
  @Input() isActionCard;

  showActionButton = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
