const router = require('express').Router();
const axios = require('axios');

// Fetch Instagram posts using Facebook Graph API (Page Access Token)
router.get('/', async (req, res) => {
  const pageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const limit = parseInt(process.env.INSTAGRAM_LIMIT || '8', 10);
  
  if (!pageAccessToken) {
    return res.json({ 
      items: [], 
      note: 'Add FACEBOOK_PAGE_ACCESS_TOKEN in .env to enable Instagram feed.' 
    });
  }

  try {
    // Step 1: First get the page access token for the specific page
    const accountsResponse = await axios.get(
      `https://graph.facebook.com/v20.0/me/accounts?access_token=${pageAccessToken}`
    );

    // Find the Quark School page
    const quarkPage = accountsResponse.data.data?.find(page => 
      page.id === '107372715705065' || page.name === 'Quark School'
    );

    if (!quarkPage) {
      return res.json({ 
        items: [], 
        note: 'Quark School page not found in account pages.' 
      });
    }

    console.log('Found page:', quarkPage.name, quarkPage.id);

    // Step 2: Get the Instagram Business Account using the page's access token
    const pageResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${quarkPage.id}?fields=instagram_business_account&access_token=${quarkPage.access_token}`
    );

    const instagramAccountId = pageResponse.data.instagram_business_account?.id;
    
    if (!instagramAccountId) {
      return res.json({ 
        items: [], 
        note: 'No Instagram Business Account connected to this Facebook Page.' 
      });
    }

    console.log('Instagram Account ID:', instagramAccountId);

    // Step 3: Get Instagram media using the page's access token
    const fields = 'id,caption,media_url,permalink,thumbnail_url,media_type,timestamp,children{media_url,media_type}';
    const mediaResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${instagramAccountId}/media?fields=${fields}&limit=${limit}&access_token=${quarkPage.access_token}`
    );

    const processedItems = mediaResponse.data.data?.map(item => {
      // Handle carousel posts (albums with multiple images/videos)
      if (item.media_type === 'CAROUSEL_ALBUM' && item.children?.data?.length > 0) {
        return {
          ...item,
          media_url: item.children.data[0].media_url, // Use first item as main image
          thumbnail_url: item.children.data[0].media_url,
          carousel_items: item.children.data
        };
      }
      
      // For video posts, ensure we have thumbnail_url
      if (item.media_type === 'VIDEO' && !item.thumbnail_url) {
        item.thumbnail_url = item.media_url;
      }
      
      return item;
    }) || [];

    console.log(`Successfully fetched ${processedItems.length} Instagram posts`);
    res.json({ items: processedItems });

  } catch (error) {
    console.error('Instagram API Error:', error.response?.data || error.message);
    
    // Provide specific error messages based on the error type
    let errorMessage = 'Instagram feed temporarily unavailable';
    
    if (error.response?.status === 400) {
      errorMessage = 'Invalid access token or permissions issue';
    } else if (error.response?.status === 403) {
      errorMessage = 'Access denied. Check Instagram Business Account connection';
    } else if (error.response?.status === 190) {
      errorMessage = 'Access token expired. Please refresh token';
    }

    res.status(500).json({ 
      error: 'Instagram fetch failed', 
      message: errorMessage,
      details: error.response?.data || error.message 
    });
  }
});

// Optional: Route to get Instagram account info
router.get('/account-info', async (req, res) => {
  const pageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  
  if (!pageAccessToken) {
    return res.json({ error: 'No access token provided' });
  }

  try {
    // Get the page access token
    const accountsResponse = await axios.get(
      `https://graph.facebook.com/v20.0/me/accounts?access_token=${pageAccessToken}`
    );

    const quarkPage = accountsResponse.data.data?.find(page => 
      page.id === '107372715705065' || page.name === 'Quark School'
    );

    if (!quarkPage) {
      return res.json({ error: 'Quark School page not found' });
    }

    const pageResponse = await axios.get(
      `https://graph.facebook.com/v20.0/${quarkPage.id}?fields=instagram_business_account{id,username,followers_count}&access_token=${quarkPage.access_token}`
    );

    res.json(pageResponse.data);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch account info', 
      details: error.response?.data || error.message 
    });
  }
});

module.exports = router;