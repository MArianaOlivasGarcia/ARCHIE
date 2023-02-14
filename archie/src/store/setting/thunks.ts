import { AppDispatch } from "../store"
import { setTheme } from "./settingSlice"




export const startChangeTheme = ( theme: 'dark' | 'light' ) => {
    return async( dispatch: AppDispatch ) => {

        const linkTheme = document.querySelector('#theme')
        linkTheme?.setAttribute('href', `/css/${ theme }.css`)
        localStorage.setItem('theme', theme);
        dispatch( setTheme(theme) );

    }
}
 
