# GitHub & Netlify Deployment Checklist

## ✅ Pre-Deployment Checklist

Complete these steps before pushing to GitHub:

### 1. Code Quality
- [ ] All features working locally
- [ ] No console errors
- [ ] Production build successful (`npm run build`)
- [ ] Production preview tested (`npm run preview`)

### 2. Configuration Files
- [ ] `.gitignore` created and verified
- [ ] `netlify.toml` configured
- [ ] `package.json` has correct dependencies
- [ ] No sensitive data in code

### 3. Documentation
- [ ] README.md updated with placeholders
- [ ] All documentation files created
- [ ] Links verified in documentation

### 4. Git Repository
- [ ] Git initialized (`git init`)
- [ ] All files staged (`git add .`)
- [ ] Initial commit ready

---

## 🚀 Deployment Steps

Follow these steps in order:

### Step 1: Initialize Git (If not done)

```bash
cd /Users/gurubabujampala/workspace/antigravity/ott-platform

# Initialize Git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: initial commit - StreamFlix OTT platform v1.0.0"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `StreamFlix-ott-platform` (or your choice)
3. Description: "🎬 StreamFlix - Netflix-inspired OTT platform built with React & Vite"
4. Public or Private: Choose based on preference
5. DON'T initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Push to GitHub

Copy the commands from GitHub (will look like this):

```bash
# Add remote
git remote add origin https://github.com/YOUR-USERNAME/StreamFlix-ott-platform.git

# Rename branch to main (if needed)
git branch -M main

# Push code
git push -u origin main
```

### Step 4: Deploy to Netlify

**Option A: Via Web Interface (Recommended)**

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your repository: `StreamFlix-ott-platform`
5. Netlify auto-detects settings from netlify.toml:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Wait 1-2 minutes for deployment
8. Note your site URL: `https://[random-name].netlify.app`

**Option B: Via CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Step 5: Customize Site Name

1. In Netlify dashboard, click "Site settings"
2. Under "Site information", click "Change site name"
3. Enter: `StreamFlix` (or your preferred name)
4. Your URL becomes: `https://StreamFlix.netlify.app`

### Step 6: Update Documentation with Real URLs

**Get your information:**
- **Site URL**: `https://StreamFlix.netlify.app`
- **Site Name**: `StreamFlix`
- **Site ID**: From Netlify → Site settings → General (copy the ID)

**Update README.md:**

Find these placeholders and replace:
```markdown
[YOUR-NETLIFY-URL] → https://StreamFlix.netlify.app
[YOUR-SITE-ID] → your-actual-site-id-here
[YOUR-SITE-NAME] → StreamFlix
```

**Update package.json (optional):**
```json
{
  "homepage": "https://StreamFlix.netlify.app"
}
```

### Step 7: Commit and Push Updates

```bash
# Stage updated files
git add README.md package.json

# Commit
git commit -m "docs: update deployment URLs with Netlify info"

# Push
git push origin main
```

Netlify will automatically detect the push and redeploy!

---

## 📋 Post-Deployment Verification

### Test Your Live Site

Visit your Netlify URL and verify:

1. **Homepage**
   - [ ] Loads without errors
   - [ ] Hero section visible
   - [ ] Featured movies display
   - [ ] Featured series display

2. **Navigation**
   - [ ] Movies page works
   - [ ] Web Series page works
   - [ ] Movie Games page works
   - [ ] Music page works
   - [ ] All genre filters work

3. **Video Player**
   - [ ] Click a movie → player opens
   - [ ] Video plays automatically
   - [ ] Close button works
   - [ ] ESC key works

4. **Images**
   - [ ] All posters load
   - [ ] No broken images
   - [ ] Images are responsive

5. **Mobile**
   - [ ] Site works on mobile browser
   - [ ] PWA installable
   - [ ] Touch controls work

6. **Performance**
   - [ ] Lighthouse score > 90
   - [ ] No console errors
   - [ ] Fast page load

### Enable Netlify Features

1. **Asset Optimization**
   - Go to: Site settings → Build & deploy → Post processing
   - Enable: Bundle CSS, Minify CSS, Minify JS, Compress images

2. **Branch Deploys** (Optional)
   - Automatic deploy previews for branches
   - Already configured in netlify.toml

3. **Deploy Notifications** (Optional)
   - Get email/Slack notifications on deploy
   - Go to: Site settings → Build & deploy → Deploy notifications

---

## 🔄 Continuous Deployment

After initial setup, Netlify automatically deploys on every push:

```bash
# Make changes to code
nano src/pages/Home.jsx

# Commit and push
git add .
git commit -m "feat: add new homepage section"
git push origin main

# Netlify automatically:
# 1. Detects the push
# 2. Runs npm install
# 3. Runs npm run build
# 4. Deploys to production
```

---

## 🎯 Quick Reference

### Netlify Dashboard URLs

After setup, bookmark these:

- **Site Overview**: `https://app.netlify.com/sites/[YOUR-SITE-NAME]/overview`
- **Deploys**: `https://app.netlify.com/sites/[YOUR-SITE-NAME]/deploys`
- **Settings**: `https://app.netlify.com/sites/[YOUR-SITE-NAME]/settings`

### Useful Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# Create new branch
git checkout -b feature/new-feature

# View Netlify site status
netlify status

# Open Netlify dashboard
netlify open

# View deploy logs
netlify watch
```

---

## 🐛 Troubleshooting

### Build Fails on Netlify

1. Check build logs in Netlify dashboard
2. Ensure `package.json` lists all dependencies
3. Clear cache and retry: Site settings → Clear cache

### 404 Errors on Page Refresh

- ✅ Already fixed with redirect rule in `netlify.toml`

### Images Not Loading

- Check image URLs are valid
- Ensure no CORS issues
- Consider hosting images on Netlify

### Slow Site

- Enable asset optimization (see above)
- Optimize images before upload
- Use CDN for large files

---

## 📞 Getting Help

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Community**: https://answers.netlify.com
- **GitHub Issues**: Create issue in your repository
- **Email Support**: team@netlify.com (for urgent issues)

---

## 🎉 Success!

Once deployed, your site is:
- ✅ Live on the internet
- ✅ Auto-deployed on every push
- ✅ Served over HTTPS
- ✅ Globally distributed via CDN
- ✅ Free (Netlify free tier)

**Share your site:**
- Add to your resume/portfolio
- Share on social media
- Send to friends/family
- Use in job applications

---

**Checklist Version**: 1.0.0
**Created**: December 3, 2025
