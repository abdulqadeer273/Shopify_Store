import React, { useReducer, useEffect } from 'react';
import { GlobalContext } from "./GlobalContext";
import { reducer } from './Reducer';

const initialState = {
    auth: {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    },
};

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.auth.token && state.auth.user) {
            localStorage.setItem('token', state.auth.token);
            localStorage.setItem('user', JSON.stringify(state.auth.user));
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }, [state.auth]);

    const login = (token, user) => {
        dispatch({ type: 'LOGIN', payload: { token, user } });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <GlobalContext.Provider value={{ state, login, logout }}>
            {children}
        </GlobalContext.Provider>
    );
};
