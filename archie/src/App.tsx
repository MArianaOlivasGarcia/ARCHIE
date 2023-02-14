import { AppRouter } from "./router/AppRouter"
import { useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify';
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { login, logOut } from "./store/auth";
import { startChangeTheme } from "./store/setting/thunks";

export const App = () => {


  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          // setUser(data);
          console.log('signIn');
          dispatch( login(data.attributes) )
          console.log(data)

          break;
        case "signOut":
          // setUser(null);
          console.log('signOut')
          dispatch( logOut() )
          break;
        case "customOAuthState":
          console.log('customOAuthState')
          console.log(data);
          // setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => {
          console.log('currentAuthenticatedUser');
          console.log(currentUser)
          dispatch( login(currentUser.attributes) )
          // setUser(currentUser)
      })
      .catch(() =>{
        console.log("Not signed in")
        dispatch( logOut() )
      });

    return unsubscribe;
  }, []);


  useEffect(() => {
    dispatch( startChangeTheme(localStorage.getItem('theme') || 'light' as any))
  }, [])

  return (
    <AppRouter />
  )
}
