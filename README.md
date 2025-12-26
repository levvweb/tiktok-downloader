# 🎵 TikTok Downloader

<div align="center">

![TikTok Downloader](https://img.shields.io/badge/TikTok-Downloader-00f2ea?style=for-the-badge&logo=tiktok&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Download TikTok videos and slideshows without watermark - Fast, Free, and Easy!**

[✨ Demo](#-demo) • [🚀 Features](#-features) • [💻 Installation](#-installation) • [📖 Usage](#-usage) • [🛠️ Tech Stack](#-tech-stack)

</div>

---

## ✨ Demo

A modern, sleek web application that allows you to download TikTok videos, slideshows, and audio files without watermarks in HD quality.

**Live Features:**
- 🎥 Download videos without watermark
- 🖼️ Download slideshow images individually
- 🎵 Extract audio from videos
- 📱 Fully responsive design
- ⚡ Lightning-fast processing
- 🌙 Dark mode interface

---

## 🚀 Features

### Core Features
- ✅ **No Watermark Downloads** - Get clean videos without TikTok branding
- ✅ **HD Quality** - Download videos in the highest quality available
- ✅ **Slideshow Support** - Download all images from TikTok slideshows
- ✅ **Audio Extraction** - Save just the audio from any TikTok video
- ✅ **Batch Downloads** - Download multiple slideshow images at once
- ✅ **Free Forever** - No subscriptions, no hidden fees

### User Experience
- 🎨 **Modern UI** - Beautiful, intuitive interface with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Processing** - Quick video processing and downloads
- 🔗 **Paste & Go** - One-click clipboard paste support
- 🌐 **No Login Required** - Start downloading immediately

---

## 💻 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/levvweb/tiktok-downloader.git
   cd tiktok-downloader
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
bun run build
```

The production-ready files will be in the `dist` folder.

---

## 📖 Usage

### How to Download TikTok Videos

1. **Copy the TikTok video URL**
   - Open TikTok app or website
   - Find the video you want to download
   - Tap/click on "Share" button
   - Copy the link

2. **Paste the URL**
   - Open TikTok Downloader
   - Paste the URL in the input field
   - Or use the clipboard button for one-click paste

3. **Download**
   - Click the "Unduh" (Download) button
   - Choose your preferred format:
     - **Video Tanpa WM** - Video without watermark
     - **Dengan WM** - Video with watermark
     - **Audio** - Audio only (MP3)
   - For slideshows, click individual images to download

### Supported URL Formats

```
✅ https://www.tiktok.com/@username/video/1234567890
✅ https://vm.tiktok.com/XXXXXXXXX
✅ https://vt.tiktok.com/XXXXXXXXX
✅ https://tiktok.com/@username/video/1234567890
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components & Animation
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives
- **Framer Motion 12.23.26** - Animation library
- **GSAP 3.14.2** - Professional-grade animation
- **Lucide React** - Beautiful icon library

### Data & State Management
- **TanStack Query 5.83.0** - Data fetching and caching
- **Axios 1.13.2** - HTTP client
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### Styling
- **Tailwind CSS** - Responsive design
- **CVA (class-variance-authority)** - Component variants
- **tailwindcss-animate** - Animation utilities

---

## 📁 Project Structure

```
tiktok-downloader/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # App header
│   │   ├── DownloadCard.tsx # Video/slideshow card
│   │   └── LoadingSpinner.tsx # Loading state
│   ├── lib/                # Utility libraries
│   │   ├── tiktok.ts       # TikTok API integration
│   │   └── utils.ts        # Helper functions
│   ├── hooks/              # Custom React hooks
│   │   ├── use-toast.ts    # Toast notifications
│   │   └── use-mobile.tsx  # Mobile detection
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main page
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Root component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite configuration
```

---

## 🎨 Features Breakdown

### Video Downloads

```typescript
// Supports multiple download options
- Without Watermark (HD)
- With Watermark
- Audio Only (MP3)
```

### Slideshow Downloads

```typescript
// For TikTok slideshow posts
- Individual image downloads
- All images in grid layout
- One-click download per image
```

### URL Validation

```typescript
// Automatic URL validation
- Checks TikTok URL format
- Provides helpful error messages
- Paste detection and auto-fill
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
# No environment variables required for basic usage
# The app uses public TikTok API endpoints
```

### Customization

You can customize the theme by editing `tailwind.config.ts`:

```typescript
// Custom colors, animations, and more
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Add your custom colors
    }
  }
}
```

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Keep components modular and reusable
- Add comments for complex logic
- Test on multiple devices/browsers

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⚠️ Disclaimer

This tool is for educational purposes only. Please respect TikTok's Terms of Service and content creators' rights. Always:

- Give credit to original creators
- Don't use downloaded content for commercial purposes without permission
- Respect copyright and intellectual property rights
- Use responsibly and ethically

---

## 🌟 Support

If you found this project helpful, please give it a ⭐️!

### Issues & Bugs

Found a bug? [Open an issue](https://github.com/levvweb/tiktok-downloader/issues)

### Questions?

Have questions? Feel free to reach out:
- 📧 Open a [GitHub Discussion](https://github.com/levvweb/tiktok-downloader/discussions)
- 🐛 Report bugs in [Issues](https://github.com/levvweb/tiktok-downloader/issues)

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/levvweb/tiktok-downloader?style=social)
![GitHub forks](https://img.shields.io/github/forks/levvweb/tiktok-downloader?style=social)
![GitHub issues](https://img.shields.io/github/issues/levvweb/tiktok-downloader)
![GitHub license](https://img.shields.io/github/license/levvweb/tiktok-downloader)

---

<div align="center">

**Made with ❤️ by [LevvWeb](https://github.com/levvweb)**

[⬆ Back to Top](#-tiktok-downloader)

</div>
