import "./transTable.scss";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/dispatchHook";
import { selectTransactions } from "../../redux/Transaction/transactionSelectors";
import {
  getTransactions,
  removeTransaction,
} from "../../redux/Transaction/transactionOparation";

export const TransTable: React.FC = () => {
  const transactions = useAppSelector(selectTransactions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const emptyRowsCount = Math.max(0, 6 - transactions.length);

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
            {transactions.map((item) => (
              <tr className="transTable__row" key={item.id}>
                <td className="transTable__cell">{item.date}</td>
                <td className="transTable__cell">{item.descr}</td>
                <td className="transTable__cell">{item.category}</td>
                <td
                  className={`transTable__cell transTable__cell--sum ${
                    item.type === "income"
                      ? "transTable__cell--income"
                      : "transTable__cell--expense"
                  }`}
                >
                  {item.sum.toFixed(2)} грн.
                </td>
                <td className="transTable__cell transTable__cell--action">
                  <button
                    className="transTable__deleteBtn"
                    onClick={() => dispatch(removeTransaction(item.id))}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {Array.from({ length: emptyRowsCount }).map((_, i) => (
              <tr
                className="transTable__row transTable__row--empty"
                key={`empty-${i}`}
              >
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
