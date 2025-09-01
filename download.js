export default function handler(req, res) {
  if (req.method === "POST") {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: "Session ID manquant !" });
    }

    const fileContent = `
      const { makeWASocket, useSingleFileAuthState } = require("@whiskeysockets/baileys");
      const { state, saveState } = useSingleFileAuthState("./auth_info.json");

      async function startBot() {
        const sock = makeWASocket({
          auth: state,
          printQRInTerminal: true
        });

        sock.ev.on("creds.update", saveState);

        sock.ev.on("messages.upsert", async ({ messages }) => {
          const m = messages[0];
          if (!m.message) return;

          const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
          if (text.toLowerCase() === "ping") {
            await sock.sendMessage(m.key.remoteJid, { text: "pong ✅" });
          }
        });
      }

      startBot();
    `;

    res.setHeader("Content-Disposition", "attachment; filename=index.js");
    res.setHeader("Content-Type", "application/javascript");
    res.send(fileContent);
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
