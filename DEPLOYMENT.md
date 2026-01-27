# 🚀 Deployment Guide for TGA Website

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Steps:**
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repo or drag & drop the project folder
3. Vercel auto-detects Vite and deploys
4. Your site is live in seconds!

**Custom Domain:** Add in Vercel dashboard → Settings → Domains

---

### 2. Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to Netlify
```

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `dist` folder
3. Site is live!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

### 3. GitHub Pages

**Step 1:** Install gh-pages
```bash
npm install --save-dev gh-pages
```

**Step 2:** Update `package.json`
```json
{
  "homepage": "https://yourusername.github.io/tga-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Step 3:** Update `vite.config.js`
```javascript
export default {
  base: '/tga-react/', // Your repo name
  ...
}
```

**Step 4:** Deploy
```bash
npm run deploy
```

---

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

**Configuration:**
- Public directory: `dist`
- Single-page app: Yes
- Rewrites: Yes

---

### 5. AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

---

### 6. Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy!

---

## Build Configuration

### Environment Variables
Create `.env` file if needed:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=TGA
```

### Build Command
```bash
npm run build
```

### Preview Build Locally
```bash
npm run preview
```

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   ```bash
   # Use WebP format for better compression
   npm install -D vite-plugin-imagemin
   ```

2. **Enable Gzip/Brotli**
   - Most hosting providers enable this automatically
   - Reduces bundle size by 70%+

3. **Check Bundle Size**
   ```bash
   npm run build
   # Review dist/ folder size
   ```

4. **Lighthouse Score**
   - Run audit in Chrome DevTools
   - Aim for 90+ in all categories

---

## Custom Domain Setup

### Vercel
1. Dashboard → Settings → Domains
2. Add domain and follow DNS instructions

### Netlify
1. Site settings → Domain management
2. Add custom domain

### GitHub Pages
1. Settings → Pages → Custom domain
2. Add CNAME record to your DNS

---

## SSL/HTTPS

All recommended platforms provide **FREE SSL certificates** automatically:
- ✅ Vercel
- ✅ Netlify
- ✅ Firebase
- ✅ Cloudflare
- ✅ AWS Amplify

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Post-Deployment Checklist

✅ **Test all sections scroll smoothly**
✅ **Check mobile responsiveness**
✅ **Verify email links work**
✅ **Test social media links**
✅ **Check loading animation**
✅ **Verify all animations trigger**
✅ **Test on different browsers**
✅ **Check Lighthouse score**
✅ **Submit to Google Search Console**
✅ **Add Google Analytics (optional)**

---

## Monitoring & Analytics

### Google Analytics
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `App.jsx`:
```javascript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourComponents />
      <Analytics />
    </>
  );
}
```

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check `base` in `vite.config.js`

### Issue: 404 on refresh
**Solution:** Configure SPA rewrites on your host

### Issue: Slow loading
**Solution:** Enable lazy loading and code splitting

### Issue: Images not loading
**Solution:** Check paths are relative and in `public/` folder

---

## Support

For deployment issues:
- **Email:** tga.tetra.guide.avenza@gmail.com
- **Documentation:** Check hosting provider docs

Happy deploying! 🚀
