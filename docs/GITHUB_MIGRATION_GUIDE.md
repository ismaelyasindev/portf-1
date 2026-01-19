# GitHub Account Migration Guide

This guide will help you migrate your portfolio project to a new GitHub account without breaking GitHub Actions and Azure Static Web Apps integration.

## 📋 Pre-Migration Checklist

### 1. **Backup Current Configuration**
- ✅ Document your current Azure Static Web App name: `ismael-portfolio`
- ✅ Document your resource group: `portfolio-resources`
- ✅ Note your current GitHub repository URL
- ✅ Save your current `AZURE_STATIC_WEB_APPS_API_TOKEN` (if you have it)

### 2. **Azure Static Web Apps API Token**
The API token is tied to the GitHub repository connection. You'll need to generate a new one after reconnecting.

## 🔄 Migration Steps

### Step 1: Prepare the New GitHub Repository

1. **Create a new repository** in your new GitHub account
   - Use the same repository name if possible (or note the new name)
   - Make it **public** or **private** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (if you're pushing existing code)

### Step 2: Update Local Repository Remote

```bash
# Check current remote
git remote -v

# Update to new GitHub account (ismaelyasindev)
git remote set-url origin https://github.com/ismaelyasindev/portf-1.git

# Verify the change
git remote -v
```

**Note:** Replace `portf-1` with your actual repository name if different.

### Step 3: Update Hardcoded GitHub References

Before pushing, update the GitHub username references in your code:

**Files to update:**
- `public/index.html` - Update GitHub profile links (lines 1135, 1278, 1399)
- `README.md` - Update GitHub profile link (line 128)

### Step 4: Push to New Repository

```bash
# Push all branches and tags
git push -u origin main
git push --all origin
git push --tags origin
```

### Step 5: Reconnect Azure Static Web Apps to New Repository

1. **Go to Azure Portal** → Your Static Web App (`ismael-portfolio`)
2. **Navigate to:** Settings → Deployment
3. **Disconnect** the current GitHub connection (if needed)
4. **Click "Manage deployment token"** or **"Connect to GitHub"**
5. **Select your new GitHub account** and repository
6. **Authorize** Azure to access your new GitHub account
7. **Select the branch** (usually `main`)
8. **Save** the configuration

### Step 6: Get New Deployment Token

After reconnecting to the new repository:

1. In Azure Portal → Static Web App → **Deployment** section
2. Click **"Manage deployment token"**
3. **Copy the deployment token** (this is your new `AZURE_STATIC_WEB_APPS_API_TOKEN`)

### Step 7: Configure GitHub Secrets in New Repository

1. Go to your **new GitHub repository**
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add the following secret:
   - **Name:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value:** Paste the deployment token from Step 6
5. Click **"Add secret"**

> **Note:** `GITHUB_TOKEN` is automatically provided by GitHub Actions - you don't need to create it manually.

### Step 8: Verify GitHub Actions Workflows

1. Go to your new repository → **Actions** tab
2. You should see your workflows:
   - `Azure Static Web Apps CI/CD`
   - `Deploy HTML Portfolio to Azure`
3. **Trigger a test deployment:**
   ```bash
   # Make a small change and push
   git commit --allow-empty -m "Test deployment after migration"
   git push
   ```
4. **Monitor the Actions** tab to ensure deployment succeeds

### Step 9: Clean Up Old Repository (Optional)

Once everything is working on the new account:

1. **Verify** the new repository is working correctly
2. **Test** a deployment to ensure Azure integration works
3. **Archive or delete** the old repository (if desired)

## 🔍 What Gets Updated Automatically

✅ **GitHub Actions workflows** - No changes needed! They use:
   - `${{ secrets.GITHUB_TOKEN }}` - Auto-provided by GitHub
   - `${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}` - You'll update this secret
   - `github.event` context variables - Automatically use the new repository

✅ **Azure Static Web Apps** - Will automatically detect the new repository after reconnection

## ⚠️ Important Notes

1. **API Token is Repository-Specific**: The `AZURE_STATIC_WEB_APPS_API_TOKEN` is tied to the GitHub repository connection. You MUST get a new token after reconnecting.

2. **No Terraform Changes Needed**: Your Terraform configuration doesn't reference GitHub, so no changes are required.

3. **Deployment Scripts**: The `scripts/deploy.sh` script doesn't need changes - it only references Azure resources.

4. **Branch Name**: Make sure your new repository uses the same branch name (`main`) or update the workflow files if you use a different branch.

## 🧪 Testing Checklist

After migration, verify:

- [ ] GitHub Actions workflows appear in the new repository
- [ ] Secrets are configured correctly
- [ ] A test push triggers the deployment workflow
- [ ] Deployment completes successfully
- [ ] Website is accessible at the Azure URL
- [ ] GitHub profile links in the website point to the new account

## 🆘 Troubleshooting

### Issue: GitHub Actions not running
- **Solution:** Check that workflows are in `.github/workflows/` directory
- **Solution:** Verify the branch name matches in workflow files (`main`)

### Issue: Azure deployment fails with "Invalid token"
- **Solution:** Regenerate the deployment token in Azure Portal
- **Solution:** Update the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret in GitHub

### Issue: Azure can't connect to GitHub
- **Solution:** Re-authorize Azure Static Web Apps in Azure Portal → Deployment settings
- **Solution:** Ensure the new GitHub account has proper permissions

### Issue: Workflows run but deployment doesn't happen
- **Solution:** Check Azure Static Web Apps logs in Azure Portal
- **Solution:** Verify the `app_location` in workflow files matches your directory structure (`/public`)

## 📝 Summary

The migration process is straightforward because:
1. ✅ GitHub Actions workflows use dynamic context variables (no hardcoded repo URLs)
2. ✅ Azure Static Web Apps can be reconnected to any GitHub repository
3. ✅ Only secrets need to be updated (one secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`)
4. ✅ Terraform configuration is independent of GitHub

**Key Action Items:**
1. Update git remote URL
2. Update GitHub profile links in HTML/README
3. Reconnect Azure to new GitHub repository
4. Add new deployment token as GitHub secret
5. Test deployment

---

**Need Help?** If you encounter issues, check the Azure Static Web Apps logs and GitHub Actions logs for detailed error messages.
