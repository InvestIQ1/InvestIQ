import { useContext } from "react";
import { Container } from "../container/Container";
import { useAppSelector } from "../../redux/dispatchHook";
import { ThemeContext } from "../../context/ThemeContext";

export const Balance = () => {
//   const { theme } = useContext(ThemeContext);
//   const balance = useAppSelector((state) => state.balance.balance);
//   const isLoading = useAppSelector((state) => state.balance.isLoading);

  return (
    <Container>
      <div className="balance">
        <h2 className="expense__title">Витрати:</h2>
        <p className="expense__amount">15400 ₴</p>
        <h2 className="income__title">Доходи:</h2>
        <p className="income__amount">45000000000000000000 ₴</p>
      </div>
    </Container>
  );
};