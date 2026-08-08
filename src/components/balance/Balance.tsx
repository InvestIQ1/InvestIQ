import { useContext } from "react";
import { Container } from "../container/Container";
import { useAppSelector } from "../../redux/dispatchHook";
import { ThemeContext } from "../../context/ThemeContext";

export const Balance = () => {
  const { theme } = useContext(ThemeContext);
  const balance = useAppSelector((state) => state.balance.balance);
  const isLoading = useAppSelector((state) => state.balance.isLoading);

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  return (
    <Container>
      <div className={`balance ${theme}`}>
        <h2>Витрати:</h2>
        <p className="expence__amount">{balance} ₴</p>
        <h2>Доходи:</h2>
        <p className="income__amount">{balance} ₴</p>
      </div>
    </Container>
  );
};