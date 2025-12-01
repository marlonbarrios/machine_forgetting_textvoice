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
    if (!apiKey) {
      console.error('OpenAI API key is missing');
      return res.status(500).json({ error: 'OpenAI API key is not configured' });
    }

    // Parse request body - handle both string and object formats
    let body;
    if (typeof req.body === 'string') {
      try {
        body = JSON.parse(req.body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON in request body' });
      }
    } else {
      body = req.body || {};
    }

    const { text, voice = 'alloy' } = body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: text,
    });

    // Convert the response to a buffer
    const buffer = Buffer.from(await response.arrayBuffer());

    // Set appropriate headers for audio response
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', buffer.length);

    return res.status(200).send(buffer);
  } catch (error) {
    console.error('Error generating audio:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to generate audio',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

