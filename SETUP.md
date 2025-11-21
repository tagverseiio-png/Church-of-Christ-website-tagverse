# Setup Guide

## Prerequisites

- Node.js & npm installed
- Firebase account

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Environment Variables

Your Firebase credentials are stored in `.env.local` file. This file is already configured with your Firebase project credentials.

**Important**: Never commit `.env.local` to git! It's already in `.gitignore`.

If you need to change Firebase project:
1. Copy `.env.example` to `.env.local`
2. Get credentials from [Firebase Console](https://console.firebase.google.com/project/church-of-christ-baaf1/settings/general)
3. Update the values in `.env.local`

## Step 3: Configure Firebase

Go to [Firebase Console](https://console.firebase.google.com/project/church-of-christ-baaf1)

### Enable Authentication
1. Go to **Authentication** → **Sign-in method**
2. Enable **Email/Password**
3. Go to **Authentication** → **Users**
4. Click **Add user**
5. Create admin credentials (save them securely!)

### Enable Firestore
1. Go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode**
4. Select your preferred location

### Set Firestore Rules
1. Go to **Firestore Database** → **Rules**
2. Copy and paste these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Gallery collection - public read, admin write
    match /gallery/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Contacts collection - admin only
    match /contacts/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

### Create Firestore Index
When you first load the gallery, Firestore will need an index for sorting by `createdAt`:

1. Visit the gallery page after setup
2. Check browser console for index error
3. Click the provided link to auto-create the index
4. Wait 1-2 minutes for index to build

## Step 4: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:8080

## Step 5: Access Admin Panel

1. Go to http://localhost:8080/admin/login
2. Login with the admin credentials you created
3. Upload images via Gallery tab
4. View contact messages via Messages tab

## URLs

- **Home**: http://localhost:8080/
- **Gallery**: http://localhost:8080/gallery
- **Contact**: http://localhost:8080/contact
- **Admin Login**: http://localhost:8080/admin/login
- **Admin Dashboard**: http://localhost:8080/admin/dashboard

## Features

- ✅ Gallery with pagination (6 images per page)
- ✅ Latest images shown first
- ✅ Contact form (saves to Firestore)
- ✅ Admin panel (upload/delete images, view messages)
- ✅ WhatsApp button (+91 9052402299)
- ✅ Scroll to top button
- ✅ Image compression (max 300KB)

## Troubleshooting

### Can't login to admin
- Verify admin user exists in Firebase Authentication
- Check Firebase Authentication is enabled
- Check browser console for errors

### Images not showing
- Check Firestore is enabled
- Verify Firestore rules are set
- Check browser console for errors
- Verify Firestore index is created

### Contact form not working
- Check Firestore is enabled
- Verify Firestore rules are set
- Check browser console for errors

### Environment variables not working
- Make sure `.env.local` file exists
- Restart dev server after changing `.env.local`
- Check that variable names start with `VITE_`

## Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables for Production

When deploying to production (Netlify, Vercel, etc.):
1. Add environment variables in hosting platform settings
2. Use the same variable names from `.env.local`
3. Never expose Firebase credentials in client code (they're safe for client-side use)

## Security Notes

1. `.env.local` is in `.gitignore` - never commit it
2. Firebase credentials are safe for client-side use
3. Firestore rules protect your data
4. Admin routes require authentication
5. Regular backups recommended

## Support

For issues:
1. Check browser console (F12)
2. Check Firebase Console for errors
3. Verify all setup steps completed
4. Review Firestore rules and indexes
