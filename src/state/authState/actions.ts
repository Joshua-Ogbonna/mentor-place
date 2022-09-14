import { AUTHERROR, LOGIN, LOGOUT, SET_TOKEN, SIGNUP } from "./actionTypes";

export const signUp = (data) => ({ type: SIGNUP, data })
export const login = (data) => ({ type: LOGIN, data })
export const setToken = (token: string) => ({type: SET_TOKEN, payload: token})
export const logout = () => ({type: LOGOUT})
export const authError = (error: string) => ({type: AUTHERROR, payload: error})