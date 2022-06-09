import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";
import pizzas from './assets/pizzas.json'

import './scss/app.scss'

function App() {

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
                                        title={t.title}
                                        price={t.price}
                                        id={t.id}
                                        imageUrl={t.imageUrl}
                                        sizes={t.sizes}
                                        types={t.types}
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
