import fetch from 'node-fetch';

async function testFetch() {
  try {
    const response = await fetch('https://api.cohere.ai/v1/info', {
      headers: { Authorization: `Bearer ${process.env.COHERE_API_KEY}` },
    });
    const data = await response.json();
    console.log('Response:', data);
  } catch (err) {
    console.error('Fetch failed:', err);
  }
}

testFetch();
