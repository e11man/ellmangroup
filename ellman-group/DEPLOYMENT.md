# Deployment Guide - Ellman Group Website

## 🚀 Deploy to Vercel

This guide will help you deploy the Ellman Group website to Vercel in just a few minutes.

### Prerequisites
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Step 1: Prepare Your Repository

1. Make sure all your changes are committed and pushed to your Git repository
2. Ensure the following files are in your repository:
   - `package.json` ✅
   - `next.config.ts` ✅
   - `tailwind.config.ts` ✅
   - `vercel.json` ✅
   - All source files in `src/` directory ✅

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   cd ellman-group
   vercel
   ```

### Step 3: Configuration

Vercel will automatically:
- ✅ Install dependencies (`npm install`)
- ✅ Build the project (`npm run build`)
- ✅ Deploy to a production URL
- ✅ Set up automatic deployments on future commits

### Step 4: Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `ellmangroup.com`)
4. Follow the DNS configuration instructions

### Step 5: Environment Variables (If Needed)

If you need to add environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add any required variables

## 🎯 What You'll Get

After deployment, you'll have:
- ✅ A live, professional website
- ✅ Automatic HTTPS
- ✅ Global CDN for fast loading
- ✅ Automatic deployments on every commit
- ✅ Preview deployments for pull requests
- ✅ Analytics and performance monitoring

## 🔧 Troubleshooting

### Build Errors
If you encounter build errors:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify all imports are correct
4. Make sure all components are properly exported

### Common Issues
- **404 Errors**: Check that all routes are properly defined
- **Styling Issues**: Ensure Tailwind CSS is properly configured
- **Performance**: Check Lighthouse scores in Vercel analytics

## 📊 Performance Expectations

Your deployed site should achieve:
- ⚡ 90+ Lighthouse Performance Score
- 🎨 90+ Lighthouse Accessibility Score
- 🔍 90+ Lighthouse SEO Score
- 📱 Perfect mobile responsiveness

## 🎉 Success!

Once deployed, your website will be live and ready to convert visitors into clients!

---

**Need Help?** Check the [Vercel Documentation](https://vercel.com/docs) or contact support.