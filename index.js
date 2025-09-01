const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Page principale
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SPIDER-NET Session ID</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          input, button { padding: 10px; margin: 5px; width: 80%; max-width: 400px; }
          button { cursor: pointer; background: black; color: white; border: none; }
          button:hover { background: #444; }
        </style>
      </head>
      <body>
        <h1>⚡ SPIDER-NET Secure Bot ⚡</h1>
        <p>Générez votre Session ID et déployez votre bot en quelques secondes.</p>
        <form action="/api/download" method="POST">
          <input type="text" name="sessionId" placeholder="Entrez votre Session ID" required />
          <br>
          <button type="submit">📥 Télécharger votre index.js prêt à l’emploi</button>
        </form>
      </body>
    </html>
  `);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

module.exports = app;
