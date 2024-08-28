import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = useState(JSON.parse(localStorage.getItem("USER")));

  const [token, _setToken] = useState(
    () => Cookies.get("ACCESS_TOKEN") || null
  );

  const setToken = (newToken) => {
    _setToken(newToken);
    if (newToken) {
      Cookies.set("ACCESS_TOKEN", newToken, { secure: true });
    } else {
      Cookies.remove("ACCESS_TOKEN");
    }
  };

  const setUser = (newUser) => {
    _setUser(newUser);
    if (newUser) {
      localStorage.setItem("USER", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("USER");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
