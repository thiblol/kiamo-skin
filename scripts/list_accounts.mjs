#!/usr/bin/env node
import Zernio from '@zernio/node';
import fs from 'fs';
import os from 'os';
import path from 'path';

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
    const res = await zernio.accounts.listAccounts();
    const accounts = res.data?.accounts || res.data || res;

    console.log('=== ALL ACCOUNTS ===\n');
    accounts.forEach(acc => {
      console.log(`Platform: ${acc.platform}`);
      console.log(`Account ID: ${acc._id}`);
      console.log(`Display Name: ${acc.displayName || 'N/A'}`);
      if (acc.metadata?.selectedLocationName) {
        console.log(`Location: ${acc.metadata.selectedLocationName}`);
      }
      console.log('---\n');
    });

    const gbpAccounts = accounts.filter(a => a.platform === 'googlebusiness');
    if (gbpAccounts.length > 0) {
      console.log('=== GOOGLE BUSINESS PROFILE ACCOUNTS ===\n');
      gbpAccounts.forEach(acc => {
        console.log(`Account ID: ${acc._id}`);
        console.log(`Name: ${acc.displayName || acc.metadata?.selectedLocationName || 'N/A'}`);
        console.log('---\n');
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('API Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
