import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit {
  public data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
    { name: 'D', value: 40 },
    { name: 'E', value: 50 }
  ];

  private colors = [
    // '#EB7181', // red
    // '#468547', // green
    // '#FFD558', // yellow
    // '#3670B2', // blue
    '#B76EDA', //novus
  ];

  constructor() { }

  ngOnInit(): void {
    const margin = { top: 16, right: 24, bottom: 24, left: 24 };
    const width = 960 - margin.left - margin.right;
    const height = document.getElementById('bar-card')!.offsetHeight + margin.top;

    const svg = d3.select('#chart-container')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.bottom})`);

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(this.data.map(d => d.name));

    const y = d3.scaleLinear()
      .range([height, 20])
      .domain([0, d3.max(this.data, d => d.value)!]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    svg.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('path')
      .attr('d', d => {
        const barHeight = height - y(d.value);
        const radius = 50;
        const x0 = x(d.name)!;
        const x1 = x0 + x.bandwidth();
        const y0 = y(d.value);
        const y1 = height;

        return `
      M ${x0},${y0 + radius}
      A ${radius},${radius} 0 0 1 ${x0 + radius},${y0}
      L ${x1 - radius},${y0}
      A ${radius},${radius} 0 0 1 ${x1},${y0 + radius}
      L ${x1},${y1}
      L ${x0},${y1}
      L ${x0},${y0 + radius}
      Z
    `;
      })
      .style('fill', this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))]);
  }
}
