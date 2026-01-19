# Project Structure Documentation

This document explains the organization of the portfolio website project.

## 📂 Directory Structure

### `/app`
Contains application code and server files.
- `server.js` - Express.js server for local development

### `/public`
Contains all static website files that will be deployed.
- `index.html` - Main HTML file with embedded CSS and JavaScript
- `images/` - All image assets (JPG, SVG, PNG files)
  - Profile photos
  - Company logos
  - Certificate logos
  - Screenshots

### `/terraform`
Contains Infrastructure as Code (IaC) configuration.
- `main.tf` - Terraform configuration for Azure Static Web Apps
- `.terraformignore` - Files to ignore in Terraform operations

### `/scripts`
Contains utility and deployment scripts.
- `deploy.sh` - Automated deployment script for Terraform

### `/docs`
Documentation files.
- `STRUCTURE.md` - This file

## 🔄 File Path Updates

After reorganization, the following paths were updated:

1. **Image paths in `index.html`**: Changed from `src="image.jpg"` to `src="images/image.jpg"`
2. **Server.js**: Updated to serve files from `/public` directory
3. **Deploy script**: Updated to run Terraform from `/terraform` directory

## 🚀 Running the Project

### Local Development
```bash
npm start
```
Server runs on `http://localhost:3000`

### Infrastructure Deployment
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Or use the script:
```bash
bash scripts/deploy.sh
```

## 📝 Notes

- All static assets (HTML, images) are in `/public` for easy deployment
- Terraform files are isolated in `/terraform` for infrastructure management
- Application code is separated in `/app` for better organization
- Scripts are centralized in `/scripts` for automation


