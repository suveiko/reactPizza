import {createContext, useState} from "react"
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Cart} from "./pages/Cart";

import './scss/app.scss'


export const AppContext = createContext()

function App() {
    const [searchValue, setSearchValue] = useState('')


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
        </div>
    )
}

export default App;
