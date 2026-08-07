import { AddForm } from "../../components/addForm/AddForm";
import { WrapperPage } from "../../components/wrapperPage/WrapperPage";
import { useEffect } from "react";
import { getTransactions, removeTransaction } from "../../redux/Transaction/transactionOparation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { useAppSelector } from "../../redux/dispatchHook";

export default function HomePage() {
  const userData = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userData) {
      dispatch(getTransactions());
      dispatch(removeTransaction("S6zKGrLx4YbhZiBNeK0Mk"));
    }
  }, [userData]);
  return (
    <div>
      <AddForm />
      <WrapperPage />
      <h1>InvestIQ</h1>
      <p>Ви успішно увійшли</p>
    </div>
  );
}
