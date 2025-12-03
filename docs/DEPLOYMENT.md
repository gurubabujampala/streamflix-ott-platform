# StreamFlix - Deployment Guide

## 🚀 Deploying to Netlify (Free)

This guide will help you deploy StreamFlix to Netlify for free.

---

## Prerequisites

- ✅ Git installed
- ✅ GitHub account
- ✅ Code pushed to GitHub repository

---

## Step 1: Prepare for Deployment

### 1.1 Build the Application Locally

Test that the production build works:

```bash
# Build the application
npm run build

# Test the production build
npm run preview
```

Visit `http://localhost:4173` to verify everything works.

### 1.2 Commit Your Changes

```bash
# Stage all files
git add .

# Commit with a message
git commit -m "feat: initial commit - StreamFlix OTT platform"

# Push to GitHub
git push origin main
```

---

## Step 2: Create Netlify Account

1. Go to https://www.netlify.com
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"** (recommended)
4. Authorize Netlify to access your GitHub repositories

---

## Step 3: Deploy from GitHub (Recommended)

### 3.1 Import Your Repository

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify if prompted
4. Select your **`antigravity/ott-platform`** repository

### 3.2 Configure Build Settings

Netlify should auto-detect settings from `netlify.toml`, but verify:

```
Build command:     npm run build
Publish directory: dist
```

### 3.3 Deploy!

1. Click **"Deploy site"**
2. Wait 1-2 minutes for deployment
3. Your site will be live at: `https://[random-name].netlify.app`

### 3.4 Customize Your URL (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `StreamFlix` (if available)
4. Your URL becomes: `https://StreamFlix.netlify.app`

---

## Step 4: Update Configuration Files

After deployment, update these placeholders:

### 4.1 Update README.md

```bash
# Find and replace in README.md
[YOUR-NETLIFY-URL] → https://StreamFlix.netlify.app

# Or edit manually:
nano README.md
```

Replace this section:
```markdown
## 🌐 Live Demo

**URL**: [YOUR-NETLIFY-URL]
Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/[YOUR-SITE-ID]/deploy-status)](https://app.netlify.com/sites/[YOUR-SITE-NAME]/deploys)
```

With:
```markdown
## 🌐 Live Demo

**URL**: https://StreamFlix.netlify.app
Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/StreamFlix/deploys)
```

**To get your Site ID:**
1. Go to Netlify dashboard
2. Select your site
3. Go to **Site settings** → **General**
4. Copy **Site ID** (e.g., `65f4a2b1-3c8d-4e9f-a7b2-1234567890ab`)

### 4.2 Update package.json (Optional)

Add homepage field:

```json
{
  "name": "ott-platform",
  "version": "1.0.0",
  "homepage": "https://StreamFlix.netlify.app",
  ...
}
```

### 4.3 Commit Updates

```bash
git add README.md package.json
git commit -m "docs: update deployment URLs"
git push origin main
```

Netlify will automatically redeploy!

---

## Step 5: Configure Custom Domain (Optional)

### Free Netlify Subdomain

Already included: `https://StreamFlix.netlify.app`

### Custom Domain (e.g., StreamFlix.com)

1. Purchase domain from provider (Namecheap, GoDaddy, etc.)
2. In Netlify: **Site settings** → **Domain management**
3. Click **"Add custom domain"**
4. Enter your domain: `StreamFlix.com`
5. Update DNS records at your domain provider:
   ```
   Type: A Record
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: StreamFlix.netlify.app
   ```
6. Wait for DNS propagation (up to 24 hours)
7. Netlify auto-provisions free SSL certificate

---

## Alternative: Deploy via Netlify CLI

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Deploy

```bash
# Login to Netlify
netlify login

# Build your site
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

### First Deploy

On first deploy, you'll be asked:
- **Create a new site?** → Yes
- **Team:** → Choose your team
- **Site name:** → `StreamFlix` (or leave blank for random)

### Subsequent Deploys

```bash
# Just run
netlify deploy --prod --dir=dist
```

---

## Continuous Deployment (Auto-deploy on Git Push)

Netlify automatically deploys when you push to GitHub:

```bash
# Make changes
# ...

