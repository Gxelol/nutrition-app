import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rotas do chat
app.use("/api/chat", chatRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

app.get("/", async (req, res) => {
  res.send("API do Chatbot de");
});