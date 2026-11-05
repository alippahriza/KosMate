import { Wallet, PiggyBank, BellRing, ListChecks, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { PageTitle } from "../components/common/UI.jsx";
import { rupiah,dateID } from "../components/common/format.js";
export function Dashboard(){
 const {data}=useApp();const spent=data.expenses.reduce((s,x)=>s+Number(x.amount),0);const unpaid=data.payments.filter(x=>x.status!=="Lunas");const openNeeds=data.needs.filter(x=>x.status!=="Selesai");
 const cards=[
  ["Total Pengeluaran",rupiah(spent),"Berdasarkan seluruh transaksi",Wallet],
  ["Sisa Anggaran",rupiah(data.budget-spent),"Dari anggaran bulanan",PiggyBank],
  ["Pembayaran Tertunda",`${unpaid.length} tagihan`,"Belum berstatus lunas",BellRing],
  ["Kebutuhan Belum Selesai",`${openNeeds.length} item`,"Daftar kebutuhan harian",ListChecks]
 ];
 return <><PageTitle title="Dashboard" description="Ringkasan kondisi keuangan dan kebutuhan kos."/><section className="stats-grid">{cards.map(([label,value,note,Icon])=><article className="stat-card" key={label}><div className="stat-label">{label}<Icon size={18}/></div><h2>{value}</h2><p>{note}</p></article>)}</section><section className="panel"><div className="panel-title"><div><h2>Transaksi Terbaru</h2><p>Pengeluaran yang baru dicatat</p></div><Link to="/expenses">Lihat semua <ArrowUpRight size={14}/></Link></div>{data.expenses.slice(0,5).length===0?<p className="muted">Belum ada transaksi.</p>:<div className="table-wrap"><table><thead><tr><th>Tanggal</th><th>Transaksi</th><th>Kategori</th><th>Nominal</th></tr></thead><tbody>{data.expenses.slice(0,5).map(x=><tr key={x.id}><td>{dateID(x.date)}</td><td>{x.title}</td><td>{x.category}</td><td className="amount">{rupiah(x.amount)}</td></tr>)}</tbody></table></div>}</section><section className="two-panels"><div className="panel"><h2>Pengingat Pembayaran</h2>{unpaid.length?unpaid.slice(0,3).map(x=><div className="compact-row" key={x.id}><span>{x.title}<small>Jatuh tempo {dateID(x.dueDate)}</small></span><b>{rupiah(x.amount)}</b></div>):<p className="muted">Tidak ada tagihan tertunda.</p>}</div><div className="panel"><h2>Kebutuhan Harian</h2>{openNeeds.length?openNeeds.slice(0,3).map(x=><div className="compact-row" key={x.id}><span>{x.name}<small>{x.category}</small></span><b>× {x.quantity}</b></div>):<p className="muted">Semua kebutuhan selesai.</p>}</div></section></>;
}
