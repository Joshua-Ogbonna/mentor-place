import { combineReducers } from "redux";

// Reducers
import { authReducer } from "./authState/authReducer";

export const reducers = combineReducers({
    authReducer
})

export type RootState = ReturnType<typeof reducers>