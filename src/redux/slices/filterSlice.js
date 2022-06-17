import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sortType: {
        name: 'популярности',
        sort: 'rating'
    }
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        }
    }
})