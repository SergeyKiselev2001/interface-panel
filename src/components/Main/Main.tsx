import { Table } from "../Table/Table"
import "./Main.style.scss"

const Main = () => {
    return (
        <div className="main">
            <div className="main__title">
                <span>Строительно-монтажные работы</span>
            </div>
            <div className="table__wrapper">
                <Table />
            </div>
        </div>
    )
}

export { Main }