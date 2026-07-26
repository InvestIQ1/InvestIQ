import { useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';
import type { Data, Layout } from 'plotly.js';
import '../container/container.scss'
import { useState } from 'react';

// import { Container } from "../container/Container";
import './_graph.scss';

export const Graph = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1200;

  const fontSize = isMobile ? 10 : isTablet ? 10 : 12;
  const barWidth = isMobile ? 0.4 : isTablet ? 0.5 : 0.5;
  const tickLen = isMobile ? 8 : 8
  const marginScreen = isMobile ? { t: 20, b: 20, l: 0, r: 0 } : isTablet ? { t: 10, b: 45, l: 0, r: 0 } : { t: 10, b: 45, l: 0, r: 0 }
  const orientationOf = isMobile ? "h" : "v"
  const xArray: string[] = ["Свинина", "Гов’ядина", "Курятина", "Риба", "Паніні", "Кава", "Спагетті", "Шоколад", "Маслини", "Зелень"];
  const yArray: number[] = [5000, 4500, 3200, 2100, 1800, 1700, 1500, 800, 500, 300];
  const colorOne: string = "#FF751D"; 
  const colorTwo: string = "#FFDAC0"; 
  const alternatingColors = xArray.map((_, index) => 
    index % 2 === 0 ? colorOne : colorTwo
  );

  const count = xArray.length;
  const center = (count - 1) / 2; 

  const visibleSpanCount = isMobile ? 8 : isTablet ? 11 : 12
  const visibleSpan = Math.max(count, visibleSpanCount); 

  const xMin = center - visibleSpan / 2;
  const xMax = center + visibleSpan / 2;


  
  const data: Data[] = [
    {
    x: isMobile ? yArray : xArray,
    y: isMobile ? xArray : yArray,
    type: "bar",
    orientation: orientationOf,
    text: yArray.map(String),
    textposition: "outside",
    textfont: {
        size: fontSize,  
        color: isMobile ? "transparent" : "#52555F",
        },
        
        marker: {
            cornerradius: 10,
            color: alternatingColors,
                  
        } as any,
        
        width: barWidth
    },

  ];



  const layout: Partial<Layout> = {
    dragmode: false,
    autosize: true, 

  xaxis: isMobile ? {
      showticklabels: false,
      showgrid: false,  
      gridcolor: "#F5F6FB", 
      zeroline: false,
      zerolinecolor: "#F5F6FB",
      fixedrange: true,
      range: [0, Math.max(...yArray) * 1.05],
    } : {
      range: [xMin, xMax],
      tickangle: 0,  
      categoryorder: "total descending", 
      fixedrange: true,
      tickfont: {
        size: fontSize, 
        color: "#52555F",
      },
      ticklen: tickLen,              
      tickcolor: "transparent",
    },

    yaxis: isMobile ? {
      categoryorder: "total ascending",
      fixedrange: true,              
      tickcolor: "transparent",
    } : {
      showticklabels: false, 
      zeroline: true,
      zerolinecolor: "#F5F6FB",
      zerolinewidth: 2,
      showgrid: true,  
      gridcolor: "#F5F6FB", 
      gridwidth: 2,
      fixedrange: true,
    },

    margin: marginScreen,

  };

  if (isMobile) {
    layout.annotations = xArray.flatMap((label, i) => [
    {
      x: 0,
      y: label,
      xref: "paper",
      yref: "y",
      text: label,
      showarrow: false,
      xanchor: "left",
      yshift: 20,
      font: {
        size: 10,
        color: "#52555F",
      },
    },
    {
      x: 1,
      y: label,
      xref: "paper",
      yref: "y",
      text: String(yArray[i]),
      showarrow: false,
      xanchor: "right",
      yshift: 18,
      font: {
        size: 10,
        color: "#52555F",
      },
    },
  ]);
}

  useEffect(() => {
    Plotly.newPlot("myPlot", data, layout);
    return () => {
      Plotly.purge("myPlot");
    };
  }, [windowWidth]); 

  return (
    <div className="container">
      <div id="myPlot"  />
    </div>
  );
};