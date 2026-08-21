import "./nextPage.scss";
import { IoIosStats } from "react-icons/io";
// import  { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import {NavLink, useLocation} from "react-router-dom";


export const NextPage: React.FC = () => {
  const location = useLocation().pathname
    // const context = useContext(ThemeContext);

    if (location === "/home") {
    return (
    <div className="next-page">
      <NavLink to="/report" className="next-page__link">
        <span className="next-page__text">Перейти до розрахунків <IoIosStats /></span>
      </NavLink>
    </div>
    );
  } else if (location === "/report") {
    return (
      <div className="next-page">
        <NavLink to="/home" className="next-page__link">
          <span className="next-page__text"><FaArrowLeft style={{ marginRight: "8px", color: "#FF751D" }} />  Повернутися на головну</span>
        </NavLink>
      </div>
    );
  }


};