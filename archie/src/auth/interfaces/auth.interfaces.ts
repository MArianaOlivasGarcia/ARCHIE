
export interface UserCredentials {
  email: string, 
  phone_number: string,
  password: string,
}
  

export interface UserConfirmSignUp {
  username: string,
  code: string
}


export interface UserSingIn {
  username: string,
  password: string
}