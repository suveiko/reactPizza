import s from './Search.module.scss'
import {useContext} from "react";

import {AppContext} from "../../App";

export const Search = () => {
    const {searchValue, setSearchValue} = useContext(AppContext)

    return (
        <div className={s.root}>
            <svg
                className={s.icon}
                enableBackground="new 0 0 32 32"
                height="32px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="M13,2C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z M13,22c-4.962,0-9-4.037-9-9   c0-4.962,4.038-9,9-9c4.963,0,9,4.038,9,9C22,17.963,17.963,22,13,22z"/>
                    <path
                        d="M29.707,28.293l-6.001-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l6.001,6C28.488,29.902,28.744,30,29,30   s0.512-0.098,0.707-0.293C30.098,29.316,30.098,28.684,29.707,28.293z"/>
                </g>
            </svg>
            <input
                value={searchValue}
                className={s.input}
                placeholder='Поиск пиццы...'
                onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
            {
                searchValue &&
                <svg
                    onClick={() => setSearchValue('')}
                    className={s.clearIcon}
                    data-name="Capa 1"
                    id="Capa_1"
                    viewBox="0 0 20 19.84"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
                </svg>
            }
        </div>
    );
};
