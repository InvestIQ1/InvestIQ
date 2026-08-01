import { AddForm } from "../../components/addForm/AddForm";
import { WrapperPage } from "../../components/wrapperPage/wrapperPage";
import { Header } from "../../components/header/Header";
import {PeriodDate} from "../../components/periodDate/PeriodDate";


export default function HomePage(){
  return (
    <div>
      <Header />
      <PeriodDate />
      <AddForm />
      <WrapperPage />
      <h1>InvestIQ</h1>
      <p>Ви успішно увійшли</p>
    </div>
  );
}