import { useState } from "react";

import "./periodDate.scss"
import { motion } from "motion/react";
import { useAppSelector } from "../../redux/dispatchHook";
import {selectTransactions} from "../../redux/Transaction/transactionSelectors"

export const PeriodDate : React.FC = () => {
        const date : Date = new Date()
    const [monthNumber, setMonthNumber] = useState(date.getMonth())
    const [yearNumber, setYearNumber] = useState(date.getFullYear())
    const monthNames : string[] = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];
const lastTransaction  = useAppSelector(selectTransactions).at(-1)
const isIncome : boolean = lastTransaction?.type === "income"
const isThereTransaction = lastTransaction === undefined
console.log(isThereTransaction)


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
            <motion.div className="Period" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  >
                <p className="Period__text">Поточний період</p>
                <div className="Period__box">
  <h2
    key={monthNumber}
    className="Period__date"
  >
    {showingDate()}
  </h2>
  {isThereTransaction ? null :       <p
    className="Period__text"

    >
    Останній транзакція:   {isIncome ? <p style={{color:"#66c56c"}}>{lastTransaction?.descr}</p> : <p style={{color: "#ff6961"}}>{lastTransaction?.descr}</p>}
  </p>}


                </div>
            </motion.div>
        </>
    )
}
