


import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'


export interface SettingState {
    theme: 'dark' | 'light'
}


  
const initialState: SettingState = {
    theme: 'dark'
}



export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setTheme: ( state,  { payload }: PayloadAction<'dark' | 'light'> ) => {
            state.theme = payload;
        },
    }
});


export const { 
    setTheme
} = settingSlice.actions;