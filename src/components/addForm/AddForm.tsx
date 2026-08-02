import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { Container } from "../container/Container";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/dispatchHook";
import "./addForm.scss";
import { addTransaction } from "../../redux/Transaction/transactionOparation";

export const AddForm: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [category, setCategory] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleReset = () => {
    setCategory("");
    setDescr("");
    setPrice("");
  };

  const handleSubmit = async () => {
    if (!descr || !category || price === "") {
      alert("Будь ласка, заповніть усі поля.");
      return;
    }

    await dispatch(
      addTransaction({
        
        category,
        descr,
        sum: Number(price),
      }),
    );

    handleReset();
  };

  const dateNow = new Date();
  const day = String(dateNow.getDate()).padStart(2, "0");
  const month = String(dateNow.getMonth() + 1).padStart(2, "0");
  const year = dateNow.getFullYear();

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
              <form className="addForm__form">
                <div className="addForm__inputs">
                  <input
                    className="addForm__descr"
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                    placeholder="Опис товару"
                    type="text"
                  />

                  <select
                    className="addForm__selectGoods"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue=""
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
                    type="number"
                    value={price}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "") {
                        setPrice("");
                      } else {
                        setPrice(Number(value));
                      }
                    }}
                    placeholder={isMobile ? "00.00 UAH" : "00.00"}
                  />

                  {isMobile && <div className="addForm__separate" />}

                  <FaCalculator className="calculateIcon" />
                </div>
              </form>
            </div>

            {!isMobile && (
              <div className="addForm__btns">
                <button onClick={handleSubmit} className="addForm__btn1">
                  Ввести
                </button>

                <button
                  onClick={handleReset}
                  className="addForm__btn2"
                  type="button"
                >
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
            <button onClick={handleSubmit} className="addForm__btn1">
              Ввести
            </button>

            <button
              onClick={handleReset}
              className="addForm__btn2"
              type="button"
            >
              Очистити
            </button>
          </div>
        </Container>
      )}
    </div>
  );
};
