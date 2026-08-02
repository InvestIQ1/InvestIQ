import React from 'react';
import './monthStatistic.css';

const MOCK_SUMMARY_DATA = [
  { id: '1', month: 'ЛИСТОПАД', total: '10 000.00' },
  { id: '2', month: 'ЖОВТЕНЬ', total: '30 000.00' },
  { id: '3', month: 'ВЕРЕСЕНЬ', total: '30 000.00' },
  { id: '4', month: 'СЕРПЕНЬ', total: '20 000.00' },
  { id: '5', month: 'ЛИПЕНЬ', total: '15 000.00' },
  { id: '6', month: 'ЧЕРВЕНЬ', total: '18 000.00' },
];

export const MonthStatistic: React.FC = () => {
  return (
    <div className="month-statistic">
      <h3 className="month-statistic__title">ЗВЕДЕННЯ</h3>
      <ul className="month-statistic__list">
        {MOCK_SUMMARY_DATA.map((item) => (
          <li key={item.id} className="month-statistic__item">
            <span className="month-statistic__month">{item.month}</span>
            <span className="month-statistic__total">{item.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default {MonthStatistic}