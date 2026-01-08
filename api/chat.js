import OpenAI from 'openai';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check for API key
    const apiKey = process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_KEY;
    if (!apiKey || apiKey === 'your_openai_api_key_here') {
      console.error('OpenAI API key is missing or not configured');
      return res.status(500).json({ 
        error: 'OpenAI API key is not configured. Please set OPENAI_API_KEY in your .env file with your actual API key.' 
      });
    }

    // Parse request body - Vercel automatically parses JSON, but handle both cases
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON in request body' });
      }
    }
    
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Request body must be a JSON object' });
    }

    const { prompt } = body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      temperature: 0.5,
      messages: [{ role: "user", content: prompt }]
    });

    const generatedText = completion.choices[0].message.content;

    return res.status(200).json({ text: generatedText });
  } catch (error) {
    console.error('Error generating text:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to generate text',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

