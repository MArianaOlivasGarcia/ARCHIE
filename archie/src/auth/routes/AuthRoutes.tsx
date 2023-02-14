

import { Navigate, Route, Routes } from "react-router"
import { AuthLayout } from "../layouts"
import { ConfirmSignUpPage, LoginPage, RegisterPage, ResetPasswordPage } from "../pages"
import { TestPage } from "../pages/TestPage"


export const AuthRoutes = () => {
  
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={ <LoginPage /> }/>
        <Route path="register" element={ <RegisterPage /> }/>
        <Route path="confirm-register" element={ <ConfirmSignUpPage /> }/>
        <Route path="reset-password" element={ <ResetPasswordPage /> }/>
        <Route path="test" element={ <TestPage /> }/>

        <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
      </Routes>
    </AuthLayout>
  )
}
