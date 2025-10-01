import 'dotenv/config';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

async function test() {
  try {
    const response = await cohere.embed({
      texts: ['hello world'],
      model: 'embed-multilingual-v3.0',
      input_type: 'search_document'
    });
    console.log('Embed response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
