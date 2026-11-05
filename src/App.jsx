import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { DashboardLayout } from "./components/layout/DashboardLayout.jsx";
import { Login } from "./pages/Login.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Expenses } from "./pages/Expenses.jsx";
import { Payments } from "./pages/Payments.jsx";
import { Needs } from "./pages/Needs.jsx";
import { Reports } from "./pages/Reports.jsx";
import { NotFound } from "./pages/NotFound.jsx";
export default function App() {
  return <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route element={<ProtectedRoute/>}>
      <Route element={<DashboardLayout/>}>
        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/needs" element={<Needs/>}/>
        <Route path="/reports" element={<Reports/>}/>
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>;
}
