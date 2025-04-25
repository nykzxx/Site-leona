async function chamarGroq(prompt) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // ou "llama3-8b-8192", "gemma-7b-it", etc
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });
  
    const data = await response.json();
    document.getElementById("frase").innerHTML = data.choices[0].message.content
  }
  