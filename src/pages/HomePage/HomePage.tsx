

import { WrapperPage } from "../../components/wrapperPage/WrapperPage";
import { Header } from "../../components/header/Header";
// import { PeriodDate } from "../../components/periodDate/PeriodDate";
import { useEffect } from "react";
import { getTransactions, removeTransaction } from "../../redux/Transaction/transactionOparation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { useAppSelector } from "../../redux/dispatchHook";
import { MonthStatistic } from '../../components/monthStatistic/monthStatictic';
import "./HomePage.scss";


export default function HomePage() {
  const userData = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userData) {
      dispatch(getTransactions());
      dispatch(removeTransaction(""));
    }
  }, [userData]);
  return (
    <div className="home-page-bg">
      <div className="home-page">
      <Header />
      <WrapperPage />
      <MonthStatistic />
    </div>
    </div>
  );
}
