# KosMate (PAW)

Prototype frontend untuk aplikasi manajemen kehidupan anak kos.

## Teknologi
- React 18 + Vite
- JavaScript dengan JSX (`.jsx`)
- React Router DOM
- Context API (`useContext`, `useState`)
- localStorage
- Lucide React untuk ikon

## Menjalankan proyek
Pastikan Node.js dan npm sudah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite (umumnya http://localhost:5173).

## Akun demo
- Email: `demo@kosmate.id`
- Password: `kosmate123`

## Fitur yang sudah diimplementasikan
1. Dashboard: ringkasan pengeluaran, anggaran tersisa, tagihan tertunda, kebutuhan belum selesai, transaksi terbaru.
2. Expenses Management: tambah, edit, hapus, pencarian, filter kategori, total sesuai hasil filter.
3. Payment Reminders: tambah, edit, hapus, filter status, ubah status lunas/belum lunas.
4. Daily Needs Management: tambah, edit, hapus, filter status, tandai selesai/belum selesai.
5. Reports: total pengeluaran, anggaran, nilai pembayaran lunas/tertunda, diagram batang pengeluaran per kategori.

## Penyimpanan dan batasan prototype
Data aplikasi disimpan di `localStorage` browser. Data akan tetap ada setelah refresh pada browser/perangkat yang sama. Fitur login hanya simulasi frontend dengan akun demo; tidak ada backend, database server, atau autentikasi produksi. Data awal merupakan dummy data.

## Catatan pengembangan
- Data transaksi, pembayaran, dan kebutuhan dikelola terpusat melalui `src/context/AppContext.jsx`.
- Semua halaman fitur membaca state yang sama sehingga Dashboard dan Reports ikut berubah saat data diperbarui.
- Data awal menggunakan tanggal November 2026 sebagai contoh dataset. Sesuaikan tanggal dummy bila pengujian dilakukan pada periode lain.
