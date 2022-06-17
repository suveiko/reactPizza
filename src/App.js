import {createContext, useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Cart} from "./pages/Cart";

import './scss/app.scss'
import {decrement, increment} from "./redux/slices/filterSlice";


export const AppContext = createContext()

function App() {
    const [searchValue, setSearchValue] = useState('')

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="wrapper">
            <AppContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route
                            path={'/reactPizza/'}
                            element={<Home/>}
                        />
                        <Route
                            path={'/reactPizza/cart'}
                            element={<Cart/>}
                        />
                        <Route
                            path={'/reactPizza/*'}
                            element={<NotFound/>}
                        />
                    </Routes>
                </div>
            </AppContext.Provider>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
}

export default App;
