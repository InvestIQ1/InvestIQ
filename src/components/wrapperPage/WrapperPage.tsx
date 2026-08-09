import { useState } from "react";
import { AddForm } from "../addForm/AddForm";
import { TransTable } from "../transTable/TransTable";
import "./wrapperPage.scss";
import { Container } from "../container/Container";
import { MonthStatistic } from "../monthStatistic/MonthStatictic"

export const WrapperPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");
  return (
    <Container>
      <div className="wrapper__tabs">
        <button
          className={activeTab === "expense" ? "active" : ""}
          onClick={() => setActiveTab("expense")}
        >
          ВИТРАТИ
        </button>

        <button
          className={activeTab === "income" ? "active" : ""}
          onClick={() => setActiveTab("income")}
        >
          ДОХІД
        </button>
      </div>
      <div className="wrapper">
        <div className="wrapper__content">
          <AddForm transactionType={activeTab} />
          <div className="wrapper__tabWithStat">
            <TransTable />
            <MonthStatistic activeTab={activeTab}/>
          </div>
        </div>
      </div>
    </Container>
  );
};
