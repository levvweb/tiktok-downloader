# 🎵 TikTok Downloader

<div align="center">

![TikTok Downloader](https://img.shields.io/badge/TikTok-Downloader-00f2ea?style=for-the-badge&logo=tiktok&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Download video dan slideshow TikTok tanpa watermark - Cepat, Gratis, dan Mudah!**

[✨ Demo](#-demo) • [🚀 Fitur](#-fitur) • [💻 Instalasi](#-instalasi) • [📖 Cara Pakai](#-cara-pakai) • [🛠️ Teknologi](#-teknologi)

</div>

---

## ✨ Demo

Aplikasi web modern dan elegan yang memungkinkan Anda mengunduh video TikTok, slideshow, dan file audio tanpa watermark dalam kualitas HD.

**Fitur Unggulan:**
- 🎥 Download video tanpa watermark
- 🖼️ Download gambar slideshow satu per satu
- 🎵 Ekstrak audio dari video
- 📱 Desain responsif penuh
- ⚡ Proses super cepat
- 🌙 Interface mode gelap

---

## 🚀 Fitur

### Fitur Utama
- ✅ **Download Tanpa Watermark** - Dapatkan video bersih tanpa logo TikTok
- ✅ **Kualitas HD** - Download video dalam kualitas tertinggi yang tersedia
- ✅ **Dukungan Slideshow** - Download semua gambar dari slideshow TikTok
- ✅ **Ekstraksi Audio** - Simpan hanya audionya dari video TikTok
- ✅ **Download Batch** - Download beberapa gambar slideshow sekaligus
- ✅ **Gratis Selamanya** - Tanpa langganan, tanpa biaya tersembunyi

### Pengalaman Pengguna
- 🎨 **UI Modern** - Antarmuka yang indah dan intuitif dengan animasi halus
- 📱 **Desain Responsif** - Bekerja sempurna di desktop, tablet, dan mobile
- ⚡ **Proses Cepat** - Pemrosesan dan pengunduhan video yang cepat
- 🔗 **Paste & Go** - Dukungan paste clipboard satu klik
- 🌐 **Tanpa Login** - Langsung mulai download tanpa perlu login

---

## 💻 Instalasi

### Prasyarat
- [Node.js](https://nodejs.org/) (v18 atau lebih tinggi)
- [npm](https://www.npmjs.com/) atau [bun](https://bun.sh/)

### Mulai Cepat

1. **Clone repository**
   ```bash
   git clone https://github.com/levvweb/tiktok-downloader.git
   cd tiktok-downloader
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   bun install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   # atau
   bun run dev
   ```

4. **Buka browser**
   ```
   Navigasi ke http://localhost:5173
   ```

### Build untuk Production

```bash
npm run build
# atau
bun run build
```

File siap produksi akan ada di folder `dist`.

---

## 📖 Cara Pakai

### Cara Download Video TikTok

1. **Salin URL video TikTok**
   - Buka aplikasi atau website TikTok
   - Temukan video yang ingin didownload
   - Tap/klik tombol "Share"
   - Copy linknya

2. **Paste URL**
   - Buka TikTok Downloader
   - Paste URL di kolom input
   - Atau gunakan tombol clipboard untuk paste satu klik

3. **Download**
   - Klik tombol "Unduh" (Download)
   - Pilih format yang diinginkan:
     - **Video Tanpa WM** - Video tanpa watermark
     - **Dengan WM** - Video dengan watermark
     - **Audio** - Audio saja (MP3)
   - Untuk slideshow, klik gambar individu untuk download

### Format URL yang Didukung

```
✅ https://www.tiktok.com/@username/video/1234567890
✅ https://vm.tiktok.com/XXXXXXXXX
✅ https://vt.tiktok.com/XXXXXXXXX
✅ https://tiktok.com/@username/video/1234567890
```

---

## 🛠️ Teknologi

### Frontend
- **React 18.3.1** - Library UI
- **TypeScript 5.8.3** - JavaScript dengan type-safe
- **Vite 5.4.19** - Build tool dan dev server
- **Tailwind CSS 3.4.17** - Framework CSS utility-first

### Komponen UI & Animasi
- **shadcn/ui** - Komponen UI berkualitas tinggi
- **Radix UI** - Komponen primitif yang accessible
- **Framer Motion 12.23.26** - Library animasi
- **GSAP 3.14.2** - Animasi tingkat profesional
- **Lucide React** - Library ikon cantik

### Manajemen Data & State
- **TanStack Query 5.83.0** - Data fetching dan caching
- **Axios 1.13.2** - HTTP client
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Validasi schema

### Styling
- **Tailwind CSS** - Desain responsif
- **CVA (class-variance-authority)** - Varian komponen
- **tailwindcss-animate** - Utilitas animasi

---

## 📁 Struktur Proyek

```
tiktok-downloader/
├── src/
│   ├── components/          # Komponen React
│   │   ├── ui/             # Komponen shadcn/ui
│   │   ├── Header.tsx      # Header aplikasi
│   │   ├── DownloadCard.tsx # Card video/slideshow
│   │   └── LoadingSpinner.tsx # Loading state
│   ├── lib/                # Library utilitas
│   │   ├── tiktok.ts       # Integrasi API TikTok
│   │   └── utils.ts        # Fungsi helper
│   ├── hooks/              # Custom React hooks
│   │   ├── use-toast.ts    # Notifikasi toast
│   │   └── use-mobile.tsx  # Deteksi mobile
│   ├── pages/              # Komponen halaman
│   │   ├── Index.tsx       # Halaman utama
│   │   └── NotFound.tsx    # Halaman 404
│   ├── App.tsx             # Komponen root
│   ├── main.tsx            # Entry point aplikasi
│   └── index.css           # Style global
├── public/                 # Asset statis
├── index.html              # Template HTML
├── package.json            # Dependencies
├── tailwind.config.ts      # Konfigurasi Tailwind
├── tsconfig.json           # Konfigurasi TypeScript
└── vite.config.ts          # Konfigurasi Vite
```

---

## 🎨 Rincian Fitur

### Download Video

```typescript
// Mendukung beberapa opsi download
- Tanpa Watermark (HD)
- Dengan Watermark
- Audio Saja (MP3)
```

### Download Slideshow

```typescript
// Untuk postingan slideshow TikTok
- Download gambar individual
- Semua gambar dalam layout grid
- Download satu klik per gambar
```

### Validasi URL

```typescript
// Validasi URL otomatis
- Cek format URL TikTok
- Memberikan pesan error yang membantu
- Deteksi paste dan auto-fill
```

---

## 🔧 Konfigurasi

### Environment Variables

Buat file `.env` di root directory (opsional):

```env
# Tidak ada environment variables yang diperlukan untuk penggunaan dasar
# Aplikasi menggunakan endpoint API TikTok publik
```

### Kustomisasi

Anda bisa mengkustomisasi tema dengan mengedit `tailwind.config.ts`:

```typescript
// Warna kustom, animasi, dan lainnya
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Tambahkan warna kustom Anda
    }
  }
}
```

---

## 🤝 Kontribusi

Kontribusi selalu diterima! Berikut cara Anda bisa membantu:

1. **Fork repository**
2. **Buat feature branch**
   ```bash
   git checkout -b feature/fitur-keren
   ```
3. **Commit perubahan Anda**
   ```bash
   git commit -m 'Menambahkan fitur keren'
   ```
4. **Push ke branch**
   ```bash
   git push origin feature/fitur-keren
   ```
5. **Buka Pull Request**

### Panduan Development

- Ikuti best practice TypeScript
- Tulis commit message yang bermakna
- Jaga komponen tetap modular dan reusable
- Tambahkan komentar untuk logic yang kompleks
- Test di berbagai device/browser

---

## 📝 Lisensi

Proyek ini adalah open source dan tersedia di bawah [Lisensi MIT](LICENSE).

---

## ⚠️ Disclaimer

Tool ini hanya untuk tujuan edukasi. Harap hormati Ketentuan Layanan TikTok dan hak-hak kreator konten. Selalu:

- Berikan kredit kepada kreator asli
- Jangan gunakan konten yang didownload untuk tujuan komersial tanpa izin
- Hormati hak cipta dan hak kekayaan intelektual
- Gunakan dengan bertanggung jawab dan etis

---

## 🌟 Dukungan

Jika proyek ini membantu Anda, silakan beri ⭐️!

### Issues & Bug

Menemukan bug? [Buka issue](https://github.com/levvweb/tiktok-downloader/issues)

### Pertanyaan?

Ada pertanyaan? Jangan ragu untuk menghubungi:
- 📧 Buka [GitHub Discussion](https://github.com/levvweb/tiktok-downloader/discussions)
- 🐛 Laporkan bug di [Issues](https://github.com/levvweb/tiktok-downloader/issues)

---

## 📊 Statistik

![GitHub stars](https://img.shields.io/github/stars/levvweb/tiktok-downloader?style=social)
![GitHub forks](https://img.shields.io/github/forks/levvweb/tiktok-downloader?style=social)
![GitHub issues](https://img.shields.io/github/issues/levvweb/tiktok-downloader)
![GitHub license](https://img.shields.io/github/license/levvweb/tiktok-downloader)

---

<div align="center">

**Dibuat dengan ❤️ oleh [LevvWeb](https://github.com/levvweb)**

[⬆ Kembali ke Atas](#-tiktok-downloader)

</div>
