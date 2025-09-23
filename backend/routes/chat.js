import express from "express";
import { askOllama } from "../services/ollama.js";

const router = express.Router();

// Rota principal do chat
router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await askOllama(message);
    res.json({ reply: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao processar mensagem" });
  }
});

export default router;
