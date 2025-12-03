# StreamFlix - Netlify Placeholder Reference

## 📝 Placeholders You Need to Update After Deployment

After deploying to Netlify, you'll need to update these placeholders with your actual values.

---

## 1️⃣ Netlify Site Information

### Where to Find These Values

**After deploying to Netlify:**

1. **Site URL** 
   - Location: Netlify Dashboard → Top of page
   - Format: `https://random-name-12345.netlify.app`
   - Can be customized in Settings

2. **Site Name**
   - Location: Site settings → General → Site details
   - Format: `random-name-12345` (subdomain part)
   - Click "Change site name" to customize

3. **Site ID**
   - Location: Site settings → General → Site information
   - Format: Long UUID like `65f4a2b1-3c8d-4e9f-a7b2-1234567890ab`
   - Copy the full ID

---

## 2️⃣ Files to Update

### File: `README.md`

**Line 5-7** (Live Demo section):

```markdown
# BEFORE (with placeholders):
**URL**: [YOUR-NETLIFY-URL]  
**Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/[YOUR-SITE-ID]/deploy-status)](https://app.netlify.com/sites/[YOUR-SITE-NAME]/deploys)

# AFTER (with your values):
**URL**: https://StreamFlix.netlify.app  
**Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/65f4a2b1-3c8d-4e9f-a7b2-1234567890ab/deploy-status)](https://app.netlify.com/sites/StreamFlix/deploys)
```

### File: `package.json` (Optional)

**Add homepage field:**

```json
{
  "name": "ott-platform",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://StreamFlix.netlify.app",  // ← Add this line
  "scripts": {
    ...
  }
}
```

---

## 3️⃣ Example Values

Here's a complete example if your site name is `StreamFlix`:

| Placeholder | Example Value |
|-------------|---------------|
| `[YOUR-NETLIFY-URL]` | `https://StreamFlix.netlify.app` |
| `[YOUR-SITE-NAME]` | `StreamFlix` |
| `[YOUR-SITE-ID]` | `65f4a2b1-3c8d-4e9f-a7b2-1234567890ab` |

---

## 4️⃣ Quick Find & Replace

### Using Command Line

```bash
# Navigate to project
cd /Users/gurubabujampala/workspace/antigravity/ott-platform

# Replace URL (update with YOUR actual URL)
sed -i '' 's|\[YOUR-NETLIFY-URL\]|https://StreamFlix.netlify.app|g' README.md

# Replace Site Name (update with YOUR actual site name)
sed -i '' 's|\[YOUR-SITE-NAME\]|StreamFlix|g' README.md

# Replace Site ID (update with YOUR actual site ID)
sed -i '' 's|\[YOUR-SITE-ID\]|65f4a2b1-3c8d-4e9f-a7b2-1234567890ab|g' README.md

# Verify changes
cat README.md | grep -A 2 "Live Demo"

# Commit
git add README.md
git commit -m "docs: update Netlify deployment URLs"
git push origin main
```

### Using Editor

1. Open `README.md` in your editor
2. Find each placeholder (use Cmd+F / Ctrl+F)
3. Replace with your actual values
4. Save file
5. Commit and push

---

## 5️⃣ Verification Checklist

After updating, verify:

- [ ] README.md shows your actual URL
- [ ] Netlify badge displays (shows deploy status)
- [ ] Badge links to your Netlify dashboard
- [ ] No `[YOUR-*]` placeholders remain

### Check for Remaining Placeholders

```bash
# Search for any remaining placeholders
grep -r "\[YOUR-" README.md package.json

# Should return no results if all updated
```

---

## 6️⃣ Optional: Custom Domain

If you want a custom domain (e.g., `StreamFlix.com`):

1. **Purchase domain** from registrar (Namecheap, GoDaddy, etc.)

2. **Add to Netlify:**
   - Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain

3. **Update DNS records** at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: StreamFlix.netlify.app
   ```

4. **Update placeholders** with custom domain:
   ```markdown
   **URL**: https://StreamFlix.com
   ```

5. **SSL Certificate:** Provisioned automatically by Netlify

---

## 7️⃣ Environment Variables (If Needed)

If you add API keys later:

**In Netlify Dashboard:**
1. Site settings → Build & deploy → Environment
2. Click "Add variable"
3. Add: `VITE_API_KEY=your-secret-key`

**In Code:**
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

**DO NOT commit `.env` files to Git!** (Already in .gitignore)

---

## 8️⃣ Quick Reference URLs

After deployment, bookmark these:

```
# Your live site
https://[YOUR-SITE-NAME].netlify.app

# Netlify dashboard
https://app.netlify.com/sites/[YOUR-SITE-NAME]/overview

# Deploy logs
https://app.netlify.com/sites/[YOUR-SITE-NAME]/deploys

# Site settings
https://app.netlify.com/sites/[YOUR-SITE-NAME]/settings
```

---

## 9️⃣ Troubleshooting

### Can't find Site ID?

1. Go to Netlify dashboard
2. Click your site
3. Click "Site settings"
4. Scroll to "Site information"
5. Copy "API ID" (this is your Site ID)

### Badge not showing?

- Verify Site ID is correct
- Check Site Name matches
- Badge may take a few minutes to appear
- Ensure deploy has completed

### Wrong URL?

1. Update in Netlify: Site settings → Change site name
2. Update placeholders in code
3. Commit and push
4. New URL will work immediately

---

## 🎯 Complete Update Command

**After you have your Netlify values, run this:**

```bash
# 1. Set your variables
export SITE_URL="https://StreamFlix.netlify.app"
export SITE_NAME="StreamFlix"
export SITE_ID="your-actual-site-id-here"

# 2. Update README
sed -i '' "s|\[YOUR-NETLIFY-URL\]|$SITE_URL|g" README.md
sed -i '' "s|\[YOUR-SITE-NAME\]|$SITE_NAME|g" README.md
sed -i '' "s|\[YOUR-SITE-ID\]|$SITE_ID|g" README.md

# 3. Update package.json (optional)
# Add "homepage": "URL" manually

# 4. Commit
git add README.md package.json
git commit -m "docs: update Netlify URLs"
git push origin main
```

---

**That's it!** Your site will be fully configured and ready to share. 🎉
