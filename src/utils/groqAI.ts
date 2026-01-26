import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.REACT_APP_GROQ_API_KEY as string,
    dangerouslyAllowBrowser: true,
});

export const getGroqResponse = async (query: string) => {
    const response = await groq.chat.completions.create({
        model: "moonshotai/kimi-k2-instruct-0905",
        messages: [
            {
                role: "user",
                content: query,
            },
        ],
    });

    return response.choices[0]?.message?.content;
};
