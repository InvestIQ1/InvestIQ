import { useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';
import type { Data, Layout } from 'plotly.js';
import '../container/container.scss'

// import { Container } from "../container/Container";
import './_graph.scss';

export const Graph = () => {
  const xArray: string[] = ["Свинина", "Гов’ядина", "Курятина", "Риба", "Паніні", "Кава", "Спагетті", "Шоколад", "Маслини", "Зелень"];
  const yArray: number[] = [5000, 4500, 3200, 2100, 1800, 1700, 1500, 800, 500, 300];
  const colorOne: string = "#FF751D"; 
  const colorTwo: string = "#FFDAC0"; 
  const alternatingColors = xArray.map((_, index) => 
    index % 2 === 0 ? colorOne : colorTwo
  );

  const count = xArray.length;
  const center = (count - 1) / 2; 

  const visibleSpan = Math.max(count, 12); 

  const xMin = center - visibleSpan / 2;
  const xMax = center + visibleSpan / 2;

  const data: Data[] = [
    {
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "v",
    text: yArray.map(String),
    textposition: "outside",     
    ...({ textpad: 10 } as any),
    textfont: {
        size: 12,  
        color: "#52555F",
        },
        
        marker: {
            cornerradius: 10,
            color: alternatingColors,
                  
        } as any,
        
        width: 0.5
    },

  ];



  const layout: Partial<Layout> = {
    width: 900, 
    height: 400,
    dragmode: false,
    autosize: true, 

    yaxis: {
        showticklabels: false, 
        zeroline: true,
        zerolinecolor: "#F5F6FB",
        zerolinewidth: 2,
        showgrid: true,  
        gridcolor: "#F5F6FB", 
        gridwidth: 2,
    },

    xaxis: {
    range: [xMin, xMax],
      tickangle: 0,  
      categoryorder: "total descending", 
      tickfont: {
        size: 12, 
        color: "#52555F",
      },

      ticklen: 6,              
      tickcolor: "transparent",
      
    },

    margin: { t: 10, b: 45, l: 45, r: 0 },

  };

  useEffect(() => {
    Plotly.newPlot("myPlot", data, layout);
    return () => {
      Plotly.purge("myPlot");
    };
  }, []); 

  return (
    <div className="container">
      <div id="myPlot"  />
    </div>
  );
};