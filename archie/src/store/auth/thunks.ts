import { responsePathAsArray } from "graphql";
import Swal from "sweetalert2";
import { UserCredentials, UserSingIn } from "../../auth/interfaces/auth.interfaces";
import { awsConfirmSignUp, awsSignIn, awsSignOut, awsSignUp } from "../../auth/providers/auth_providers";
import { AppDispatch } from "../store";
import { login, logOut, setErrorMessage, setIsLoading, setTempUsername } from "./authSlice";


export const startSingIn = ({ username, password }: UserSingIn ) => {
    return async( dispatch: AppDispatch ) => {

        dispatch( setIsLoading( true ) );

        const resp = await awsSignIn({ username, password })

        if ( !resp.status ) {
            handleError(resp.error)
        } 
        // else {
        //     dispatch( login( resp.user.attributes ) )
        // }

        dispatch( setIsLoading( false ) );

    }
}
 



export const startSingUp = ({ email, phone_number, password }: UserCredentials ) => {
    return async( dispatch: AppDispatch ) => {

        dispatch( setIsLoading( true ) );

        const resp = await awsSignUp({ email, phone_number, password })

        if ( !resp.status ) {
            dispatch( setErrorMessage( resp.error?.message ) )
        } else {
            dispatch( setTempUsername( resp.tempUsername! ) )
        }

        dispatch( setIsLoading( false ) );

    }
}





export const startConfirmSingUp = ({ username, code }: { username: string, code: string } ) => {
    return async( dispatch: AppDispatch ) => {

        dispatch( setIsLoading( true ) );

        const resp = await awsConfirmSignUp({ username, code })

        if ( !resp.status ) {
            dispatch( setErrorMessage( resp.error?.message ) )
        } 

        dispatch( setIsLoading( false ) );

    }
}





export const startSignOut = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( setIsLoading( true ) );

        await awsSignOut();

        dispatch( setIsLoading( false ) );
    }
}




const handleError = ( error: any ) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: error.message ,
        showConfirmButton: false,
        timer: 1500
    })
}

