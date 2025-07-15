#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Deploying Portfolio to GitHub Pages..."

# Add Homebrew to PATH
export PATH="/opt/homebrew/bin:$PATH"

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to gh-pages branch
echo "🌐 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "🎉 Deployment complete!"
echo "Your portfolio will be available at: https://YOUR-USERNAME.github.io"
echo "Note: It may take a few minutes for changes to appear." 