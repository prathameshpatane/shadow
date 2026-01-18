
import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
You are the AI Assistant for AeroEstate Gold, a luxury residential plotted development in Khopoli, Maharashtra.
Key Details:
- Location: Khopoli, Maharashtra (near Navi Mumbai International Airport).
- Project: 50-acre landmark plotted development.
- Starting Price: ₹ 64.99 Lakh + taxes.
- Sizes: 117 sq. meters (1,259 sq. ft) plots.
- Amenities: 30,000 sq.ft hill-top resort, 11+ acres of open spaces, clubhouse, luxury lounge.
- USP: India's No.1 land investment destination.
- Proximity: 40 mins from Navi Mumbai Int. Airport.
Be helpful, professional, and use a luxury tone. Keep responses concise.
`;

export const getAIResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: PROJECT_CONTEXT,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. How else can I help you with AeroEstate Gold?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently resting. Please leave your number and our human team will contact you!";
  }
};
