import "./chooseCategory.scss";
import { useState } from "react";
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
import { motion } from "motion/react";
import { selectCategory } from "../../redux/Category/categorySelector";
import { selectNeededExpense, selectNeededIncome } from "../../redux/Transaction/transactionSelectors";
import { changeCategory } from "../../redux/Category/categorySlice";
import { useAppDispatch, useAppSelector } from "../../redux/dispatchHook";
import type { Image } from "plotly.js";

export const ChooseCategory: React.FC = () => {
  const [isSpends, setIsSpends] = useState(true);
  const [currentActive, setCurrentActive] = useState<string | null>(null);
  const category = useAppSelector(selectCategory)
const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
const selectorExpense = useAppSelector(selectNeededExpense)
const selectorIncome = useAppSelector(selectNeededIncome)

interface item {
  id: string,
  money: number,
  photo: string,
  name: string
}

 const allExpensesArray : item[] = [
    {
      id: "1",
      money: selectorExpense.filter(action => action.category  === "Продукти" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Products,
      name: "Продукти",
    },
    {
      id: "2",
      money: selectorExpense.filter(action => action.category  === "Алкоголь" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Alcohol,
      name: "Алкоголь",
    },
    {
      id: "3",
      money: selectorExpense.filter(action => action.category  === "Здоров’я" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Health,
      name: "Здоров’я",
    },
    {
      id: "4",
      money: selectorExpense.filter(action => action.category  === "Розваги" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Fun,
      name: "Розваги",
    },
    {
      id: "5",
      money: selectorExpense.filter(action => action.category  === "Транспорт" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Transport,
      name: "Транспорт",
    },
    {
      id: "6",
      money: selectorExpense.filter(action => action.category  === "Все для дому" ).reduce((acc, action) => acc + action.sum, 0),
      photo: House,
      name: "Все для дому",
    },
    {
      id: "7",
      money: selectorExpense.filter(action => action.category  === "Техніка" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Machinery,
      name: "Техніка",
    },
    {
      id: "8",
      money: selectorExpense.filter(action => action.category  === "Комуналка, зв’язок" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Bills,
      name: "Комуналка, зв’язок",
    },
    {
      id: "9",
      money: selectorExpense.filter(action => action.category  === "Спорт, хобі" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Hobby,
      name: "Спорт, хобі",
    },
    {
      id: "10",
      money: selectorExpense.filter(action => action.category  === "Навчання" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Learning,
      name: "Навчання",
    },
    {
      id: "11",
      money: selectorExpense.filter(action => action.category  === "Інше" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Ufo,
      name: "Інше",
    },
  ];

  const allIncomesArray : item[] = [
    {
      id: "12",
      money: selectorIncome.filter(action => action.category  === "ЗП" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Salary,
      name: "ЗП",
    },
    {
      id: "13",
      money: selectorIncome.filter(action => action.category  === "ДОД. ДОХІД" ).reduce((acc, action) => acc + action.sum, 0),
      photo: Income,
      name: "ДОД. ДОХІД",
    },
  ];



const handleChange = () => {
  setCurrentActive(null);
  setSlideDirection(isSpends ? "left" : "right");
  setIsSpends((prev) => !prev);
};
  const data = isSpends ? allExpensesArray : allIncomesArray;
  const title = isSpends ? "витрати" : "доходи";
  const dispatch = useAppDispatch()
    const handleClick = (id: string) => {
    setCurrentActive((prev) => (prev === id ? null : id));
    const activeCategory : string | undefined = data.find((item) => item.id === id)?.name
if (changeCategory === undefined || activeCategory === undefined) {
    return;
} else if (activeCategory === category){
dispatch(changeCategory(""));
} else {
  console.log("tyytyt")
  dispatch(changeCategory(activeCategory));
}


  };

return (
  <div
    key={isSpends ? "expenses" : "income"}
    className={`Category ${slideDirection}`}
   
  >
      <div className="Category__choser">
        <button
          type="button"
          className="Category__button"
          onClick={handleChange}
        >
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

        <h2 className="Category__text">{title}</h2>

        <button
          type="button"
          className="Category__button"
          onClick={handleChange}
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

      <motion.ul className="Category__list"
       initial={{ opacity: 0, x: slideDirection === "right" ? 60 : -60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: slideDirection === "right" ? 60 : -60 }}
    >
{data.filter((item) => item.money > 0).map((item) => (
          <li
            key={item.id}
            className={`Category__item ${currentActive === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            <p className="Category__money">{item.money}</p>
            <img src={item.photo} alt="" className="Category__photo" />
            <p className="Category__name">{item.name}</p>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
