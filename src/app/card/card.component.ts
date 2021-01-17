import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActionCardDetails } from '../interfaces/actionCardDetails';
import { InfoCardDetails } from '../interfaces/infoCardDetails';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

	@Input() data;
	@Input() isActionCard;

	actionCard: ActionCardDetails;
	infoCard: InfoCardDetails;

	showActionButton = false;

	constructor() { }

	ngOnInit() { }

	ngOnChanges() {
		if (this.isActionCard) {
			this.actionCard = this.data.value;
		} else {
			this.infoCard = this.data.value;
		}
	}

}
