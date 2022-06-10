import {useEffect, useState} from "react";

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";

import './scss/app.scss'

function App() {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('https://62a304695bd3609cee6048e1.mockapi.io/pizzas')
            .then(res => res.json())
            .then(arr => setPizzas(arr))
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
                                pizzas.map(t => (
                                    <PizzaBlock
                                        key={t.id}
                                        {...t}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
