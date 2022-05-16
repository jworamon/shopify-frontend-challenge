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
  
        const responseFromOpenAI = await fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${key}`,
            },
            body: JSON.stringify(data)
        });
        
        const response = await responseFromOpenAI.json();
        return response.choices[0].text;
    } catch(err) {
        console.log('Error: ', err.message);
    }
}

export default getResponseFromOpenAI;
