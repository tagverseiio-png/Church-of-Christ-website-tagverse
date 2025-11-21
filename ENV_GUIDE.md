# Environment Variables Guide

## Overview

Firebase credentials are stored in environment variables for security and flexibility.

## Files

### `.env.local` (Active Configuration)
- Contains your actual Firebase credentials
- **Already configured** with your project
- **Never commit to git** (in `.gitignore`)
- Used in development and production

### `.env.example` (Template)
- Template file with placeholder values
- Safe to commit to git
- Copy to `.env.local` when setting up new environment

## Environment Variables

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Getting Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Click gear icon → Project settings
4. Scroll to "Your apps" section
5. Select your web app or create one
6. Copy the config values

## Usage in Code

Environment variables are accessed using `import.meta.env`:

```typescript
// src/lib/firebase.ts
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Important Notes

### Vite Prefix
- All environment variables **must** start with `VITE_`
- This is a Vite security feature
- Variables without `VITE_` prefix won't be exposed to client

### Restart Required
- After changing `.env.local`, restart dev server
- Run `npm run dev` again

### Git Security
- `.env.local` is in `.gitignore`
- Never commit actual credentials
- Only commit `.env.example` template

### Client-Side Exposure
- These variables are exposed to client-side code
- Firebase credentials are safe for client-side use
- Firestore rules protect your data

## Setup for New Environment

### Development
1. Copy `.env.example` to `.env.local`
2. Fill in Firebase credentials
3. Run `npm run dev`

### Production (Netlify, Vercel, etc.)
1. Go to hosting platform settings
2. Add environment variables:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
3. Deploy

## Troubleshooting

### Variables not working
**Problem**: Firebase not connecting

**Solutions**:
- Check `.env.local` exists in project root
- Verify variable names start with `VITE_`
- Restart dev server
- Check for typos in variable names

### Firebase errors
**Problem**: Firebase initialization fails

**Solutions**:
- Verify all 6 variables are set
- Check credentials are correct
- Copy from Firebase Console
- Remove quotes around values

### Production build issues
**Problem**: Works in dev but not production

**Solutions**:
- Set environment variables in hosting platform
- Use same variable names
- Rebuild and redeploy

## Security Best Practices

1. ✅ Never commit `.env.local`
2. ✅ Use `.env.example` as template
3. ✅ Set Firestore security rules
4. ✅ Enable Firebase Authentication
5. ✅ Regular security audits
6. ✅ Monitor Firebase usage

## Example: Changing Firebase Project

If you need to switch to a different Firebase project:

1. Get new credentials from Firebase Console
2. Update `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=new_api_key
   VITE_FIREBASE_AUTH_DOMAIN=new_auth_domain
   VITE_FIREBASE_PROJECT_ID=new_project_id
   VITE_FIREBASE_STORAGE_BUCKET=new_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=new_sender_id
   VITE_FIREBASE_APP_ID=new_app_id
   ```
3. Restart dev server
4. Update Firestore rules in new project
5. Create admin user in new project

## Verification

To verify environment variables are loaded:

```typescript
// Add temporarily to src/lib/firebase.ts
console.log('Firebase Config:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? '✓' : '✗',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? '✓' : '✗',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✓' : '✗',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? '✓' : '✗',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? '✓' : '✗',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ? '✓' : '✗',
});
```

All should show ✓ if configured correctly.

## Summary

- ✅ Credentials in `.env.local` (not committed)
- ✅ Template in `.env.example` (committed)
- ✅ All variables start with `VITE_`
- ✅ Restart dev server after changes
- ✅ Set in hosting platform for production
- ✅ Firebase credentials safe for client-side
