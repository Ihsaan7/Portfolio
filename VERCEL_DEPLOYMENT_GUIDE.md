# Vercel Deployment Guide

## Current Deployment Status
- **Vercel Username**: egzziwd-8640
- **Project Team**: egzziwd-8640s-projects
- **Project Name**: myportfolio
- **Production URL**: https://myportfolio-lac-alpha-77.vercel.app

## Account Management

### Current Setup
The project is currently deployed under a temporary account. For better security and control, it's recommended to:

1. **Reconnect with Personal Account**
   - Visit [Vercel.com](https://vercel.com)
   - Sign in with GitHub account
   - This provides full control over deployments

### Steps to Reconnect
```bash
# Logout of current account
vercel logout

# Login with personal account
vercel login
```

### After Personal Account Setup
1. Import GitHub repository
2. Redeploy project under personal account
3. Update deployment settings as needed

## Deployment Policies

### Free Tier (Hobby Plan) Limitations
- No expiration date for deployments
- Project remains deployed indefinitely if:
  - Free tier limits are not exceeded
  - GitHub repository remains active
  - Project is not manually deleted

### When to Redeploy
Redeployment is necessary when:
- Making code changes
- Updating dependencies
- Modifying environment variables
- Changing project settings

### Automatic Deployments
- Automatic redeployment on GitHub repository pushes
- Manual redeployment only needed for local changes

## Best Practices

### Repository Management
- Keep GitHub repository active
- Monitor Vercel dashboard for notifications
- Regularly check deployment status
- Keep dependencies updated

### Project Monitoring
Check your project:
- After code changes
- Monthly for general maintenance
- When receiving Vercel notifications
- If website issues are noticed

### Project Status Checks
Multiple ways to monitor:
1. Visit Vercel dashboard
2. Use CLI command: `vercel ls`
3. Visit deployment URL

## Project Cancellation

### Automatic Cancellation Triggers
Project may be cancelled if:
- Manually deleted
- Vercel terms of service violated
- Free tier limits significantly exceeded

## Maintenance Commands

### Useful Vercel CLI Commands
```bash
# Check current user
vercel whoami

# List projects
vercel project ls

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

## Important Notes
- Keep your GitHub repository active
- Monitor Vercel dashboard regularly
- Update dependencies as needed
- Check deployment status monthly
- Keep documentation updated

## Troubleshooting
If you encounter issues:
1. Check Vercel dashboard for error messages
2. Verify GitHub repository status
3. Check deployment logs
4. Contact Vercel support if needed

## Security Recommendations
1. Use personal GitHub account
2. Enable two-factor authentication
3. Regularly review deployment settings
4. Monitor for unauthorized changes
5. Keep dependencies updated 