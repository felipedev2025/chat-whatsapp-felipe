const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const token = process.env.TOKEN;
const phoneId = process.env.PHONE_ID;
const supportNumber = process.env.SUPPORT_NUMBER;

app.get('/webhook', (req, res) => {
    const verifyToken = "felipefragoso";
    const mode = req.query["hub.mode"];
    const challenge = req.query["hub.challenge"];
    const tokenReq = req.query["hub.verify_token"];

    if (mode && tokenReq === verifyToken) {
        console.log("Webhook verificado com sucesso.");
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

app.post('/webhook', async (req, res) => {
    const msg = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    if (!msg) return res.sendStatus(200);

    const from = msg.from;
    const text = msg.text?.body;

    if (text === "1") {
        await enviarMensagem(from, "Você está sendo redirecionado para o Suporte... Aguarde.\n\nDesenvolvido por Felipe Fragoso - 2025");
    } else {
        await enviarMensagem(from,
            "Olá! Bem-vindo ao atendimento automatizado.\n\n" +
            "Escolha uma opção:\n" +
            "1️⃣ Suporte\n" +
            "2️⃣ Financeiro\n" +
            "3️⃣ Comercial\n\n" +
            
            "Desenvolvido por Felipe Fragoso - 2025"
        );
    }

    res.sendStatus(200);
});

async function enviarMensagem(to, message) {
    await axios.post(`https://graph.facebook.com/v19.0/${phoneId}/messages`, {
        messaging_product: "whatsapp",
        to,
        text: { body: message }
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Bot rodando na porta ${PORT}`));
