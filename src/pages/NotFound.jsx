import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="login-page">
            <div className="login-card">
                <h1>404</h1>
                <h2>Halaman Tidak Ditemukan</h2>
                <p className="muted">
                    Maaf, halaman yang kamu cari tidak tersedia.
                </p>
                <Link to="/dashboard" className="btn primary">
                    Kembali ke Dashboard
                </Link>
            </div>
        </div>
    );
}