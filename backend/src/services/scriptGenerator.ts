import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateScript = async (topic: string, language: string, duration: number, style: string) => {
    const prompt = `
    Create a highly engaging YouTube Short script for the topic: "${topic}".
    Language: ${language}
    Target Duration: ${duration} seconds
    Style: ${style}
    
    The script should be in JSON format with the following structure:
    {
      "title": "...",
      "description": "...",
      "tags": ["...", "..."],
      "scenes": [
        {
          "text": "...",
          "duration": 5,
          "visualPrompt": "..."
        }
      ]
    }
    
    Make sure the text is punchy and optimized for shorts.
  `;

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error("Failed to generate script");

    return JSON.parse(content);
};
