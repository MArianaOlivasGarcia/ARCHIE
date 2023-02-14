import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const AppRouter = () => {

    const { status } = useSelector( (state: RootState) => state.auth );

    if ( status === 'isChecking' ) {
      return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
          </div>
        </div>
      )
    }

    return (
      <Routes>
          {
            ( status === 'isAuthenticated' ) 
              ? <Route path="/*" element={ <DashboardRoutes /> } />
              : <Route path="/auth/*" element={ <AuthRoutes /> } />
          }
        <Route path="/*" element={ <Navigate to='/auth/login' replace />} />
      </Routes>
    )
  }