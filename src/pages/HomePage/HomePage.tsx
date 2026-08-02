
import { WrapperPage } from "../../components/wrapperPage/wrapperPage";
import { Header } from "../../components/header/Header";
import {PeriodDate} from "../../components/periodDate/PeriodDate";


export default function HomePage(){
  return (
    <>
      <Header />
      <PeriodDate />
      <WrapperPage />
    </>
      
  );
}