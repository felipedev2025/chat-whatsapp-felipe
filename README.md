# Chat WhatsApp – Atendimento Automatizado

Sistema de atendimento automatizado via **WhatsApp Cloud API**, desenvolvido em Node.js com integração à API oficial da Meta.

> **Desenvolvido por Felipe Fragoso – 2025**

---

## 🚀 Funcionalidades

- Menu interativo por mensagem (1 – Suporte, 2 – Financeiro, 3 – Comercial)
- Redirecionamento automático conforme opção escolhida
- Integração via Webhook com Cloud API da Meta
- Envio de mensagens com assinatura personalizada
- Suporte a variáveis de ambiente (.env)

---

## 📁 Estrutura do Projeto

```bash
chat-whats/
├── webhook.js        # Código principal do servidor
├── .env              # Variáveis de ambiente (não subir no GitHub)
├── package.json      # Dependências e scripts
├── node_modules/     # Módulos instalados
```

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/felipedev2025/chat-whatsapp-felipe.git
cd chat-whatsapp-felipe
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure seu `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
TOKEN=SEU_TOKEN_GERADO_PELA_META
PHONE_ID=SEU_PHONE_NUMBER_ID
SUPPORT_NUMBER=whatsapp:+55SEUNUMERO
```

---

## ▶️ Executar

```bash
node webhook.js
```

O servidor vai rodar na porta 3000 e responder ao endpoint `/webhook`.

---

## 🌐 Webhook

Configure no [Facebook Developer](https://developers.facebook.com/apps/) o webhook com:

- **URL**: `https://SEUSERVIDOR/webhook`
- **Token de verificação**: `felipefragoso`

---

## 📌 Observações

- O token padrão da Meta dura 24 horas (para testes). Gere um token permanente via sistema.
- Mensagens de modelo fora da janela de 24h são cobradas.

---

## 🛡️ Licença

Este projeto é de uso pessoal e livre para fins educacionais e comerciais.

---

## ✉️ Contato

Desenvolvido por **Felipe Fragoso – 2025**  
📧 felipefragoso001@outlook.com  
📱 (19) 92000-8172  
🔗 GitHub: [github.com/felipedev2025](https://github.com/felipedev2025)
