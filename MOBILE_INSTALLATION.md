# 📱 Mobile App Installation Guide

This guide will help you install the StreamFlix OTT Platform on your mobile device.

## Table of Contents
- [iOS Installation](#ios-installation)
- [Android Installation](#android-installation)
- [PWA Features](#pwa-features)
- [Troubleshooting](#troubleshooting)

---

## iOS Installation

### Prerequisites
- iOS 11.3 or higher
- Safari browser
- Internet connection

### Step-by-Step Guide

#### 1. Access the Website
Open **Safari** browser on your iPhone or iPad and navigate to your StreamFlix website URL.

> ⚠️ **Important**: You must use Safari browser. Chrome or other browsers won't allow PWA installation on iOS.

#### 2. Open Share Menu
Tap the **Share** button at the bottom of Safari (square with arrow pointing up).

#### 3. Add to Home Screen
- Scroll down in the share menu
- Tap **"Add to Home Screen"**
- You'll see a preview of the app icon and name

#### 4. Customize (Optional)
- Edit the name if you want (default: "StreamFlix")
- Tap **"Add"** in the top right corner

#### 5. Launch the App
- The StreamFlix icon will appear on your home screen
- Tap it to launch the app in full-screen mode
- It will behave like a native app (no browser chrome)

### iOS App Features
✅ Full-screen experience (no Safari toolbar)  
✅ App icon on home screen  
✅ Works offline (cached content)  
✅ Fast loading from home screen  
✅ Native-like navigation  

---

## Android Installation

### Prerequisites
- Android 5.0 (Lollipop) or higher
- Chrome browser (recommended) or Samsung Internet
- Internet connection

### Step-by-Step Guide

#### Method 1: Chrome Browser (Recommended)

1. **Open Chrome Browser**
   - Launch Google Chrome on your Android device
   - Navigate to your StreamFlix website URL

2. **Install Prompt**
   - Chrome will show a banner at the bottom: "Add StreamFlix to Home screen"
   - Tap **"Add"** or **"Install"**
   - Confirm by tapping **"Install"** again

3. **Alternative Method (if no prompt appears)**
   - Tap the **menu** (three dots) in the top right
   - Select **"Add to Home Screen"** or **"Install App"**
   - Tap **"Add"** to confirm

4. **Launch the App**
   - Find the StreamFlix icon in your app drawer
   - Tap to launch in standalone mode

#### Method 2: Samsung Internet Browser

1. Open **Samsung Internet Browser**
2. Navigate to your StreamFlix website
3. Tap the **menu** (three lines)
4. Select **"Add page to"**
5. Choose **"Home screen"**
6. Confirm installation

### Android App Features
✅ Standalone app window  
✅ App icon in app drawer and home screen  
✅ Recent apps switcher integration  
✅ Splash screen on launch  
✅ Offline support  
✅ Background sync (for updates)  

---

## PWA Features

### What is a PWA?
A Progressive Web App (PWA) is a web application that works like a native mobile app without requiring app store installation.

### StreamFlix PWA Benefits

#### 🚀 Performance
- Fast loading times
- Smooth animations
- Quick navigation between sections

#### 📱 Native Experience
- Full-screen display
- Home screen icon
- App-like interface
- No browser address bar

#### 💾 Offline Support
- Cached content loads without internet
- Browse previously visited pages offline
- Automatic updates when online

#### 🔄 Always Up-to-Date
- No manual updates required
- Automatically gets latest features
- Seamless update process

#### 🔒 Secure
- HTTPS required
- Secure data transmission
- No app store review delays for updates

---

## Troubleshooting

### iOS Issues

#### "Add to Home Screen" option is missing
**Solution**: Ensure you're using Safari browser, not Chrome or Firefox.

#### App doesn't open in full screen
**Cause**: Opened from browser bookmark instead of home screen icon  
**Solution**: Always launch from the home screen icon, not Safari bookmarks.

#### Website not loading offline
**Solution**: Visit all sections while online first to cache content.

### Android Issues

#### No installation prompt appears
**Solutions**:
1. Ensure you're using HTTPS (not HTTP)
2. Manually add via Chrome menu → "Add to Home Screen"
3. Update Chrome to the latest version
4. Check that you have enough storage space

#### App keeps opening in browser
**Solution**: 
1. Uninstall the current PWA from home screen
2. Clear Chrome cache
3. Reinstall following the steps above

#### Icon doesn't appear on home screen
**Solution**:
1. Check app drawer (swipe up from home screen)
2. Restart your device
3. Reinstall the app

---

## System Requirements

### Minimum Requirements

#### iOS
- iOS 11.3 or later
- Safari 11.1 or later
- 50 MB free storage

#### Android
- Android 5.0 (Lollipop) or later
- Chrome 40+ or Samsung Internet 4.0+
- 50 MB free storage

### Recommended Requirements

#### iOS
- iOS 15 or later
- 100 MB free storage
- WiFi connection for initial install

#### Android
- Android 10 or later
- Chrome 90+
- 100 MB free storage
- WiFi connection for initial install

---

## Uninstalling the App

### iOS
1. Long-press the StreamFlix icon on home screen
2. Tap "Remove App"
3. Select "Delete App"
4. Confirm deletion

### Android
1. Long-press the StreamFlix icon
2. Drag to "Uninstall" or tap app info
3. Select "Uninstall"
4. Confirm deletion

---

## Advanced: Converting to Native Apps

If you need native apps for app stores, you have several options:

### Option 1: Capacitor (Recommended)

Capacitor allows you to wrap your web app in a native container:

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add ios
npx cap add android

# Build and sync
npm run build
npx cap sync

# Open in native IDEs
npx cap open ios      # Requires Xcode
npx cap open android  # Requires Android Studio
```

### Option 2: Ionic

Similar to Capacitor but with additional UI components:

```bash
npm install -g @ionic/cli
ionic capacitor add ios
ionic capacitor add android
```

### Option 3: React Native

Requires rebuilding the app from scratch using React Native, but provides the best native performance.

---

## FAQ

**Q: Is this a real mobile app?**  
A: It's a Progressive Web App (PWA) that works like a native app but runs in a browser engine.

**Q: Do I need to download it from App Store or Play Store?**  
A: No! Install directly from your website. No app store needed.

**Q: Will it work offline?**  
A: Yes, previously visited pages will work offline.

**Q: How much storage does it use?**  
A: Approximately 30-50 MB depending on cached content.

**Q: Can I receive notifications?**  
A: Currently no, but this can be added with Web Push Notifications.

**Q: Is it secure?**  
A: Yes, it uses HTTPS and follows web security best practices.

**Q: Will it drain my battery?**  
A: No more than browsing a website. PWAs are energy-efficient.

---

## Need Help?

If you encounter any issues not covered in this guide:

1. Check your internet connection
2. Update your browser to the latest version
3. Clear browser cache and try again
4. Contact support with:
   - Device model
   - OS version
   - Browser version
   - Screenshot of the error

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Compatible**: iOS 11.3+, Android 5.0+
