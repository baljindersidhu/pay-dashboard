import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../app-types/transaction';

@Component({
	selector: 'app-transaction',
	templateUrl: './transaction.component.html',
	styleUrls: ['./transaction.component.less']
})
export class TransactionComponent implements OnInit {

	@Input() transaction: Transaction;

	constructor() { }

	ngOnInit(): void {
	}

}
