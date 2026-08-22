import { useEffect } from "react";
import Plotly from "plotly.js-dist-min";
import type { Data, Layout } from "plotly.js";
import "../container/container.scss";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "../container/Container";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/dispatchHook";
import { selectCategory } from "../../redux/Category/categorySelector";
import { selectTransactions } from "../../redux/Transaction/transactionSelectors";
import "./_graph.scss";

export const Graph = () => {
  const { theme } = useContext(ThemeContext)!;
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  const getGraphColor = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const graphText = getGraphColor("--graph-text");
  const graphGrid = getGraphColor("--graph-grid");
  const graphPrimary = getGraphColor("--graph-primary");
  const graphSecondary = getGraphColor("--graph-secondary");

  const category = useAppSelector(selectCategory);
  const transactions = useAppSelector(selectTransactions);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1200;

  const fontSize = isMobile ? 10 : isTablet ? 10 : 12;
  const barWidth = isMobile ? 0.4 : isTablet ? 0.5 : 0.5;
  const tickLen = isMobile ? 8 : 8;
  const marginScreen = isMobile
    ? { t: 20, b: 20, l: 0, r: 0 }
    : isTablet
      ? { t: 10, b: 45, l: 0, r: 0 }
      : { t: 10, b: 45, l: 0, r: 0 };
  const orientationOf = isMobile ? "h" : "v";

  const xArray: string[] = transactions
    .filter((transaction) => transaction.category === category)
    .map((transaction) => transaction.descr);
  console.log(xArray);

  const yArray: number[] = transactions
    .filter((transaction) => transaction.category === category)
    .map((transaction) => transaction.sum);
  console.log(yArray);

  const colorOne = graphPrimary;
  const colorTwo = graphSecondary;
  const alternatingColors = xArray.map((_, index) =>
    index % 2 === 0 ? colorOne : colorTwo,
  );

  const count = xArray.length;
  const center = (count - 1) / 2;

  const visibleSpanCount = isMobile ? 8 : isTablet ? 11 : 12;
  const visibleSpan = Math.max(count, visibleSpanCount);

  const xMin = center - visibleSpan / 2;
  const xMax = center + visibleSpan / 2;

  interface markerObj {
    cornerradius: number;
    color: string[];
  }

  const data: Data[] = [
    {
      x: isMobile ? yArray : xArray,
      y: isMobile ? xArray : yArray,
      type: "bar",
      orientation: orientationOf,
      width: isMobile ? 0.2 : barWidth,
      text: yArray.map(String),
      textposition: "outside",
      textfont: {
        size: fontSize,
        color: isMobile ? "transparent" : graphText,
      },

      marker: {
        cornerradius: 10,
        color: alternatingColors,
      } as markerObj,
    },
  ];

  const layout: Partial<Layout> = {
    dragmode: false,
    autosize: true,

    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",

    xaxis: isMobile
      ? {
          showticklabels: false,
          showgrid: false,
          gridcolor: graphGrid,
          zeroline: false,
          zerolinecolor: graphGrid,
          fixedrange: true,
          range: [0, Math.max(...yArray) * 1.05],
        }
      : {
          range: [xMin, xMax],
          tickangle: 0,
          categoryorder: "total descending",
          fixedrange: true,
          tickfont: {
            size: fontSize,
            color: graphText,
          },
          ticklen: tickLen,
          tickcolor: "transparent",
          tickvals: xArray,
          ticktext: xArray,
        },

    yaxis: isMobile
      ? {
          categoryorder: "total ascending",
          fixedrange: true,
          tickcolor: "transparent",
        }
      : {
          showticklabels: false,
          zeroline: true,
          zerolinecolor: graphGrid,
          zerolinewidth: 2,
          showgrid: true,
          gridcolor: graphGrid,
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
          color: graphText,
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
          color: graphText,
        },
      },
    ]);
  }

  useEffect(() => {
    Plotly.react("myPlot", data, layout);
    console.log(layout);
  }, [windowWidth, theme, transactions, category]);

  if (useLocation().pathname === "/report") {
    return (
      <Container>
        <div className="container2">
          <div id="myPlot" />
        </div>
      </Container>
    );
  } else {
    return null;
  }
};
