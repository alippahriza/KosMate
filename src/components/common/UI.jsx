import { Pencil, Trash2, Plus, X } from "lucide-react";
export function PageTitle({title,description,action}){return <div className="page-title"><div><h1>{title}</h1><p>{description}</p></div>{action}</div>}
export function Button({children,onClick,type="button",variant="primary"}){return <button type={type} onClick={onClick} className={`btn ${variant}`}>{children}</button>}
export function Modal({title,onClose,children}){return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><div className="modal"><div className="modal-head"><h2>{title}</h2><button className="icon-btn" onClick={onClose}><X size={18}/></button></div>{children}</div></div>}
export function Actions({onEdit,onDelete}){return <div className="actions"><button className="icon-btn" title="Edit" onClick={onEdit}><Pencil size={15}/></button><button className="icon-btn danger" title="Hapus" onClick={onDelete}><Trash2 size={15}/></button></div>}
export function Empty({children="Belum ada data."}){return <div className="empty">{children}</div>}
export function AddIcon(){return <Plus size={16}/>}
