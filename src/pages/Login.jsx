import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { KeyRound } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
export function Login(){
 const {login,isLoggedIn}=useApp();const navigate=useNavigate();const [email,setEmail]=useState("demo@kosmate.id");const [password,setPassword]=useState("kosmate123");const [error,setError]=useState("");
 if(isLoggedIn)return <Navigate to="/dashboard" replace/>;
 function submit(e){e.preventDefault();if(login(email,password))navigate("/dashboard");else setError("Email atau password tidak sesuai.");}
 return <div className="login-page"><form className="login-card" onSubmit={submit}><div className="brand login-brand"><span className="brand-icon"><KeyRound size={18}/></span>KosMate</div><p className="eyebrow">STUDENT LIFE MANAGER</p><h1>Selamat datang kembali</h1><p className="muted">Masuk untuk mengelola keuangan dan kebutuhan kosmu.</p><label>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>{error&&<p className="error">{error}</p>}<button className="btn primary wide">Masuk ke KosMate</button><div className="demo-box"><b>Akun demo untuk pengujian</b><span>Email: demo@kosmate.id</span><span>Password: kosmate123</span></div></form></div>;
}
