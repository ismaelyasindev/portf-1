# 🌐 Portfolio Website - DevOps Portfolio

A professional portfolio website showcasing DevOps skills, built with modern web technologies and deployed using Infrastructure as Code (IaC) with Terraform.

## 🚀 Features

- 🌍 **Live Hosting** on Azure Static Web Apps
- ⚙️ **CI/CD Pipeline** via GitHub Actions
- 🏗️ **Infrastructure as Code** with Terraform
- 💡 **Auto Deployment** on every `git push`
- 🔒 Secrets managed securely in GitHub
- 🎨 Modern, responsive design with dark/light mode

## 📁 Project Structure

```
portfolio/
├── app/                    # Application code
│   └── server.js          # Express server for local development
│
├── public/                # Static website files
│   ├── index.html        # Main HTML file
│   └── images/          # All images and assets
│       ├── *.jpg         # Profile and logo images
│       └── *.svg         # SVG logos
│
├── terraform/            # Infrastructure as Code
│   └── main.tf          # Terraform configuration for Azure
│
├── scripts/              # Utility scripts
│   └── deploy.sh        # Deployment automation script
│
├── docs/                 # Documentation
│
├── .gitignore           # Git ignore rules
├── package.json         # Node.js dependencies and scripts
└── README.md           # This file
```

## 🛠️ Tech Stack

| Tool            | Purpose                        |
|-----------------|--------------------------------|
| HTML/CSS/JS     | Frontend portfolio website     |
| Express.js      | Local development server       |
| Terraform       | Infrastructure as Code (IaC)   |
| Azure Static Web Apps | Cloud Hosting               |
| GitHub Actions  | Continuous Integration & Deployment |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Terraform (latest version)
- Azure CLI (for deployment)
- Git

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

### Infrastructure Deployment

1. **Navigate to terraform directory:**
   ```bash
   cd terraform
   ```

2. **Initialize Terraform:**
   ```bash
   terraform init
   ```

3. **Plan the deployment:**
   ```bash
   terraform plan
   ```

4. **Apply the configuration:**
   ```bash
   terraform apply
   ```

Or use the deployment script:
```bash
bash scripts/deploy.sh
```

## 📦 Deployment

The website is automatically deployed to Azure Static Web Apps via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

1. Build and deploy using Azure Static Web Apps CLI:
   ```bash
   npm install -g @azure/static-web-apps-cli
   swa deploy ./public --env production
   ```

## 🔗 Live Demo

👉 [Visit My Portfolio](https://gentle-bay-06d4d1a03.6.azurestaticapps.net/)

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Ismael Yasin**
- Portfolio: [Live Site](https://gentle-bay-06d4d1a03.6.azurestaticapps.net/)
- LinkedIn: [ismael-yasin-782bbb320](https://linkedin.com/in/ismael-yasin-782bbb320/)
- GitHub: [@ismaelyasindev](https://github.com/ismaelyasindev)

---

Built with ❤️ using DevOps best practices
