import { AddForm } from "../../components/addForm/AddForm";
import { WrapperPage } from "../../components/wrapperPage/wrapperPage";

export default function HomePage(){
  return (
    <div>
      <AddForm />
      <WrapperPage />
      <h1>InvestIQ</h1>
      <p>Ви успішно увійшли</p>
    </div>
  );
}