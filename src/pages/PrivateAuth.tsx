import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../state/reducers";

export const PrivateAuth = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.authReducer);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
};

export const PublicRoute = () => {
    const {isLoggedIn} = useSelector((state: RootState) => state.authReducer)
    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />
}
