import {Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login/Login"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import Dashboard from "./pages/Dashboard/Dashboard"
import Clients from "./pages/Clients/Clients"
import ProtectedRoute from "../src/Routes/ProtectedRoute"
import Settings from "./pages/Settings/Settings"
import Activity from "./pages/Activity/Activity"
import Library from "./pages/Library/Library"
import Security from "./pages/Security/Security"
import Schedule from "./pages/Schedule/Schedule"
import Payouts from "./pages/Payouts/Payouts"
import Logout from "./pages/Logout/Logout"


function App() {
  return (
  <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword/>}/>

      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/clients" element={
        <ProtectedRoute>
          <Clients />
        </ProtectedRoute>
      } />

      <Route path="/activity" element={
        <ProtectedRoute>
          <Activity />
        </ProtectedRoute>
      } />

      <Route path="/library" element={
        <ProtectedRoute>
          <Library />
        </ProtectedRoute>
      } />

      <Route path="/security" element={
        <ProtectedRoute>
          <Security />
        </ProtectedRoute>
      } />

      <Route path="/schedules" element={
        <ProtectedRoute>
          <Schedule />
        </ProtectedRoute>
      } />

      <Route path="/payouts" element={
        <ProtectedRoute>
          <Payouts />
        </ProtectedRoute>
      } />

      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />

      <Route path='/logout' element={<Logout/>}/>
</Routes>
  );
}

export default App
