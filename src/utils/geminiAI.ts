import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY as string;

if (!apiKey) {
  throw new Error("Gemini API key is missing");
}

const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (query: string) => {
  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: query,
  });

  return result.text;
};