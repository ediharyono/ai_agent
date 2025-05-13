require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runChat(promptText) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const chat = model.startChat({
    history: [], // You can store history here for multi-turn conversations
    generationConfig: {
      maxOutputTokens: 1000,
    },
  });

  try {
    const result = await chat.sendMessage(promptText);
    const response = result.response;
    const text = response.text();

    console.log("AI Response:\n", text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Example usage
runChat("Apa definisi hadist menurut istilah");
