import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

export const Home = () => {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://62a304695bd3609cee6048e1.mockapi.io/pizzas?category=' + categoryId)
            .then(res => res.json())
            .then(arr => {
                    setPizzas(arr)
                    setIsLoading(false)
                }
            )
        window.scrollTo(0, 0)
    }, [categoryId])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
                <Sort popupType={sortType} setPopupType={setSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(10)].map((_, index) => <Skeleton key={index}/>)
                        : pizzas.map(t => (<PizzaBlock key={t.id}{...t}/>
                        ))}
            </div>
        </div>
    );
};
