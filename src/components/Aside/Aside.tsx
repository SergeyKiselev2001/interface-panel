import "./Aside.style.scss"

const Aside = () => {

    return (
        <aside>
            <div className="title">
                <span>Название проекта</span>
                <span>Аббревиатура</span>
            </div>
            <ul className="list">
                <li>
                По проекту
                </li>
                <li>
                Объекты
                </li>
                <li className="project_active">
                    СМР
                </li>
                <li>
                Панорамы
                </li>
            </ul>
        </aside>
    )
}

export { Aside }