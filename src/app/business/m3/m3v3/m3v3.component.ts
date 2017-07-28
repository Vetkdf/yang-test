import { Component, OnInit,Inject } from '@angular/core';
import { Auxiliary } from '../../../common/constants/auxiliary';
import * as d3 from 'd3';

@Component({
  selector: 'app-m3v3',
  templateUrl: './m3v3.component.html',
  styleUrls: ['./m3v3.component.css']
})
export class M3v3Component implements OnInit {

  constructor(@Inject('title') private titleService) {
    this.titleService.setTitle("折线表格");
  }

  ngOnInit() {
    Auxiliary.prototype.ControlHeight();
  }

  /*
 CrystalLineObject()
  {
    this.group=null;
    this.path=null;
    this.oldData=[];

    this.init=function(id)
    {
      var arr=dataset[id];
      this.group=svg.append("g");

      var line = d3.svg.line()
      .x(function(d,i){return xScale(i);})
      .y(function(d){return yScale(d);});

      //添加折线
      this.path=this.group.append("path")
      .attr("d",line(arr))
      .style("fill","none")
      .style("stroke-width",1)
      .style("stroke",lineColor[id])
      .style("stroke-opacity",0.9);

      //添加系列的小圆点
      this.group.selectAll("circle")
      .data(arr)
      .enter()
      .append("circle")
      .attr("cx", function(d,i) {
        return xScale(i);
      })
      .attr("cy", function(d) {
        return yScale(d);
      })
      .attr("r",5)
      .attr("fill",lineColor[id]);
      this.oldData=arr;
    };

    //动画初始化方法
    this.movieBegin=function(id)
    {
      var arr=dataset[i];
      //补足/删除路径
      var olddata=this.oldData;
      var line= d3.svg.line()
      .x(function(d,i){if(i>=olddata.length) return w-padding; else return xScale(i);})
      .y(function(d,i){if(i>=olddata.length) return h-foot_height; else return yScale(olddata[i]);});
      //路径初始化
      this.path.attr("d",line(arr));
      //截断旧数据
      var tempData=olddata.slice(0,arr.length);
      var circle=this.group.selectAll("circle").data(tempData);
      //删除多余的圆点
      circle.exit().remove();
      //圆点初始化，添加圆点,多出来的到右侧底部
      this.group.selectAll("circle")
      .data(arr)
      .enter()
      .append("circle")
      .attr("cx", function(d,i){
        if(i>=olddata.length) return w-padding; else return xScale(i);
      })
      .attr("cy",function(d,i){
        if(i>=olddata.length) return h-foot_height; else return yScale(d);
      })
      .attr("r",5)
      .attr("fill",lineColor[id]);
      this.oldData=arr;
    };

    //重绘加动画效果
    this.reDraw=function(id,_duration)
    {
      var arr=dataset[i];
      var line = d3.svg.line()
      .x(function(d,i){return xScale(i);})
      .y(function(d){return yScale(d);});
      //路径动画
      this.path.transition().duration(_duration).attr("d",line(arr));
      //圆点动画
      this.group.selectAll("circle")
      .transition()
      .duration(_duration)
      .attr("cx", function(d,i) {
        return xScale(i);
      })
      .attr("cy", function(d) {
        return yScale(d);
      })
    };

    //从画布删除折线
    this.remove=function()
    {
      this.group.remove();
    };

  }
  */

}
