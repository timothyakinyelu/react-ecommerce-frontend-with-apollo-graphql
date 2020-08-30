/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const authuser: User = {};

const authContext = createContext({
    authenticated: false, //get logged in detail from cache
    user: authuser, //get user details from cache
    handleAuthentication: (_e: React.FormEvent<HTMLFormElement>, _email: string, _password: string): void => {}, // logout the user
    logout: (): void => {}, // logout the user
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
