import {useState} from "react";

export const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((pzz, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? 'active' : ''}
                        >
                            {pzz}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
