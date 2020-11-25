import { Component, OnInit } from '@angular/core';
import {Payment} from 'src/app/app-types/payment';

@Component({
	selector: 'app-upcoming-payments',
	templateUrl: './upcoming-payments.component.html',
	styleUrls: ['./upcoming-payments.component.less']
})
export class UpcomingPaymentsComponent implements OnInit {

	payments: Array<Payment>

	constructor() { }

	ngOnInit(): void {
		this.setPayments();
	}

	setPayments(){
		this.payments = [
			{
				iconSrc: "ri-briefcase-line",
				paymentOrigin: "Belong Interactive",
				paymentCategory: "Salary",
				amount: "+$2000"
			},
			{
				iconSrc: "ri-paypal-line",
				paymentOrigin: "Freelance payment",
				paymentCategory: "Paypal",
				amount: "$45.00"
			}
		];
	}

}
