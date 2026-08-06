

import { WrapperPage } from "../../components/wrapperPage/WrapperPage";
import { Header } from "../../components/header/Header";
import { PeriodDate } from "../../components/periodDate/PeriodDate";

import { AddForm } from "../../components/addForm/AddForm";
import { useEffect } from "react";
import { getTransactions, removeTransaction } from "../../redux/Transaction/transactionOparation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { useAppSelector } from "../../redux/dispatchHook";
import { MonthStatistic } from '../../components/monthStatistic/monthStatictic';


export default function HomePage() {
  const userData = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userData) {
      dispatch(getTransactions());
      dispatch(removeTransaction('4ZQ53oIRUmRIfau9jbtIW'));
    }
  }, [userData]);
  return (
    <>
      <Header />
      <WrapperPage />
      <MonthStatistic />
    </>
      
  );
}
