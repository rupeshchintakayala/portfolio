#!/bin/bash

# Portfolio Setup Script
# This script helps you get started with your portfolio website

echo "🚀 Setting up your Portfolio Website..."
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org/en/download/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Customize your portfolio by editing the files in src/pages/"
echo "2. Update your personal information in:"
echo "   - src/pages/home.tsx (name, tagline, social links)"
echo "   - src/pages/about.tsx (bio, skills, experience)"
echo "   - src/pages/projects.tsx (your projects)"
echo "   - src/pages/contact.tsx (contact information)"
echo "3. Update meta tags in public/index.html"
echo ""
echo "To start development:"
echo "   npm run dev"
echo ""
echo "To build for production:"
echo "   npm run build"
echo ""
echo "Happy coding! 🎨" 