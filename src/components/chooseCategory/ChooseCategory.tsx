import "./chooseCategory.scss";
import { useState, type SyntheticEvent } from "react";
// import { Container } from "../container/Container"
import Products from "../../assets/Products.svg";
import Alcohol from "../../assets/Alcohol.svg";
import Health from "../../assets/Health.svg";
import Hobby from "../../assets/Hobby.svg";
import Fun from "../../assets/Fun.svg";
import Bills from "../../assets/Bills.svg";
import Learning from "../../assets/Learning.svg";
import Machinery from "../../assets/Machinery.svg";
import Transport from "../../assets/Transport.svg";
import Ufo from "../../assets/Ufo.svg";
import House from "../../assets/House.svg";
import Salary from "../../assets/Salary.svg";
import Income from "../../assets/Income.svg";


export const ChooseCategory: React.FC = () => {
  const [isSpends, setIsSpends] = useState(true);
//   const [currentActive, setCurrentActive] = useState()

const handleClick = (e: SyntheticEvent<HTMLLIElement>) => {
  const item = e.currentTarget as HTMLLIElement;
  console.log(item.children[2]);
  item.children[2].style.color = "orange"
  
};

  const spends = (
    <div className="Category">
               <div className="Category__choser">
      <button
        type="button"
        className="Category__button"
        onClick={() => {
          setIsSpends(!isSpends);
        }}
      >
        {" "}
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.28064 0.624512L1.28064 5.62451L5.28064 10.6245"
            stroke="#FF751D"
            strokeWidth="2"
          />
        </svg>
      </button>
      <h2 className="Category__text">витрати</h2>
      <button
        type="button"
        className="Category__button"
        onClick={() => {
          setIsSpends(!isSpends);
        }}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.780884 0.624512L4.78088 5.62451L0.780884 10.6245"
            stroke="#FF751D"
            strokeWidth="2"
          />
        </svg>
      </button>
      </div>
      <ul className="Category__list">
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Products} alt="" className="Category__photo" />
          <p className="Category__name">Продукти</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Alcohol} alt="" className="Category__photo" />
          <p className="Category__name">Алкоголь</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Fun} alt="" className="Category__photo" />
          <p className="Category__name">розваги</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Health} alt="" className="Category__photo" />
          <p className="Category__name">здоров’я</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Transport} alt="" className="Category__photo" />
          <p className="Category__name">Транспорт</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={House} alt="" className="Category__photo" />
          <p className="Category__name">все для дому</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Machinery} alt="" className="Category__photo" />
          <p className="Category__name">Техніка</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Bills} alt="" className="Category__photo" />
          <p className="Category__name">комуналка, зв’язок</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Hobby} alt="" className="Category__photo" />
          <p className="Category__name">Спорт, хобі</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Learning} alt="" className="Category__photo" />
          <p className="Category__name">навчання</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Ufo} alt="" className="Category__photo" />
          <p className="Category__name">Інше</p>
        </li>
      </ul>
    </div>
  );

  const income = (
    <div className="Category">
        <div className="Category__choser">
      <button
        type="button"
        className="Category__button"
        onClick={() => {
          setIsSpends(!isSpends);
        }}
      >
        {" "}
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.28064 0.624512L1.28064 5.62451L5.28064 10.6245"
            stroke="#FF751D"
            strokeWidth="2"
          />
        </svg>{" "}
      </button>
      <h2 className="Category__text">доходи</h2>
      <button
        type="button"
        className="Category__button"
        onClick={() => {
          setIsSpends(!isSpends);
        }}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.780884 0.624512L4.78088 5.62451L0.780884 10.6245"
            stroke="#FF751D"
            strokeWidth="2"
          />
        </svg>
      </button>
      </div>
      <ul className="Category__list">
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Salary} alt="" className="Category__photo" />
          <p className="Category__name">ЗП</p>
        </li>
        <li className="Category__item" onClick={handleClick}>
          <p className="Category__money">200.00</p>
          <img src={Income} alt="" className="Category__photo" />
          <p className="Category__name">ДОД. ДОХІД</p>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {/* <Container> */}
      {isSpends ? spends : income}
      {/* </Container> */}
    </>
  );
};
