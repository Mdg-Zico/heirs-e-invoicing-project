import "../PageLayout/PageLayout.css"
import "./Dashboard.css"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import SearchIcon from "../../components/SearchIcon/SearchIcon.svg"
import StatCard from "../../components/DashboardCards/StatCard/StatCard.jsx";

const email = localStorage.getItem("userEmail");
const firstName = email ? email.split("@")[0].split(".")[0] : "";
function Dashboard() {
  return (

  <div className="page-container dashboard-layout">
    <Sidebar/>
      <div className="dashboard-main">
         <div className="dashboard-header">
            <div className="header-text">
              <p className="greeting">Hi {firstName.charAt(0).toUpperCase() + firstName.slice(1)},</p>
              <h2>Welcome to Venus!</h2>
            </div>

            <div className="search-box">
              <img src={SearchIcon} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>
         </div>
          <div className="dashboard-grid">
              {/* Row 1: 4 Stat Cards */}
              

                <StatCard title="Spent this month" value="$682.5" />
                <StatCard title="New clients" value="321" />
                <StatCard title="Earnings" value="$350.40" />
                <StatCard title="Activity" value="$540.50" highlight />


              {/* Row 2: Chart + Profile */}
              <div className="card chart-card">Total Spent Chart</div>
              <div className="card profile-card">Profile</div>

              {/* Row 3: Monthly, Transactions, Schedule */}
              <div className="card monthly-card">Monthly Spend</div>
              <div className="card transactions-card">Transactions</div>
              <div className="card schedule-card">Schedule</div>
          </div>

      </div>
    
  </div>

  )
  

}

export default Dashboard;
