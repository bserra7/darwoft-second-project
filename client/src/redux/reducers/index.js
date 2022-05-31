import { sortAsc, sortDesc } from "../../utils/sortFunctions"
import { GET_CATEGORIES, GET_ITEMS, ORDER_ITEMS, RESET_FILTERS, SEARCH_ITEMS, USER_LOGIN, USER_LOGOUT } from "../actions"

const initialState = {
    rawItems: [],
    items: [],
    userLogged: null,
    categories: [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        default: 
        return state
    }
}