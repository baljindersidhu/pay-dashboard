import { Component, OnInit } from '@angular/core';
import {Transaction} from 'src/app/app-types/transaction';

@Component({
	selector: 'app-recent-transactions',
	templateUrl: './recent-transactions.component.html',
	styleUrls: ['./recent-transactions.component.less']
})
export class RecentTransactionsComponent implements OnInit {

	transactions: Array<Transaction>;

	constructor() { }

	ngOnInit(): void {
		this.setTransactions();
	}

	setTransactions(): void{
		this.transactions = [
			{
				iconSrc: "ri-gift-line",
				transactionCategory: "Shopping",
				transactionDate: new Date(1605877202426),
				amount: 300
			},
			{
				iconSrc: "ri-shopping-basket-line",
				transactionCategory: "Grocery",
				transactionDate: new Date(1605426911491),
				amount: 45
			},
			{
				iconSrc: "ri-palette-line",
				transactionCategory: "Art Class",
				transactionDate: new Date(1605142631491),
				amount: 125
			}
		]
	}

}
