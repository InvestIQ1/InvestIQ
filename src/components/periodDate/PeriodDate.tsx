import { useState } from "react";
import "./periodDate.scss"
// import { Container } from "../container/Container"

export const PeriodDate : React.FC = () => {
        const date : Date = new Date()
    const [monthNumber, setMonthNumber] = useState(date.getMonth())


    const monthNames : string[] = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];
    return(
        <>
        {/* <Container> */}
            <div className="Period">
                <p className="Period__text">Поточний період</p>
                <div className="Period__box">
                    <button type="button" className="Period__button" onClick={() => {setMonthNumber(monthNumber - 1)}}> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.28064 0.624512L1.28064 5.62451L5.28064 10.6245" stroke="#FF751D" strokeWidth="2" />
</svg> </button>
                    <h2 className="Period__date">{monthNames[monthNumber]} <br/> {date.getFullYear()}</h2>
                    <button type="button" className="Period__button" onClick={() => {setMonthNumber(monthNumber + 1)}}><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.780884 0.624512L4.78088 5.62451L0.780884 10.6245" stroke="#FF751D" strokeWidth="2" />
</svg></button>
                </div>
            </div>
        {/* </Container> */}
        </>
    )
}