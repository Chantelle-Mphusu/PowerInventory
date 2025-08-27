//used to pass data through the component tree without having to pass props down manually at every level.

//This code establishes a React context 
// designed to manage user authentication across an application. 
// It initializes an AuthContext that allows components to access user data without prop drilling. 
// A useState hook is employed to maintain the user's state, 
// which is persisted in localStorage for recall upon page refresh. 
// The AuthProvider component then wraps its children, 
// making the user's authentication status readily available throughout the component tree. 
// This structure facilitates a clean and efficient way to handle global authentication state 
// within a React application.
import { createContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('pos-user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

        const login = (userData, token) => {
        setUser(userData);
        localStorage.setItem('pos-user', JSON.stringify(userData)); 
        localStorage.setItem('pos-token', token);
        }

        const logout = () => {
            setUser(null);
            localStorage.removeItem('pos-user');
            localStorage.removeItem('pos-token');
        }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export  default AuthProvider;