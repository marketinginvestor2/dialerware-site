import { GoogleGenAI, Type } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export interface ScriptResponse {
  display: string;
  spoken: string;
}

export const generateSalesScript = async (productName: string, targetAudience: string): Promise<ScriptResponse> => {
  const ai = getClient();
  if (!ai) return { display: "Error: API Key is missing. Please check your configuration.", spoken: "" };

  try {
    const prompt = `
      Write a compelling, high-energy cold calling script for a salesperson selling "${productName}" to "${targetAudience}".
      Keep it under 150 words. Focus on value proposition and booking a meeting.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            displayScript: {
              type: Type.STRING,
              description: 'The script formatted for reading, including clear section headers like "1. Opening", "2. The Hook", "3. Value Pitch", "4. Call to Action".',
            },
            spokenScript: {
              type: Type.STRING,
              description: 'The exact same script content but containing ONLY the spoken words for the salesperson. Remove all section headers, labels (like "Salesperson:", "Prospect:"), stage directions, and parentheticals. It must be continuous text suitable for a text-to-speech engine.',
            },
          },
          required: ['displayScript', 'spokenScript'],
        },
      },
    });

    const responseText = response.text;
    if (!responseText) throw new Error("No response text");
    
    const json = JSON.parse(responseText);
    return { 
      display: json.displayScript || "Error parsing script.", 
      spoken: json.spokenScript || "" 
    };
  } catch (error) {
    console.error("Gemini generation error:", error);
    return { display: "An error occurred while generating the script. Please ensure your API key is valid.", spoken: "" };
  }
};

export const generateScriptAudio = async (text: string): Promise<string | null> => {
  const ai = getClient();
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: {
        parts: [{ text: text }],
      },
      config: {
        responseModalities: ['AUDIO'] as any,
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    // Extract the base64 audio data
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (error) {
    console.error("Gemini TTS error:", error);
    return null;
  }
};
