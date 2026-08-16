import { useState } from "react";
import "./periodDate.scss"
import { AnimatePresence, motion } from "motion/react";
// import { Container } from "../container/Container"

export const PeriodDate : React.FC = () => {
        const date : Date = new Date()
    const [monthNumber, setMonthNumber] = useState(date.getMonth())
    const [yearNumber, setYearNumber] = useState(date.getFullYear())
    const [direction, setDirection] = useState<0 | 1 | -1>(0);

const changeMonth = (value: -1 | 1) => {
  setDirection(value);
  setMonthNumber(prev => prev + value);
};
    const monthNames : string[] = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];

    const showingDate = () => {
        if (monthNumber >= 12) {
            setMonthNumber(0)
            setYearNumber(yearNumber + 1)
        } else if (monthNumber < 0) {
            setMonthNumber(11)
            setYearNumber(yearNumber - 1)
        }
        return `${monthNames[monthNumber]} ${yearNumber}`;
    };

    return(
        <>
        {/* <Container> */}
            <motion.div className="Period" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  >
                <p className="Period__text">Поточний період</p>
                <div className="Period__box">
                    <motion.button
  whileTap={{ scale: 0.9 }}
  type="button"
  className="Period__button"
  onClick={() => {
    changeMonth(-1);
  }}
> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.28064 0.624512L1.28064 5.62451L5.28064 10.6245" stroke="#FF751D" strokeWidth="2" />
</svg> </motion.button>
                    <AnimatePresence mode="wait">
  <motion.h2
    key={monthNumber}
    className="Period__date"
    initial={{
      x: direction * 50,
      opacity: 0,
    }}
    animate={{
      x: 0,
      opacity: 1,
    }}
    exit={{
      x: direction * -50,
      opacity: 0,
    }}
    transition={{
      duration: 0.25,
    }}
  >
    {showingDate()}
  </motion.h2>
</AnimatePresence>
                    <motion.button
  whileTap={{ scale: 0.9 }}
  type="button"
  className="Period__button"
  onClick={() => {
    changeMonth(1);
  }}
>
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.780884 0.624512L4.78088 5.62451L0.780884 10.6245" stroke="#FF751D" strokeWidth="2" />
  </svg>
</motion.button>
                </div>
            </motion.div>
        {/* </Container> */}
        </>
    )
}