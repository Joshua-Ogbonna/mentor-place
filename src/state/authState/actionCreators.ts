interface SIGN_UP {
    type: "SIGN_UP"
}
interface LOGIN {
    type: "LOGIN"
}
interface SET_TOKEN {
    type: "SET_TOKEN",
    payload: string
}
interface LOGOUT {
    type: "LOGOUT"
}
interface AUTHERROR {
    type: "AUTHERROR"
    payload: string
}

export type AUTH_ACTIONS = SIGN_UP | LOGIN | SET_TOKEN | LOGOUT | AUTHERROR