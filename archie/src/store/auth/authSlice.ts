


import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


interface User {
    email: string
    email_verified: boolean
    phone_number: string
    phone_number_verified: boolean
    sub: string
}

export interface AuthState {
    status: 'isChecking' | 'isNotAuthenticated' | 'isAuthenticated'
    user?: User, 
    isLoading: boolean
    tempUsername?: string,
    errorMessage?: string,
}


  
const initialState: AuthState = {
    status: 'isChecking',
    isLoading: false,
}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: ( state,  { payload }: PayloadAction<User> ) => {
            state.status = 'isAuthenticated';
            state.user = payload;
        },
        logOut: ( state ) => {
            state.status = 'isNotAuthenticated';
            state.user = undefined;
        },
        setIsLoading: ( state, { payload }: PayloadAction<boolean> ) => {
            state.isLoading = payload;
        },
        setErrorMessage: ( state, { payload }: PayloadAction<string> ) => {
            state.errorMessage = payload;
        },
        setTempUsername: ( state, { payload }: PayloadAction<string> ) => {
            state.tempUsername = payload;
            state.errorMessage = undefined;
        }
    }
});


export const { 
    login,
    logOut,
    setIsLoading,
    setErrorMessage,
    setTempUsername
} = authSlice.actions;