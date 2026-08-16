import { useContext } from "react";
import { useAppSelector } from "../../redux/dispatchHook";
import { ThemeContext } from "../../context/ThemeContext";
import './balance.scss'
import {Container} from "../container/Container";
import { selectExpense } from "../../redux/Transaction/transactionSelectors";
import { selectIncome } from "../../redux/Transaction/transactionSelectors";

export const Balance = () => {
  // const { theme } = useContext(ThemeContext);
  // const balance = useAppSelector((state) => state.balance.balance);
  // const isLoading = useAppSelector((state) => state.balance.isLoading);
const incomeSelector = useAppSelector(selectIncome)
const expenseSelector = useAppSelector(selectExpense)

  return (
   <div className="balance-container">
      <div className="balance">
        <h2 className="expense__title">Витрати:</h2>
        <p className="expense__amount">- {expenseSelector} ₴</p>
        <h2 className="income__title">Доходи:</h2>
        <p className="income__amount">+ {incomeSelector} ₴</p>
      </div>
    </div>
  );
};