import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";

import './scss/app.scss'


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
