import { AUTH_ACTIONS } from "./actionCreators";

// Auth Reducer interface
interface AuthReducer {
    isLoggedIn: boolean,
    token: string,
    loading: boolean
    error: string
}

const initialState: AuthReducer = {
    isLoggedIn: sessionStorage.getItem("token") ? true : false,
    token: sessionStorage.getItem("token") || "",
    loading: false,
    error: ""
}

export const authReducer = (state = initialState, action: AUTH_ACTIONS) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}