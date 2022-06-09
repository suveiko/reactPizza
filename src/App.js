import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";

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
                            <PizzaBlock title={'Мексиканская'} price={'от 500 ₽'}/>
                            <PizzaBlock title={'Маргарита'} price={'от 395 ₽'}/>
                            <PizzaBlock title={'Чизбургер-Пицца'} price={'от 395 ₽'}/>
                            <PizzaBlock title={'Пеперони'} price={'от 395 ₽'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
