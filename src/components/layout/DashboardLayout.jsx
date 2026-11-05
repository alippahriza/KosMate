import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Wallet, BellRing, ListChecks, ChartNoAxesCombined, LogOut, KeyRound } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";
const nav = [
  ["/dashboard","Dashboard",LayoutDashboard],
  ["/expenses","Expenses Management",Wallet],
  ["/payments","Payment Reminders",BellRing],
  ["/needs","Daily Needs",ListChecks],
  ["/reports","Reports",ChartNoAxesCombined]
];
export function DashboardLayout() {
  const {data,logout} = useApp(); const navigate=useNavigate();
  function handleLogout(){logout();navigate("/login");}
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-icon"><KeyRound size={18}/></span>KosMate</div>
      <p className="side-caption">STUDENT LIFE MANAGER</p>
      <nav>{nav.map(([to,label,Icon])=><NavLink key={to} to={to} className={({isActive})=>`nav-item ${isActive?"active":""}`}><Icon size={18}/>{label}</NavLink>)}</nav>
      <div className="side-bottom"><div className="user-chip"><div className="avatar">{data.user.name[0]}</div><div><b>{data.user.name}</b><small>Pengguna KosMate</small></div></div><button className="logout" onClick={handleLogout}><LogOut size={16}/> Keluar</button></div>
    </aside>
    <main className="main"><header className="topbar"><div><b>Workspace</b><span> / KosMate</span></div><span className="date-label">November 2026</span></header><div className="content"><Outlet/></div></main>
  </div>;
}
