import { Auth, Hub } from "aws-amplify";
import { UserConfirmSignUp, UserCredentials, UserSingIn } from "../interfaces/auth.interfaces";


interface Response {
    status: boolean,
    user?: any,
    error?: any
    tempUsername?: string
}


export const awsListenToAutoSignInEvent = () => {
    console.log('awsListenToAutoSignInEvent')
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            const user = payload.data;
            console.log('assign user')
        } else if (event === 'autoSignIn_failure') {
            console.log('redirect to sign in page')
        }
    })
}

export const awsSignUp = async ( { password, email, phone_number }: UserCredentials ): Promise<Response>  => {
    try {
        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
                email,       
                phone_number
            },
            autoSignIn: { 
                enabled: true,
            }
        });
        console.log(user);

        return {
            status: true,
            tempUsername: email
        }
    } catch (error) {
        console.log('error signing up:', error);
        return { 
            status: false,
            error
        }
    }
}


export const awsResendConfirmationCode = async ( username: string ) => {
    try {
        await Auth.resendSignUp( username );
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}



export const awsConfirmSignUp = async ( { username, code }: UserConfirmSignUp ): Promise<Response> => {
    try {
      await Auth.confirmSignUp(username, code);
      console.log('Success')
      return {
        status: true,
      }
    } catch (error) {
        console.log('error confirming sign up', error);
        return {
            status: false,
            error
        }
    }
}




export const awsSignIn = async ( { username, password }: UserSingIn ): Promise<Response> => {
    try {
        const user = await Auth.signIn(username, password);
        return {
            status: true,
            user
        }
    } catch (error) {
        console.log('error signing in', error);
        return {
            status: false,
            error
        }
    }
}



export const awsSignOut = async () => {
    try {
        await Auth.signOut();
        console.log('SingOut success!')
        return { status: true }
    } catch (error) {
        console.log('error signing out: ', error);
        return { status: false }
    }
}