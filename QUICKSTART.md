# ⚡ Quick Start Guide - TGA Website

## 🎯 Your Website is Ready!

### Step 1: View the Website
```bash
# The server is already running!
# Just open this URL in your browser:
```
**👉 http://localhost:5173/**

---

## 🛠️ Basic Commands

### Development
```bash
npm run dev          # Start development server (already running!)
```

### Build for Production
```bash
npm run build        # Creates optimized build in 'dist' folder
npm run preview      # Preview the production build locally
```

---

## 📝 Quick Edits

### Change Text Content
**File:** `src/components/Hero.jsx`
```javascript
// Line ~41: Change the main heading
<div className="hero-title gradient-text text-shimmer">
  Technology & Innovation  // ← Edit this
</div>

// Line ~46: Change description
<p className="hero-description...">
  Your new description here  // ← Edit this
</p>
```

### Change Email Address
**File:** `src/components/Contact.jsx`
```javascript
// Line ~8
const email = 'your.new.email@example.com'; // ← Edit this
```

### Change Colors
**File:** `tailwind.config.js`
```javascript
// Line ~9-18: Edit theme colors
gold: {
  DEFAULT: '#D4AF37',    // ← Your custom gold
  light: '#FFD700',      // ← Lighter shade
}
```

### Add/Remove Programs
**File:** `src/components/Programs.jsx`
```javascript
// Line ~7-30: Edit the programs array
const programs = [
  {
    title: 'Your Program Name',
    description: 'Program description...',
    icon: '🎯',  // Any emoji
    color: 'from-blue-500 to-cyan-500',  // Gradient
    tags: ['Tag1', 'Tag2', 'Tag3'],
  },
  // Add more programs here...
];
```

---

## 🎨 Customization Guide

### Logo
1. Replace `public/tga.jpg` with your logo
2. Keep filename as `tga.jpg` OR
3. Update all references in components

### Fonts
**File:** `src/index.css` (Line 1)
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

### Animations Speed
**File:** `src/components/LoadingScreen.jsx`
```javascript
// Line ~10: Change loading duration
setProgress(prev => prev + 2);  // ← Increase number = faster
```

---

## 📱 Test Mobile View

### In Browser:
1. Press **F12** (Chrome DevTools)
2. Click **Toggle Device Toolbar** (Ctrl+Shift+M)
3. Select device (iPhone, iPad, etc.)

### Or Use Real Device:
1. Get your local IP:
   ```bash
   ipconfig  # Windows
   # Look for "IPv4 Address"
   ```
2. Start server with `--host`:
   ```bash
   npm run dev -- --host
   ```
3. Visit `http://YOUR_IP:5173` on phone

---

## 🚀 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Follow prompts → Done!

### Option 2: Netlify
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

### Option 3: GitHub Pages
```bash
npm install -D gh-pages
# (See DEPLOYMENT.md for full instructions)
```

---

## 🐛 Troubleshooting

### Server Won't Start
```bash
# Kill any process on port 5173
npx kill-port 5173

# Restart
npm run dev
```

### Missing Dependencies
```bash
npm install
```

### Broken Animations
```bash
# Clear cache and restart
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check Node version (need v16+)
node --version

# Update Node if needed
```

---

## 📚 File Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx   // ← Logo animation
│   ├── Navbar.jsx          // ← Top navigation
│   ├── Hero.jsx            // ← Main section
│   ├── About.jsx           // ← Mission/Vision
│   ├── Programs.jsx        // ← Courses
│   ├── Services.jsx        // ← Services offered
│   ├── Contact.jsx         // ← Email & socials
│   └── Footer.jsx          // ← Bottom section
├── App.jsx                 // ← Main app
├── main.jsx                // ← Entry point
└── index.css               // ← Global styles
```

---

## 💡 Pro Tips

### 1. Hot Reload
Save any file and see changes **instantly** in browser!

### 2. Component Isolation
Each section is independent - edit one without breaking others

### 3. Mobile-First
All designs are mobile-optimized by default

### 4. Performance
- Images auto-optimized
- CSS auto-purged in production
- Code automatically split

---

## 📞 Need Help?

### View Documentation:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deploy anywhere
- `PREVIEW.md` - See what's included

### Issues?
Email: **tga.tetra.guide.avenza@gmail.com**

---

## ✅ Checklist

- [x] ✨ React website built
- [x] 🎨 Premium animations added
- [x] 📱 Mobile responsive
- [x] ⚡ Fast loading
- [x] 🎯 SEO optimized
- [ ] 👀 View at localhost:5173
- [ ] ✏️ Customize content
- [ ] 🚀 Deploy online
- [ ] 🌐 Share with world!

---

**Made for TGA - Tetra Guide Avenza** 🚀

Happy coding! Your premium website is ready to impress. 🎉
