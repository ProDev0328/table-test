import { getSocket } from "config/socket";
import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthorizedRoute = () => {
  const user = localStorage.getItem("azleUser");
  const location = useLocation();
  console.log("AuthorizedRoute", user);

  // if (!window.socket) {
  //   window.socket = getSocket();
  //   if (!window.socket) {
  //     return;
  //   }
  //   window.socket.on("connect", () => {
  //     console.log("connected");
  //   });
  // }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
};

export default AuthorizedRoute;
