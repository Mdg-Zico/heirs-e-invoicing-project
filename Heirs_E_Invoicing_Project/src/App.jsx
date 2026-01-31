import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Clients from "./pages/Clients/Clients";
import Settings from "./pages/Settings/Settings";
import Activity from "./pages/Activity/Activity";
import Library from "./pages/Library/Library";
import Security from "./pages/Security/Security";
import Schedule from "./pages/Schedule/Schedule";
import Payouts from "./pages/Payouts/Payouts";
import Logout from "./pages/Logout/Logout";

import ProtectedRoute from "./Routes/ProtectedRoute";
import InactivityHandler from "./components/InactivityHolder/InactivityHolder"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* 🔔 Toasts */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 🔐 Protected + Inactivity handled routes */}
        <Route
          element={
            <ProtectedRoute>
              <InactivityHandler>
                <Outlet />
              </InactivityHandler>
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/library" element={<Library />} />
          <Route path="/security" element={<Security />} />
          <Route path="/schedules" element={<Schedule />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Logout */}
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
