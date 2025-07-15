#!/bin/bash

# GitHub Pages Setup Script
echo "🚀 Setting up your portfolio for GitHub Pages deployment..."

# Add Homebrew to PATH
export PATH="/opt/homebrew/bin:$PATH"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    
    # Create .gitignore if it doesn't exist
    if [ ! -f ".gitignore" ]; then
        echo "📝 Creating .gitignore file..."
        cat > .gitignore << EOL
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
Thumbs.db

# Logs
logs
*.log
EOL
    fi
    
    echo "✅ Git repository initialized!"
else
    echo "✅ Git repository already exists!"
fi

# Build the project to test
echo "🔨 Testing build process..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Create a GitHub repository named: YOUR-USERNAME.github.io"
    echo "2. Run: git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git"
    echo "3. Run: git add ."
    echo "4. Run: git commit -m 'Initial commit: Portfolio website'"
    echo "5. Run: git push -u origin main"
    echo ""
    echo "📖 For detailed instructions, see DEPLOYMENT.md"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo "🎉 Setup complete! Your portfolio is ready for GitHub Pages deployment." 