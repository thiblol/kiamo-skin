# Zernio Setup for Google Business Profile Posts

## One-Time Setup

### 1. Get your Zernio API key
1. Go to https://zernio.com/dashboard
2. Create an account (free for up to 2 social accounts)
3. Generate an API key from the dashboard
4. Copy the key

### 2. Configure the API key
Edit `~/.zernio/config.json` and replace `YOUR_API_KEY_HERE` with your actual key:

```json
{
  "apiKey": "zrn_abc123..."
}
```

### 3. Install dependencies
The Zernio SDK is already installed in `/tmp/node_modules/@zernio/node`

## Usage Scripts

### List all connected accounts (find GBP account ID)
```bash
node /tmp/list_accounts.mjs
```

Look for accounts with `platform: googlebusiness` and note the `Account ID`.

### Create a Google Business Profile post
```bash
node /tmp/gbp_post.mjs <content-file> <image-path> <blog-url> <account-id>
```

Example:
```bash
node /tmp/gbp_post.mjs \
  C:/Users/haath/Desktop/kiamo/clients/kiamo/gbp/draft_hyperpigmentation.txt \
  /tmp/hero.src \
  https://kiamoskin.com/journal/hyperpigmentation-treatment-guide/ \
  66abc123def456
```

The script will:
1. Upload the image to Zernio
2. Create the GBP post with "Learn More" button
3. Output JSON to append to `posts_log.json`

## Complete the hyperpigmentation post

Once you have your Zernio API key configured:

1. **Find KIAMO's GBP account ID:**
   ```bash
   node /tmp/list_accounts.mjs
   ```

2. **Publish the post:**
   ```bash
   node /tmp/gbp_post.mjs \
     C:/Users/haath/Desktop/kiamo/clients/kiamo/gbp/draft_hyperpigmentation.txt \
     /tmp/hero.src \
     https://kiamoskin.com/journal/hyperpigmentation-treatment-guide/ \
     <ACCOUNT_ID_FROM_STEP_1>
   ```

3. **Log the post:**
   Take the JSON output from step 2 and append it to:
   `C:/Users/haath/Desktop/kiamo/clients/kiamo/gbp/posts_log.json`

## Files Ready
- ✅ Post content: `clients/kiamo/gbp/draft_hyperpigmentation.txt`
- ✅ Hero image: `/tmp/hero.src` (2.3MB JPEG)
- ✅ Scripts: `/tmp/gbp_post.mjs`, `/tmp/list_accounts.mjs`
- ✅ Config template: `~/.zernio/config.json`

## Next Steps
1. Add your Zernio API key to `~/.zernio/config.json`
2. Run the scripts above to publish
3. The skill will be fully automated for future blog posts
