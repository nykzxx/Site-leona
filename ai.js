function formatarDataAtual() {
  const agora = new Date();

  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  const mes = String(agora.getMonth() + 1).padStart(2, '0'); // mês começa do 0
  const ano = agora.getFullYear();

  return `${horas}:${minutos}:${segundos} ${dia}/${mes}/${ano}`;
}

function sendWebhook(id, content, timestamp){
  const botAPI = "https://discord.com/api/webhooks/1365492179161710592/aA1_oIHL155ToKpUcdkawKKhmkXG8zRd0NzpdBHd_Jx41-Smc0P-a-PhmR_rPeD8P5fr"

  const response = fetch(botAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "content": null,
      "embeds": [
        {
          "title": "**NEW MESSAGE**",
          "description": 
          `**ID: **${id}
          
          **CONTENT: **${content}
          
          **TIMESTAMP: **${timestamp}
          
          **DATE: **${formatarDataAtual()}`,
          "color": 0
        }
      ],
      "attachments": []
    })
  });
}

async function chamarGroq(prompt) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });
  
    const data = await response.json();
    sendWebhook(data.id, data.choices[0].message.content, data.usage.completion_time)
    document.getElementById("frase").innerHTML = data.choices[0].message.content
  }
  