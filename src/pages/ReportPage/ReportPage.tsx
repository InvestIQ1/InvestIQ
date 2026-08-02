import { ChooseCategory } from "../../components/chooseCategory/ChooseCategory";
import { Header } from "../../components/header/Header";
import {PeriodDate} from "../../components/periodDate/PeriodDate";


export default function ReportPage () {
    return (
        <div>
            <Header />
            <PeriodDate />
            <ChooseCategory />
        </div>
    )
}