import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
	selector: 'app-monthly-spending-insights',
	templateUrl: './monthly-spending-insights.component.html',
	styleUrls: ['./monthly-spending-insights.component.less']
})
export class MonthlySpendingInsightsComponent implements OnInit, AfterViewInit {

	currentYear: number;

	@ViewChild("chartCanvas") canvasEl: ElementRef;

	constructor() { }

	ngOnInit(): void {
		this.currentYear = new Date().getFullYear();
	}

	ngAfterViewInit(): void {
		this.initializeChart();
	}

	initializeChart(): void {
		let chartData: Array<number> = [0,1,3,2.5,2.7,6,13,13,9,10,2,2,4,3,3,15,15,8,6,2,2,10,10,10];
		let labels: Array<string> = chartData.map(data => data + "");
		let ctx: CanvasRenderingContext2D = this.canvasEl.nativeElement.getContext('2d');
		
		/**
		 * Create gradient for chart fill area
		 */
		let gradient: CanvasGradient = ctx.createLinearGradient(0,0,0,400);
		gradient.addColorStop(0, 'rgba(0,0,0,0.3)');   
		gradient.addColorStop(0.5, 'rgba(242,245,250,0.1)');
		gradient.addColorStop(0.75, 'rgba(242,245,250,0)');
		gradient.addColorStop(1, 'rgba(242,245,250,0)');

		new Chart(ctx,  {
			// The type of chart we want to create
			type: 'line',
		
			// The data for our dataset
			data: {
				labels: labels,
				datasets: [{
					label: 'Monthly Insights',
					backgroundColor: gradient,
					borderColor: 'rgb(0, 0, 0)',
					pointRadius: 0,
					data: chartData
				}]
			},
		
			// Configuration options go here
			options: {
				responsive: true,
				responsiveAnimationDuration: 0,
				maintainAspectRatio: false,
			  	legend:{
					display: false
			  	},
			  	scales: {
					xAxes: [{
						display: false,
						gridLines: {
							display:false,
							drawBorder: false
						}
					}],
					yAxes: [{
						display: false,
						gridLines: {
							display:false,
							drawBorder: false
						}   
					}]
				}
			}
		});

	}

}
