import {useState} from "react";

export const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((pzz, i) => (
                        <li
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={activeIndex === i ? 'active' : ''}
                        >
                            {pzz}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
