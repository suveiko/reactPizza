import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import {AppContext} from "../App";
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {setCategoryId} from "../redux/slices/filterSlice";


export const Home = () => {

    const dispatch = useDispatch()
    const {searchValue} = useContext(AppContext)

    const categoryId = useSelector(state => state.filter.categoryId)
    const sortType = useSelector(state => state.filter.sortType.sort)
    const onClickCategory = (id) => dispatch(setCategoryId(id))

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        setIsLoading(true)

        const sortBy = sortType.replace('-', '')
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        axios.get(`https://62a304695bd3609cee6048e1.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                setPizzas(res.data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    const pizzasArray = pizzas.map(t => (<PizzaBlock key={t.id}{...t}/>))
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzasArray}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
        </div>
    )
}
