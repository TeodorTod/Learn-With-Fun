import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useLocalStorage('user', {});

    const login = (authData) => {
        setUser(authData);
    };

    const register = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser({});
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


