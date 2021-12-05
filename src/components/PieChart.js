import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Pie = (props) => {
  const data = props.rooms.map((room) => {
    const container = {};
    container["name"] = room.name;
    container["powerUsage"] = room.powerUsage.value;
    return container;
  });

  const pieChart = useRef();

  useEffect(() => {
    const piedata = d3.pie().value((d) => d.powerUsage)(data);

    const arc = d3.arc().innerRadius(0).outerRadius(200);

    const colors = d3.scaleOrdinal([
      "#00A19D",
      "#519259",
      "#B24080",
      "#FFF8E5",
      "#AB6D23",
    ]);

    const svg = d3
      .select(pieChart.current)
      .attr("width", 600)
      .attr("height", 600)
      .append("g")
      .attr("transform", "translate(300,300)");

    const tooldiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "orange");

    svg
      .append("g")
      .selectAll("path")
      .data(piedata)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colors(i))
      .attr("stroke", "white")
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(`${d.data.name}:` + " " + `${d.data.powerUsage}` + "KwH");
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });
  });

  return (
    <div id="chartArea">
      <svg ref={pieChart}></svg>
    </div>
  );
};

export default Pie;
