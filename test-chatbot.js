import fetch from 'node-fetch';

async function testChatbot() {
  try {
    const response = await fetch('http://localhost:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: "Tell me about France"
      })
    });

    const data = await response.json();
    console.log('Chatbot response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testChatbot();
