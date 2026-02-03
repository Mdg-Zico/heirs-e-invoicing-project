
import "./Sidebar.css"
import Icon from "./icons/Icon.svg"
import { NavLink } from "react-router-dom";
import dashboardIcon from "./icons/Dashboard.svg";
import activityIcon from "./icons/Activity.svg";
import libraryIcon from "./icons/Library.svg";
import securityIcon from "./icons/Security.svg";
import schedulesIcon from "./icons/Schedules.svg";
import payoutsIcon from "./icons/Payouts.svg";
import settingsIcon from "./icons/Settings.svg";
import logoutIcon from "./icons/Logout.svg"
import clientIcon from "./icons/clientIcon.svg"

function Sidebar(){

    return(
        <div className="sidebar-container">

            <div className="sidebar-heading">
                <div className="sidebar-logo">
                    <img className="icon" src={Icon} alt="Not available" />
                </div>
                <div className="heading-texts">
                    <p className="heirs-text">HEIRS</p>
                    <span className="invoicing-text">E-INVOICING</span>
                </div>
            </div> 
    
           <div className="sidebar-divider"></div>
            <div className="sidebar-list"> 
                    


                <NavLink to="/dashboard" className="menu-item dash-background">
                    <img src={dashboardIcon} className="menu-icon" />
                    <span className="dash">Dashboard</span>
                </NavLink>
                <NavLink to="/clients" className="menu-item">
                    <img src={clientIcon} className="menu-icon" />
                    <span>Clients</span>
                </NavLink>
                <NavLink to="/activity" className="menu-item">
                    <img src={activityIcon} className="menu-icon" />
                    <span>Activity</span>
                </NavLink>

                <NavLink to="/library" className="menu-item">
                    <img src={libraryIcon} className="menu-icon" />
                    <span>Library</span>
                </NavLink>

                <NavLink to="/security" className="menu-item">
                    <img src={securityIcon} className="menu-icon" />
                    <span>Security</span>
                </NavLink>

                <NavLink to="/schedules" className="menu-item">
                    <img src={schedulesIcon} className="menu-icon" />
                    <span>Schedules</span>
                </NavLink>

                <NavLink to="/payouts" className="menu-item">
                    <img src={payoutsIcon} className="menu-icon" />
                    <span>Payouts</span>
                </NavLink>

                <NavLink to="/settings" className="menu-item">
                    <img src={settingsIcon} className="menu-icon" />
                    <span>Settings</span>
                </NavLink>

                

            </div>
                <NavLink to="/logout" className="menu-item logout-menu">
                    <img src={logoutIcon} className="menu-icon" />
                    <span>Logout</span>
                </NavLink>
        </div>
        

    )
}
export default Sidebar;