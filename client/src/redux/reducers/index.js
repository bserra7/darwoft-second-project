import { COMPLETE_INPUT, LOG_USER } from "../actions"

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
        default: 
        return state
    }
}