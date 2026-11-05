import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);
const STORAGE_KEY = "kosmate_stage4_data";
const DEMO_EMAIL = "demo@kosmate.id";
const DEMO_PASSWORD = "kosmate123";
const initialData = {
  user: { name: "Junari Elpraja", email: DEMO_EMAIL },
  budget: 3000000,
  expenses: [
    { id: 1, title: "Belanja bahan makanan", category: "Makanan", amount: 185000, date: "2026-11-02", note: "Belanja mingguan" },
    { id: 2, title: "Tagihan listrik", category: "Utilitas", amount: 120000, date: "2026-11-03", note: "" },
    { id: 3, title: "Laundry", category: "Kebutuhan kos", amount: 45000, date: "2026-11-04", note: "" },
    { id: 4, title: "Transportasi", category: "Transportasi", amount: 60000, date: "2026-11-05", note: "" }
  ],
  payments: [
    { id: 11, title: "Uang kos", amount: 650000, dueDate: "2026-11-10", status: "Belum Lunas", note: "Pembayaran bulanan" },
    { id: 12, title: "WiFi", amount: 50000, dueDate: "2026-11-12", status: "Belum Lunas", note: "" },
    { id: 13, title: "Air galon", amount: 22000, dueDate: "2026-11-01", status: "Lunas", note: "" }
  ],
  needs: [
    { id: 21, name: "Sabun mandi", category: "Perlengkapan Mandi", quantity: 1, status: "Belum", note: "" },
    { id: 22, name: "Deterjen", category: "Kebersihan", quantity: 2, status: "Belum", note: "Kemasan kecil" },
    { id: 23, name: "Air mineral", category: "Makanan & Minuman", quantity: 1, status: "Selesai", note: "" }
  ]
};

function loadData() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || initialData; }
  catch { return initialData; }
}
export function AppProvider({ children }) {
  const [data, setData] = useState(loadData);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("kosmate_stage4_auth") === "true");
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(data)), [data]);
  const login = (email, password) => {
    if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) return false;
    setIsLoggedIn(true); localStorage.setItem("kosmate_stage4_auth", "true"); return true;
  };
  const logout = () => { setIsLoggedIn(false); localStorage.removeItem("kosmate_stage4_auth"); };
  const addExpense = item => setData(d => ({...d, expenses:[{...item,id:Date.now()},...d.expenses]}));
  const updateExpense = item => setData(d => ({...d, expenses:d.expenses.map(x=>x.id===item.id?item:x)}));
  const deleteExpense = id => setData(d => ({...d, expenses:d.expenses.filter(x=>x.id!==id)}));
  const addPayment = item => setData(d => ({...d, payments:[{...item,id:Date.now()},...d.payments]}));
  const updatePayment = item => setData(d => ({...d, payments:d.payments.map(x=>x.id===item.id?item:x)}));
  const deletePayment = id => setData(d => ({...d, payments:d.payments.filter(x=>x.id!==id)}));
  const addNeed = item => setData(d => ({...d, needs:[{...item,id:Date.now()},...d.needs]}));
  const updateNeed = item => setData(d => ({...d, needs:d.needs.map(x=>x.id===item.id?item:x)}));
  const deleteNeed = id => setData(d => ({...d, needs:d.needs.filter(x=>x.id!==id)}));
  const resetDemo = () => setData(initialData);
  const value = useMemo(() => ({data,isLoggedIn,login,logout,addExpense,updateExpense,deleteExpense,addPayment,updatePayment,deletePayment,addNeed,updateNeed,deleteNeed,resetDemo}), [data,isLoggedIn]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp harus digunakan di dalam AppProvider");
  return value;
}
