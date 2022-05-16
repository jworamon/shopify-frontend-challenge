const axios = require('axios');

const getResponseFromOpenAI = async (key, engine, prompt) => {
    try {
        const data = {
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 256,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
           };
           
        const response = await axios.post(`https://api.openai.com/v1/engines/${engine}/completions`, data, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${key}`,
            }
        })
        return response.data.choices[0].text;
    } catch(err) {
        console.log('Error: ', err.message);
    }
}

export default getResponseFromOpenAI;
