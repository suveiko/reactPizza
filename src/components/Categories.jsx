export const Categories = ({value, onClickCategory}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((pzz, i) => (
                        <li
                            key={i}
                            onClick={() => onClickCategory(i)}
                            className={value === i ? 'active' : ''}
                        >
                            {pzz}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
