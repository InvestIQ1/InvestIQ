import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { Container } from "../container/Container";
import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import "./addForm.scss";
import { addTransaction } from "../../redux/Transaction/transactionOparation";
import { useDispatch } from "react-redux";

export const AddForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [price, setPrice] = useState<number | "">("");
  const dispatch = useDispatch()
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dateNow = new Date();
  const day = String(dateNow.getDate()).padStart(2, "0");
  const month = String(dateNow.getMonth() + 1).padStart(2, "0");
  const year = dateNow.getFullYear();

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "transport":
        setPrice(150);
        break;

      case "products":
        setPrice(850);
        break;

      case "health":
        setPrice(600);
        break;

      case "alcohol":
        setPrice(450);
        break;

      case "entertainment":
        setPrice(700);
        break;

      case "home":
        setPrice(1200);
        break;

      case "technology":
        setPrice(15000);
        break;

      case "utilities":
        setPrice(2500);
        break;

      case "sport":
        setPrice(900);
        break;

      case "education":
        setPrice(1800);
        break;

      case "other":
        setPrice(500);
        break;

      default:
        setPrice(0);
    }
  };
  return (
    <div className="addForm">
      <div className="addForm__background">
        <Container>
          <div className="addForm__top">
            <div className="addForm__datawForm">
              <div className="addForm__date">
                {isMobile ? (
                  <FaArrowLeftLong className="arrorIcon" />
                ) : (
                  <div className="addForm__data">
                    <FaCalendarAlt className="calendIcon" />
                    <p className="addForm__paragraf">
                      {day}:{month}:{year}
                    </p>
                  </div>
                )}
              </div>
              <form onSubmit={() => dispatch(addTransaction())} className="addForm__form">
                <div className="addForm__inputs">
                  <input
                    className="addForm__descr"
                    placeholder="Опис товару"
                    type="text"
                  />

                  <select
                    className="addForm__selectGoods"
                    defaultValue=""
                    onChange={handleCategory}
                  >
                    <option value="" disabled>
                      Категорія товару
                    </option>

                    <option value="transport">Транспорт</option>
                    <option value="products">Продукти</option>
                    <option value="health">Здоров'я</option>
                    <option value="alcohol">Алкоголь</option>
                    <option value="entertainment">Розваги</option>
                    <option value="home">Все для дому</option>
                    <option value="technology">Техніка</option>
                    <option value="utilities">Комуналка, зв'язок</option>
                    <option value="sport">Спорт, хобі</option>
                    <option value="education">Навчання</option>
                    <option value="other">Інше</option>
                  </select>
                </div>

                <div className="addForm__prize">
                  <input
                    className="addForm__prizeCounter"
                    value={price}
                    readOnly
                    placeholder={isMobile ? "00.00 UAH" : "00.00"}
                  />

                  {isMobile && <div className="addForm__separate" />}

                  <FaCalculator className="calculateIcon" />
                </div>
              </form>
            </div>

            {!isMobile && (
              <div className="addForm__btns">
                <button className="addForm__btn1">Ввести</button>

                <button className="addForm__btn2" type="reset">
                  Очистити
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>

      {isMobile && (
        <Container>
          <div className="addForm__btns">
            <button className="addForm__btn1">Ввести</button>

            <button className="addForm__btn2" type="reset">
              Очистити
            </button>
          </div>
        </Container>
      )}
    </div>
  );
};
