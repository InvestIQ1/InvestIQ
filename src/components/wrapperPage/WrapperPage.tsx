import { useState } from "react";
import { AddForm } from "../addForm/AddForm";
import './wrapperPage.scss'
import { Container } from "../container/Container";
export const WrapperPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("expense");
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
              {activeTab === "expense" ? (
                <AddForm />
              ) : (
                <AddForm />
              )}
            </div>
        </div>
    </Container>
    
)
}