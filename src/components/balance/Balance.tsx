import { useAppSelector } from "../../redux/dispatchHook";
import {
  selectIncome,
  selectExpense,
} from "../../redux/Transaction/transactionSelectors";
import "./balance.scss";

export const Balance=()=>{
  const income = useAppSelector(selectIncome);
  const expense = useAppSelector(selectExpense);

  return(
    <div className="balance-container">
      <div className="balance">
        <h2 className="expense__title">Витрати:</h2>
        <p className="expense__amount">- {expense} ₴</p>

        <h2 className="income__title">Доходи:</h2>
        <p className="income__amount">+ {income} ₴</p>
      </div>
    </div>
  );
};