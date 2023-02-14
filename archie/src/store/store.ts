


import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { settingSlice } from './setting/settingSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    setting: settingSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch