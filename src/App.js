import {useEffect, useState} from "react";

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";
import {Skeleton} from "./components/PizzaBlock/Skeleton";

import './scss/app.scss'

function App() {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://62a304695bd3609cee6048e1.mockapi.io/pizzas')
            .then(res => res.json())
            .then(arr => {
                    setPizzas(arr)
                    setIsLoading(false)
                }
            )
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
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
                </div>
            </div>
        </div>
    );
}

export default App;
