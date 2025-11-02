# Book Library App - UTS Pemrograman Web

## Identitas
- **Nama:** [Nama Lengkap Anda]
- **NIM:** 123140106 (Digit akhir: 6)

## Deskripsi Project
Book Library App adalah aplikasi web yang dibangun menggunakan ReactJS untuk menjelajahi dan mengelola koleksi buku. Aplikasi ini menggunakan Open Library API yang menyediakan akses gratis ke jutaan data buku. Fitur utama termasuk pencarian buku berdasarkan judul atau penulis, sistem reading list, dan detail buku lengkap.

## Fitur Utama
- 🔍 **Pencarian Buku** - Cari buku berdasarkan judul atau penulis
- 📚 **Reading List** - Simpan buku favorit di localStorage
- 📱 **Responsive Design** - Tampilan optimal di desktop dan mobile
- 🎨 **Modern UI** - Interface yang clean dan user-friendly
- ⚡ **Real-time Search** - Hasil pencarian langsung terupdate
- 🏷️ **Filter Kategori** - Filter buku berdasarkan subject/kategori
- 📖 **Detail Buku** - Informasi lengkap dengan description dan subjects

## Teknologi yang Digunakan
- **Framework:** ReactJS 18
- **Build Tool:** Vite
- **Styling:** CSS3 murni dengan Flexbox & Grid
- **API:** Open Library API (free, no API key needed)
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** Browser LocalStorage

## Cara Instalasi dan Menjalankan

### Prerequisites
- Node.js (versi 16 atau lebih tinggi)
- npm atau yarn

### Langkah-langkah

1. **Clone repository**
```bash
git clone https://github.com/username/uts-pemweb-123140106.git
cd uts-pemweb-123140106
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
Buka http://localhost:5173
```

### Build untuk Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Struktur Project
```
uts-pemweb-123140106/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchForm.jsx
│   │   ├── BookTable.jsx
│   │   ├── BookDetail.jsx
│   │   └── ReadingList.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── (static assets)
├── index.html (root entry point)
├── package.json
├── vite.config.js
└── README.md
```

## API Reference
Aplikasi menggunakan [Open Library API](https://openlibrary.org/developers/api) yang menyediakan:
- **Endpoint Pencarian:** `/search.json?title=` atau `/search.json?author=`
- **Endpoint Detail:** `/{bookKey}.json`
- **Endpoint Cover:** `/covers/b/id/{cover_id}-{size}.jpg`

## Fitur yang Diimplementasikan

### ✅ CPMK0501: Tabel, Form, CSS (45 poin)
- **Form Implementation** ✅ 
  - SearchForm dengan 3 input fields
  - Dropdown untuk Search By (Title/Author)
  - Dropdown untuk Filter Subject
  - Button Submit dengan validation
  
- **Table Implementation** ✅ 
  - BookTable menampilkan hasil dalam grid layout
  - 50 buku per search
  - Card-based design dengan cover, title, author, year
  
- **CSS Styling** ✅ 
  - 10+ CSS selectors (class, id, descendant, pseudo-class)
  - Responsive design dengan media queries
  - Flexbox & Grid layout
  - Gradient backgrounds dan transitions
  - Box shadows dan border-radius

### ✅ CPMK0502: HTML, JavaScript, ReactJS (55 poin)
- **HTML5 Structure** ✅ 
  - Semantic tags (header, main, section, article)
  - Proper form structure dengan labels
  - Accessible ARIA attributes
  
- **Modern JavaScript** ✅ 
  - Arrow functions untuk callbacks
  - Destructuring assignment
  - Async/await untuk API calls
  - Spread operator untuk state updates
  - Template literals untuk URL building
  
- **React Implementation** ✅ 
  - 5 function components + 1 main App component
  - React Hooks: useState, useEffect
  - Props drilling untuk state management
  - Conditional rendering
  - Event handlers (onClick, onChange, onSubmit)
  
- **API Integration** ✅ 
  - Fetch data dari Open Library API
  - Loading states dengan spinner message
  - Error handling dan error messages
  - Data mapping dan transformation

## Component Architecture

### Header.jsx
- Menampilkan judul aplikasi dengan gradient background
- Presentational component

### SearchForm.jsx
- Input untuk query pencarian
- Dropdown untuk pilih search by (title/author)
- Dropdown untuk filter subject (12 kategori)
- Button submit untuk trigger search

### BookTable.jsx
- Menampilkan grid cards dari hasil search
- Setiap card: cover, title, author, year, buttons
- Button untuk view details dan add to list

### BookDetail.jsx
- Modal popup untuk detail buku
- Menampilkan cover besar, title, author, description
- List subjects sampai 10 item
- Button untuk add to reading list
- Close button dengan overlay click

### ReadingList.jsx
- Sidebar menampilkan buku yang disave
- Thumbnail cover + title + author per item
- Button remove dengan modal close
- Click untuk view detail

### App.jsx (Main)
- State management untuk books, loading, error, selectedBook, readingList
- useEffect hooks untuk localStorage
- API calls untuk search dan detail
- Props passing ke children components

## Data Flow
```
User Input (SearchForm) 
  → searchBooks() 
  → Fetch Open Library API 
  → setBooks() 
  → BookTable rendered 
  → Click book 
  → getBookDetails() 
  → setSelectedBook() 
  → BookDetail modal shown
  → Add to List 
  → setReadingList() 
  → LocalStorage saved
```

## Pembelajaran
Project ini mengimplementasikan konsep modern web development:
- React Functional Components & Hooks
- CSS Grid dan Flexbox untuk layout responsive
- Local Storage untuk persistensi data
- API integration dengan error handling
- Clean code dan component architecture

---
**Dibuat untuk memenuhi Ujian Tengah Semester Pemrograman Web**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
