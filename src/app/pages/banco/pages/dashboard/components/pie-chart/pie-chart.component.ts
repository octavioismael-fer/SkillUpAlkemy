import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'ab-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          textAlign: 'left',
        },
      }
    }
  };

  public pieChartLabels = ['Compras','Servicios', 'Restaurantes y bares' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  ngOnInit(): void {
  }

}
