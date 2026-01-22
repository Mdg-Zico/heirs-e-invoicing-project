import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login/Login"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import Dashboard from "./pages/Dashboard/Dashboard"
import Clients from "./pages/Clients/Clients"
import ClientDetails from "./pages/ClientDetails/ClientDetails"
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
    <Route path='/' element={<Login/>}/>
    <Route path="/activity" element={<Activity/>}/>
    <Route path="/library" element={<Library/>}/>
    <Route path="/security" element={<Security/>}/>
    <Route path="/schedules" element={<Schedule/>}/>
    <Route path="/payouts" element={<Payouts/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/clients/:id" element={<ClientDetails />} />
    <Route path="/settings" element={<Settings />} />
    <Route path='/logout' element={<Login/>}/>
   </Routes>
  );
}

export default App
