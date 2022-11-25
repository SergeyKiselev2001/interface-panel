import "./Header.style.scss"
import blocks from "./../../images/blocks.png"
import leftArrow from "./../../images/leftArrow.png"

const Header = () => {
    return (
        <header>
            <ul className="menu">
                <li className="image">
                    <img src={blocks} alt="blocks" />
                </li>
                <li className="image">
                    <img src={leftArrow} alt="left arrow" />
                </li>
                <li className="active">Просмотр</li>
                <li>Управление</li>
            </ul>
        </header>
    )
}

export { Header }