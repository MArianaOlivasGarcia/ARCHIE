

import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';
import { useEffect, useState } from 'react'
import { awsSignOut } from '../providers/auth_providers';

export const TestPage = () => {
    const [user, setUser] = useState<any>(null);
    const [customState, setCustomState] = useState(null);
  
    useEffect(() => {
      const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn":
            setUser(data);
            break;
          case "signOut":
            setUser(null);
            break;
          case "customOAuthState":
            setCustomState(data);
        }
      });
  
      Auth.currentAuthenticatedUser()
        .then(currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        .catch(() => console.log("Not signed in"));
  
      return unsubscribe;
    }, []);
  
      return (
      <div className="App">
        <button onClick={ awsSignOut }>CERRAR SESIÓN</button>
        {/* <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button> */}
        {/* <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook })}>Open Facebook</button> */}
        <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</button>
        {/* <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Amazon })}>Open Amazon</button> */}
        {/* <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Apple })}>Open Apple</button> */}
        
        <div id="customBtn" onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })} className="customGPlusSignIn">
            <span className="icon"></span>
            <span className="buttonText">Sing in with Google</span>
        </div>

        <div>{user && user.getUsername()}</div>
      </div>
    );
}
