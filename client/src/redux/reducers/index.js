import { CLEAR_STORE, COMPLETE_INPUT, LOGOUT_USER, LOG_USER } from "../actions"

const initialState = {
    userLogged: null,
    registerForm: {
        email: "",
        password: "",
        name: "",
        lastname: "",
        birthday: "",
        country: ""
    },
    loginForm: {
        email: "",
        password: ""
    }
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case COMPLETE_INPUT:
            return{ 
                ...state,
                [action.payload.storeForm]: {
                    ...state[action.payload.storeForm],
                    [action.payload.name]: action.payload.value
                }
            }
        case LOG_USER: 
            return{
                ...state,
                userLogged: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                userLogged: null
            }
        case CLEAR_STORE:
            return{
                ...state,
                [action.payload]: initialState[action.payload]
            }
        default: 
        return state
    }
}