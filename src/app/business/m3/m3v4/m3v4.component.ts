import { Component, OnInit,Inject } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';
import * as d3 from 'd3';

@Component({
  selector: 'app-m3v4',
  templateUrl: './m3v4.component.html',
  styleUrls: ['./m3v4.component.css']
})
export class M3v4Component implements OnInit {

  constructor(@Inject('title') private titleService) {
    this.titleService.setTitle("画中国地图");
  }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
    this.showMap();
  }

  showMap():void {
    let width  = 1000;
  	let height = 1000;

  	let svg = d3.select("#container").append("svg")
  	    .attr("width", width)
  	    .attr("height", height)
  	    .append("g")
  	    .attr("transform", "translate(0,0)");

  	let projection = d3.geoMercator()
        .center([107, 31])
        .scale(850)
        .translate([width/2, height/2]);

  	let path = d3.geoPath().projection(projection);
    let color = d3.scaleOrdinal(d3.schemeCategory20);
  	d3.json("http://114.215.44.2:83/china.geojson", function(error, root) {

  	if (error) return console.error(error);
  	//console.log(root.features);

		svg.selectAll("path")
			.data( root.features )
			.enter()
			.append("path")
			.attr("stroke","#000")
			.attr("stroke-width",1)
			.attr("fill", function(d,i){ return color(i); })
			.attr("d", path )
			.on("mouseover",function(d,i){
                d3.select(this).attr("fill","yellow");
      })
      .on("mouseout",function(d,i){
          d3.select(this).attr("fill",color(i));
      });

  	});
  }

}
