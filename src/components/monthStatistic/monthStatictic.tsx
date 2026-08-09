import React from "react";
import "./monthStatistic.scss";
import { useAppSelector } from "../../redux/dispatchHook";
import { selectTransactions } from "../../redux/Transaction/transactionSelectors";

type activeTab = "expense" | "income";

interface Props {
  activeTab: activeTab;
}

export const MonthStatistic: React.FC<Props> = ({ activeTab }) => {
  const trans = useAppSelector(selectTransactions);

  const sum = trans
    .filter((tran) => {
      return tran.type === activeTab;
    })
    .reduce((acc, tran) => {
      return tran.sum + acc;
    }, 0);

  const getMonth = trans.map((tran) => {
    const date = tran.date;
    const [day, month, year] = date.split(".");
    const transDate = new Date(+year, +month - 1, +day);
    const monthDate = transDate.toLocaleString(navigator.language, {
      month: "long",
    });
    return monthDate
  });

  const monthInfo = getMonth.filter((month, index, array) => {
     console.log("month", month);
     return array.indexOf(month) === index 
  })
  console.log(monthInfo);
  

  return (
    <div className="month-statistic">
      <h3 className="month-statistic__title">ЗВЕДЕННЯ</h3>
      <ul className="month-statistic__list">
        {monthInfo.map((item) => (
          <li key={item} className="month-statistic__item">
            <span className="month-statistic__month">{item}</span>
            <span className="month-statistic__total">{sum}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
