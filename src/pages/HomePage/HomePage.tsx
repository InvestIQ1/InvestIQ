import { WrapperPage } from "../../components/wrapperPage/WrapperPage";
import { Header } from "../../components/header/Header";
// import { PeriodDate } from "../../components/periodDate/PeriodDate";
import { useEffect } from "react";
import {
  getTransactions,
  removeTransaction,
} from "../../redux/Transaction/transactionOparation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { useAppSelector } from "../../redux/dispatchHook";
import { MonthStatistic } from "../../components/monthStatistic/monthStatictic";
import { NextPage } from "../../components/nextPage/nextPage";
import "./HomePage.scss";
import { Container } from "../../components/container/Container";

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
            <Container>
        <NextPage />
        <WrapperPage />
        <MonthStatistic />
            </Container>
      </div>
    </div>
  );
}