# Commit and push
git add .
git commit -m "feat: add new feature"
git push origin main

# Netlify automatically builds and deploys!
```

### View Deploy Progress

1. Go to Netlify dashboard
2. Click on your site
3. Go to **"Deploys"** tab
4. Watch build progress in real-time

---

## Environment Variables (If Needed)

If you add API keys or secrets:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Add variable"**
3. Add key-value pairs:
   ```
   VITE_API_URL=https://api.example.com
   VITE_API_KEY=your-secret-key
   ```
4. Redeploy site

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Troubleshooting

### Build Fails

**Check build logs:**
1. Go to **Deploys** tab
2. Click failed deploy
3. Review error messages

**Common issues:**

**Issue**: `npm install` fails
```bash
# Solution: Clear cache and retry
# In Netlify: Site settings → Build & deploy → Clear cache and retry deploy
```

**Issue**: React Router 404 errors
```bash
# Solution: Ensure netlify.toml has SPA redirect rule
# (Already included in our netlify.toml)
```

**Issue**: Module not found
```bash
# Solution: Ensure all dependencies are in package.json
npm install <missing-package> --save
git add package.json package-lock.json
git commit -m "fix: add missing dependency"
git push
```

### Site is Slow

**Enable optimizations:**
1. **Asset optimization**: Site settings → Build & deploy → Post processing
   - ✅ Bundle CSS
   - ✅ Minify CSS
   - ✅ Minify JS
   - ✅ Compress images

2. **Enable caching**: Already configured in `netlify.toml`

3. **Use CDN**: Automatic with Netlify

### Images Not Loading

**CORS issues:**
- Ensure image URLs support CORS
- Consider hosting images on Netlify or Cloudinary

**Mixed content warnings:**
- Ensure all resources use HTTPS
- Netlify provides free SSL

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at Netlify URL
- [ ] All pages accessible (Movies, Series, Music, Games)
- [ ] Video player works
- [ ] Images load correctly
- [ ] Routing works (no 404s on refresh)
- [ ] Mobile responsive
- [ ] PWA installable
- [ ] SSL certificate active (https://)
- [ ] Custom domain works (if configured)

---

## Monitoring & Analytics

### Built-in Netlify Analytics (Paid)

- Real-time visitor stats
- Bandwidth usage
- Top pages
- Cost: $9/month per site

### Free Alternatives

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible Analytics:**
- Privacy-friendly alternative
- Simple integration
- Free for open-source projects

---

## Next Steps

1. ✅ **Share your site**: Send URL to friends/colleagues
2. ✅ **Add to portfolio**: Include in your developer portfolio
3. ✅ **Monitor performance**: Use Lighthouse audits
4. ✅ **Gather feedback**: Ask users for improvement suggestions
5. ✅ **Iterate**: Add new features based on feedback

---

## Netlify Free Tier Limits

| Feature | Free Tier | Notes |
|---------|-----------|-------|
| Bandwidth | 100 GB/month | Sufficient for small-medium sites |
| Build Minutes | 300 min/month | ~10 deploys/day |
| Sites | Unlimited | Host multiple projects |
| Team Members | 1 | You only |
| SSL | Free | Auto-provisioned |
| Deploy Previews | Unlimited | For testing |

**Upgrade needed if:**
- Traffic exceeds 100GB/month
- Need team collaboration
- Want analytics
- Need faster builds

---

## Helpful Resources

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Community**: https://answers.netlify.com
- **Status Page**: https://www.netlifystatus.com
- **React Deployment Guide**: https://vitejs.dev/guide/static-deploy.html#netlify

---

## Support

Need help?
- **Netlify Support**: https://www.netlify.com/support/
- **Community Forums**: https://answers.netlify.com
- **GitHub Issues**: Create issue in your repository

---

**Deployment Guide Version**: 1.0.0
**Last Updated**: December 3, 2025
**Estimated Deployment Time**: 5-10 minutes
