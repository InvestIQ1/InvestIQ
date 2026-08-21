import { ChooseCategory } from "../../components/chooseCategory/ChooseCategory";
import { Container } from "../../components/container/Container";
import { Graph } from "../../components/graph/Graph";
import { Header } from "../../components/header/Header";
import { NextPage } from "../../components/nextPage/nextPage";
import { PeriodDate } from "../../components/periodDate/PeriodDate";
import { useAppSelector } from "../../redux/dispatchHook";
import { selectCategory } from "../../redux/Category/categorySelector";

import "./ReportPage.scss";

export default function ReportPage() {
const existCategory: boolean = !!useAppSelector(selectCategory)
  return (
    <div className="report-bg">
    <div className="report">
      <Header />
      <Container>
      <div className="report__vidgets">
      <NextPage />
      <PeriodDate />
      </div>
      <ChooseCategory />
            {existCategory ? <Graph/> : <div className="report__placeholder"><h2 className="report__title">НАТИСНІТЬ НА КАТЕГОРІЮ ЩОБ ПОБАЧИТИ ГРАФІК</h2></div>}
      </Container>
    </div>
    </div>
  );
}
