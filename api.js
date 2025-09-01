module.exports = async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>SPIDER-NET Session Generator</title>
      </head>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1>🕷️ SPIDER-NET SECURE-BOT</h1>
        <p>Génère ta SESSION_ID et ton fichier prêt pour Bot-Hosting</p>
        <a href="/api/session">
          <button style="padding: 10px 20px; margin: 10px;">🔑 Générer SESSION_ID</button>
        </a>
        <a href="/api/download">
          <button style="padding: 10px 20px; margin: 10px;">⬇️ Télécharger index.js</button>
        </a>
      </body>
    </html>
  `);
};
