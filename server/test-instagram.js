// test-instagram.js - Updated to match your working API calls
const axios = require('axios');
require('dotenv').config();

async function testInstagramAPI() {
  const pageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  
  if (!pageAccessToken) {
    console.error('❌ FACEBOOK_PAGE_ACCESS_TOKEN not found in .env file');
    return;
  }

  console.log('🔍 Testing Instagram API connection...\n');

  try {
    // Step 1: Get all pages managed by this user
    console.log('1️⃣ Getting managed pages...');
    const accountsResponse = await axios.get(
      `https://graph.facebook.com/v20.0/me/accounts?access_token=${pageAccessToken}`
    );

    const pages = accountsResponse.data.data || [];
    console.log(`✅ Found ${pages.length} managed pages`);
    
    pages.forEach(page => {
      console.log(`   - ${page.name} (ID: ${page.id})`);
    });

    // Step 2: Find Quark School page
    const quarkPage = pages.find(page => 
      page.id === '107372715705065' || page.name === 'Quark School'
    );

    if (!quarkPage) {
      console.error('❌ Quark School page not found in managed pages');
      return;
    }

    console.log(`\n✅ Found Quark School page: ${quarkPage.name}`);

    // Step 3: Get Instagram Business Account using page access token
    console.log('\n2️⃣ Getting Instagram Business Account...');
    const pageResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${quarkPage.id}?fields=instagram_business_account&access_token=${quarkPage.access_token}`
    );

    const instagramAccountId = pageResponse.data.instagram_business_account?.id;
    
    if (!instagramAccountId) {
      console.error('❌ No Instagram Business Account connected to this Facebook Page');
      console.log('💡 The API returned:', pageResponse.data);
      return;
    }

    console.log(`✅ Instagram Business Account ID: ${instagramAccountId}`);

    // Step 4: Get Instagram account info
    console.log('\n3️⃣ Getting Instagram account info...');
    const accountInfoResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${instagramAccountId}?fields=id,username,followers_count,media_count&access_token=${quarkPage.access_token}`
    );

    console.log(`✅ Instagram Username: @${accountInfoResponse.data.username || 'N/A'}`);
    console.log(`✅ Followers: ${accountInfoResponse.data.followers_count || 'N/A'}`);
    console.log(`✅ Total Posts: ${accountInfoResponse.data.media_count || 'N/A'}`);

    // Step 5: Get recent media
    console.log('\n4️⃣ Getting recent Instagram posts...');
    const fields = 'id,caption,media_url,permalink,thumbnail_url,media_type,timestamp';
    const mediaResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${instagramAccountId}/media?fields=${fields}&limit=10&access_token=${quarkPage.access_token}`
    );

    const posts = mediaResponse.data.data || [];
    console.log(`✅ Found ${posts.length} recent posts`);
    console.log(`✅ Found ${posts.length} recent posts`);

    if (posts.length > 0) {
      console.log('\n📋 Recent Posts:');
      posts.forEach((post, index) => {
        console.log(`\n   ${index + 1}. ${post.media_type}`);
        console.log(`      Caption: ${post.caption ? post.caption.substring(0, 50) + '...' : 'No caption'}`);
        console.log(`      URL: ${post.permalink}`);
        console.log(`      Posted: ${new Date(post.timestamp).toLocaleDateString()}`);
        console.log(`      Media URL: ${post.media_url ? 'Available' : 'Not available'}`);
      });

      console.log('\n🎉 Instagram API is working correctly!');
      console.log('\n💡 Next steps:');
      console.log('   1. Make sure your server is running on port 5000');
      console.log('   2. Update your Instagram route file');
      console.log('   3. Restart your server');
      console.log('   4. Check your website\'s Instagram feed');
    } else {
      console.log('\n⚠️  No posts found. This could mean:');
      console.log('   1. The Instagram account has no posts');
      console.log('   2. All posts are older than the API limit');
      console.log('   3. The posts don\'t meet the criteria for the API');
      console.log('\n💡 Try posting something on Instagram and test again in a few minutes.');
    }

  } catch (error) {
    console.error('\n❌ Instagram API Error:');
    
    if (error.response?.status === 400) {
      console.error('   Invalid request or access token');
      console.error('   Details:', error.response.data);
    } else if (error.response?.status === 403) {
      console.error('   Access denied - check permissions');
      console.error('   Make sure your token has instagram_basic permission');
    } else if (error.response?.status === 190) {
      console.error('   Access token expired or invalid');
      console.error('   Generate a new token from Facebook Developer Console');
    } else {
      console.error('   Unexpected error:', error.message);
      if (error.response?.data) {
        console.error('   Response:', JSON.stringify(error.response.data, null, 2));
      }
    }

    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Verify your Facebook Page Access Token is valid');
    console.log('   2. Ensure Instagram Business Account is connected to Facebook Page');
    console.log('   3. Check token permissions include "instagram_basic"');
    console.log('   4. Try generating a new token if it\'s expired');
  }
}

// Test server connection
async function testServerConnection() {
  console.log('\n🌐 Testing server connection...');
  try {
    const response = await axios.get('http://localhost:5000/api/instagram');
    console.log('✅ Server is responding');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('❌ Server connection failed');
    console.error('Make sure your server is running on port 5000');
    console.error('Error:', error.message);
  }
}

// Run both tests
console.log('🚀 Starting Instagram API tests...\n');
testInstagramAPI().then(() => {
  return testServerConnection();
}).catch(console.error);