




import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { DashboardLayout } from "../layouts/DashboardLayout"
import { HomePage, TryMePage } from "../pages"
import { GetCredentialsPage } from "../pages/aws"

export const DashboardRoutes = () => {

  return (
    <DashboardLayout>

      <Routes>
          <Route path="home" element={ <HomePage /> }/>
          <Route path="try-me" element={ <TryMePage /> }/>

          {/* AWS */}
          <Route path="aws/get-credentials" element={ <GetCredentialsPage /> }/>

          <Route path="/*" element={ <Navigate to="/home" /> }/>
      </Routes>
    </DashboardLayout>
  )
}