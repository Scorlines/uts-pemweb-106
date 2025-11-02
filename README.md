# Perpustakaan Buku - UTS Pemrograman Web

## 👤 Identitas
- **Nama**: Muhammad Fadhel
- **NIM**: 123140106

## 📖 Deskripsi Project
Aplikasi web perpustakaan buku yang dibangun menggunakan ReactJS dan Vite. Aplikasi ini memungkinkan pengguna untuk mencari buku berdasarkan judul atau penulis menggunakan Open Library API, menampilkan detail buku lengkap, dan menyimpan buku favorit ke dalam daftar bacaan pribadi.

### Fitur Utama:
- 🔍 Pencarian buku berdasarkan judul atau penulis
- 🎯 Filter buku berdasarkan subjek (Fiksi, Sains, Sejarah, dll)
- 📚 Daftar bacaan pribadi dengan localStorage
- 📱 Tampilan responsif untuk semua perangkat
-    Tema dark mode yang elegan
-    Background perpustakaan yang aesthetic

## 🚀 Cara Instalasi dan Menjalankan

### Prasyarat
- Node.js (versi 14 atau lebih baru)
- npm atau yarn

### Langkah-langkah:

1. **Clone repository**
   ```bash
   git clone https://github.com/Scorlines/uts-pemweb-106.git
   cd uts-pemweb-106
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:5173
   ```

### Build untuk Production
```bash
npm run build
npm run preview
```

## 🌐 Link Deployment
🔗 **[Live Demo - Perpustakaan Buku](https://uts-pemweb-106-3yvym5l5t-scorlines-projects.vercel.app)**

Aplikasi sudah di-deploy menggunakan Vercel dan dapat diakses secara online.

---

## 📸 Screenshot Aplikasi

### 1. Halaman Utama
![Halaman Utama](./screenshots/Halaman%20Utama.png)

Tampilan awal aplikasi dengan header gradient purple-pink, form pencarian di sidebar kiri, dan daftar bacaan kosong. Menggunakan tema dark mode dengan background perpustakaan yang aesthetic.

---

### 2. Hasil Pencarian Buku
![Hasil Pencarian](./screenshots/mencari%20buku.png)

Menampilkan hasil pencarian buku "48 laws of power" dalam grid layout responsif. Setiap card buku menampilkan cover, judul, penulis, tahun terbit, dengan tombol "Lihat Detail" dan "Tambah ke Daftar".

---

### 3. Detail Buku (Modal)
![Detail Buku](./screenshots/cek%20detail%20buku.png)

Modal popup menampilkan informasi lengkap buku termasuk cover besar, deskripsi detail, dan subjek/kategori dalam bentuk tag berwarna dengan backdrop blur effect.

---

### 4. Daftar Bacaan dengan Item
![Daftar Bacaan](./screenshots/Tambah%20buku.png)

Sidebar "Daftar Bacaan Saya" menampilkan buku yang telah disimpan dengan thumbnail cover, judul, penulis, dan tombol hapus (×). Data tersimpan di localStorage.

---
