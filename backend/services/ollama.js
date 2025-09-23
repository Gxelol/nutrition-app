import fetch from "node-fetch";

// Integração com Ollama rodando localmente
export async function askOllama(message) {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",   // Pode trocar para outro modelo
      prompt: message
    })
  });

  const data = await response.json();
  return data.response || "Não entendi sua pergunta.";
}
