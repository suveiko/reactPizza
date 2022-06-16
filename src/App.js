import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Cart} from "./pages/Cart";

import './scss/app.scss'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/reactPizza/'} element={<Home/>}/>
                        <Route path={'/reactPizza/cart'} element={<Cart/>}/>
                        <Route path={'/reactPizza/*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
