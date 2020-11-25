import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'transactionDate'
})
export class TransactionDatePipe implements PipeTransform {

	private monthLabels: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	transform(value: Date, ...args: unknown[]): string {
		if (!value) return "Not Available";

		let day = value.getDate();
		let month = this.monthLabels[value.getMonth()];
		let year = value.getFullYear();
		let hour = value.getHours();
		let minutes = value.getMinutes();

		return `${day} ${month} ${year} ${hour}:${minutes}`;
	}

}
