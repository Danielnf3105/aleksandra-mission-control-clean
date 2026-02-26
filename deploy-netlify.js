#!/usr/bin/env node
/**
 * Alternative deployment to Netlify (no auth required for build)
 * Creates a deployable static build
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying Mission Control to Netlify...');

// Create netlify.toml
const netlifyConfig = `[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`;

fs.writeFileSync('netlify.toml', netlifyConfig);

// Create _redirects for SPA routing
fs.writeFileSync('public/_redirects', '/*    /index.html   200');

// Create deployment info
const deploymentInfo = {
  name: "aleksandra-mission-control",
  description: "Real-time AI Agent Operations Dashboard",
  deployedAt: new Date().toISOString(),
  version: "2.0.0",
  features: [
    "Real-time system metrics",
    "Interactive performance charts", 
    "Live activity monitoring",
    "Enhanced system status",
    "Responsive design"
  ]
};

fs.writeFileSync('deployment-info.json', JSON.stringify(deploymentInfo, null, 2));

console.log('✅ Netlify deployment files created');
console.log('📄 Next steps:');
console.log('1. Connect GitHub repository to Netlify');
console.log('2. Set build command: npm run build');
console.log('3. Set publish directory: out');
console.log('4. Deploy automatically on push');

// Create GitHub Pages deployment alternative
const ghPagesWorkflow = `name: Deploy Mission Control to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out`;

fs.mkdirSync('.github/workflows', { recursive: true });
fs.writeFileSync('.github/workflows/deploy.yml', ghPagesWorkflow);

console.log('🌐 GitHub Pages workflow created');
console.log('');
console.log('🎯 Mission Control v2.0.0 Enhanced Features:');
console.log('  • Real-time system metrics (CPU, Memory, Network)');
console.log('  • Interactive charts (Processing, Content, Health)'); 
console.log('  • Live activity feed with timestamps');
console.log('  • Enhanced system monitoring with latency');
console.log('  • Responsive design with animations');
console.log('');
console.log('📊 Ready for deployment with multiple options:');
console.log('  1. Vercel (waiting for auth): npx vercel --prod');
console.log('  2. Netlify: Connect repo to netlify.com');
console.log('  3. GitHub Pages: Push to GitHub with workflow');
console.log('');
console.log('✅ Mission Control dashboard continuously improved!');