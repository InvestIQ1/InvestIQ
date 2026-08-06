import './transTable.scss';
import { FaTrash } from "react-icons/fa";

export const TransTable: React.FC = () => {
  const rows = [
    { id: "1", date: "05.09.2019", descr: "Моя зп", category: "ЗП", sum: 20000 },
    { id: "2", date: "05.09.2019", descr: "% на залишок на карті", category: "Дод. прибуток", sum: 500 },
  ];

  const emptyRowsCount = 6;

  return (
    <div className="transTable__wrapper">
      <div className="transTable__border">
      <table className="transTable">
        <thead className="transTable__head">
          <tr className="transTable__headRow">
            <th className="transTable__headCell">ДАТА</th>
            <th className="transTable__headCell">ОПИС</th>
            <th className="transTable__headCell">КАТЕГОРІЯ</th>
            <th className="transTable__headCell">СУМА</th>
            <th className="transTable__headCell transTable__headCell--action"></th>
          </tr>
        </thead>
        <tbody className="transTable__body">
          {rows.map((item) => (
            <tr className="transTable__row" key={item.id}>
              <td className="transTable__cell">{item.date}</td>
              <td className="transTable__cell">{item.descr}</td>
              <td className="transTable__cell">{item.category}</td>
              <td className="transTable__cell transTable__cell--sum">
                {item.sum.toFixed(2)} грн.
              </td>
              <td className="transTable__cell transTable__cell--action">
                <button className="transTable__deleteBtn">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {Array.from({ length: emptyRowsCount }).map((_, i) => (
            <tr className="transTable__row transTable__row--empty" key={`empty-${i}`}>
              <td className="transTable__cell"></td>
              <td className="transTable__cell"></td>
              <td className="transTable__cell"></td>
              <td className="transTable__cell"></td>
              <td className="transTable__cell"></td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
    </div>
  );
};