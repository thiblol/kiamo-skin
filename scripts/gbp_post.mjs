#!/usr/bin/env node
import Zernio from '@zernio/node';
import fs from 'fs';
import os from 'os';
import path from 'path';

if (process.argv.length < 6) {
  console.error('Usage: node gbp_post.mjs <content-file> <image-path> <blog-url> <account-id>');
  process.exit(1);
}

const [contentFile, imagePath, blogUrl, accountId] = process.argv.slice(2);

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

async function uploadImage(imagePath) {
  const filename = path.basename(imagePath);
  const imageBuffer = fs.readFileSync(imagePath);

  // Get presigned URL
  console.log('Getting presigned URL...');
  const presignedRes = await zernio.media.getMediaPresignedUrl({
    body: {
      fileName: filename,
      fileType: 'image/jpeg',
      fileSize: imageBuffer.length
    }
  });

  const { presignedUrl, mediaUrl } = presignedRes.data || presignedRes;

  // Upload to presigned URL
  console.log('Uploading to presigned URL...');
  const uploadResponse = await fetch(presignedUrl, {
    method: 'PUT',
    body: imageBuffer,
    headers: {
      'Content-Type': 'image/jpeg',
    }
  });

  if (!uploadResponse.ok) {
    throw new Error(`Upload failed: ${uploadResponse.statusText}`);
  }

  return mediaUrl;
}

async function main() {
  try {
    const content = fs.readFileSync(contentFile, 'utf8').trim();
    console.log(`Content loaded: ${content.length} characters`);

    console.log(`Uploading image: ${imagePath}`);
    const mediaUrl = await uploadImage(imagePath);
    console.log(`Image uploaded: ${mediaUrl}`);

    console.log(`Creating GBP post for account: ${accountId}`);
    const postRes = await zernio.posts.createPost({
      body: {
        content: content,
        mediaItems: [{ type: 'image', url: mediaUrl }],
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
        isDraft: false,
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

    return logEntry;

  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('API Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
