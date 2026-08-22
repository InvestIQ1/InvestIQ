import { WrapperPage } from "../../components/wrapperPage/WrapperPage";
import { Header } from "../../components/header/Header";
import { useEffect } from "react";
import {
  getTransactions,
  removeTransaction,
} from "../../redux/Transaction/transactionOparation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { useAppSelector } from "../../redux/dispatchHook";
import { MonthStatistic } from '../../components/monthStatistic/monthStatictic';
import { Balance } from "../../components/balance/Balance";
import { NextPage } from "../../components/nextPage/nextPage";
import { Container } from "../../components/container/Container";
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

  const isTablet : boolean = window.screen.width >= 768 && window.screen.width < 1200;
    console.log(isTablet);
  return (
    <div className="home-page-bg">
      <div className="home-page">
        <Header />
        <Balance />    
        <Container>
        <NextPage />
        <WrapperPage />
        {isTablet ? <MonthStatistic activeTab="expense" id="tablet-statistic" /> : null}
            </Container>
      </div>

    </div>
  );
}
