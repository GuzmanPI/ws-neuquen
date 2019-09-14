import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {
  /** @desc The chart's labels. */
  chartLabels = ['Intelligence', 'Speed', 'Durability', 'Strength', 'Combat', 'Coding'];

  /** @desc The chart's Material Design colors */
  chartColors: any[] = [
    {
      backgroundColor: ['#4CAF50', '#F44336', '#03A9F4', '#673AB7', '#E91E63', '#FFC107']
    }
  ];

  /** @desc The chart Type. */
  chartType = 'doughnut';

  /** @desc The chart's data. */
  @Input()
  data: number[];

  constructor() {}
}
