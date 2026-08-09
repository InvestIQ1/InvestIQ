import { ChooseCategory } from "../../components/chooseCategory/ChooseCategory";
import { Container } from "../../components/container/Container";
// import { Graph } from "../../components/graph/Graph";
import { Header } from "../../components/header/Header";
import { NextPage } from "../../components/nextPage/nextPage";
import { PeriodDate } from "../../components/periodDate/PeriodDate";

import "./ReportPage.scss";

export default function ReportPage() {
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
      </Container>
      {/* <Graph /> */}
    </div>
    </div>
  );
}
