# 🚀 Deploy Your Portfolio to GitHub Pages

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"**
3. **Repository name**: `your-username.github.io` (replace with your GitHub username)
   - Example: `john-doe.github.io`
4. **Set to Public** (required for free GitHub Pages)
5. **Don't** initialize with README
6. **Click "Create repository"**

## Step 2: Push Your Code to GitHub

### Initialize Git and Push (Run these commands in your terminal):

```bash
# Add Homebrew to PATH
export PATH="/opt/homebrew/bin:$PATH"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages (Automatic Deployment)

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Source**: Select "GitHub Actions"
5. **Click "Save"**

The GitHub Actions workflow will automatically:
- Build your project
- Deploy to GitHub Pages
- Update your site on every push to main branch

## Step 4: Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
export PATH="/opt/homebrew/bin:$PATH"
npm install

# Deploy using the script
./deploy.sh

# Or use npm script
npm run deploy
```

## Step 5: Access Your Portfolio

Your portfolio will be available at:
**https://YOUR-USERNAME.github.io**

Example: `https://john-doe.github.io`

## 🎯 **Important Notes:**

- **First deployment** may take 5-10 minutes to appear
- **Subsequent updates** typically appear within 1-2 minutes
- **Repository must be public** for free GitHub Pages
- **Custom domains** can be added later in Settings > Pages

## 🔧 **Troubleshooting:**

### If deployment fails:
1. Check the "Actions" tab in your GitHub repository
2. Look for error messages in the workflow
3. Ensure all dependencies are in `package.json`
4. Verify the build works locally with `npm run build`

### If site doesn't load:
1. Check if repository name is `your-username.github.io`
2. Verify repository is set to public
3. Check GitHub Pages settings in repository settings

## 📝 **Update Your Portfolio:**

1. **Make changes** to your code locally
2. **Test changes** with `npm run dev`
3. **Commit and push** changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
4. **GitHub Actions will automatically** build and deploy

## 🎨 **Next Steps:**

1. **Customize your content** in `src/pages/`
2. **Add your real projects** with screenshots
3. **Update personal information** throughout the site
4. **Add a custom domain** (optional)

---

**Your portfolio is now live and ready to share with the world!** 🌟 