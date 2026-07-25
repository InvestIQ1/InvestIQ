import { Header } from "../../components/header/Header";
import { ChooseCategory } from "../../components/chooseCategory/ChooseCategory";
import { PeriodDate } from "../../components/periodDate/PeriodDate";


export default function HomePage () {
    return (
        <div>
            <Header/>
            <PeriodDate/>
            <ChooseCategory/>
        </div>
    )
}