#!/usr/bin/env node
import Zernio from '@zernio/node';
import fs from 'fs';
import os from 'os';
import path from 'path';

if (process.argv.length < 5) {
  console.error('Usage: node gbp_post_simple.mjs <content-file> <image-url> <blog-url> <account-id>');
  console.error('Note: Use the public image URL directly (https://kiamoskin.com/images/blog/hyperpigmentation-hero.jpg)');
  process.exit(1);
}

const [contentFile, imageUrl, blogUrl, accountId] = process.argv.slice(2);

const configPath = path.join(os.homedir(), '.zernio', 'config.json');
if (!fs.existsSync(configPath)) {
  console.error('Error: No Zernio config found at ~/.zernio/config.json');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
if (!config.apiKey || config.apiKey === 'YOUR_API_KEY_HERE') {
  console.error('Error: Please set your Zernio API key in ~/.zernio/config.json');
  process.exit(1);
}

const zernio = new Zernio({
  apiKey: config.apiKey,
  baseURL: 'https://zernio.com/api'
});

async function main() {
  try {
    const content = fs.readFileSync(contentFile, 'utf8').trim();
    console.log(`Content loaded: ${content.length} characters`);
    console.log(`Using image URL: ${imageUrl}`);

    console.log(`Creating GBP post for account: ${accountId}`);
    const postRes = await zernio.posts.createPost({
      body: {
        content: content,
        mediaItems: [{ type: 'image', url: imageUrl }],
        platforms: [{
          platform: 'googlebusiness',
          accountId: accountId,
          platformSpecificData: {
            callToAction: {
              type: 'LEARN_MORE',
              url: blogUrl
            }
          },
        }],
        isDraft: false, // Set to true for draft, false to publish immediately
      }
    });

    const post = postRes.data?.post || postRes.data || postRes;
    console.log('\n=== POST CREATED ===');
    console.log(`Post ID: ${post._id || post.id}`);
    console.log(`Status: ${post.status}`);
    console.log(`Created: ${post.createdAt || new Date().toISOString()}`);

    console.log('\n=== JSON FOR LOGGING ===');
    const logEntry = {
      blogUrl: blogUrl,
      gbpPostId: post._id || post.id,
      title: content.split('\n')[0].substring(0, 100),
      postedAt: post.createdAt || new Date().toISOString(),
      status: post.status || 'published'
    };
    console.log(JSON.stringify(logEntry, null, 2));

  } catch (error) {
    console.error('Error:', error.message);
    if (error.response?.data) {
      console.error('API Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
