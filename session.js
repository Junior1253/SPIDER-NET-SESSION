const QRCode = require("qrcode");

module.exports = async (req, res) => {
  const fakeSessionId = "SESSION_" + Math.random().toString(36).substring(2, 15);

  const qr = await QRCode.toDataURL(fakeSessionId);

  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h2>Voici ton QR Code</h2>
        <img src="${qr}" alt="QR Code" />
        <p><strong>SESSION_ID:</strong> ${fakeSessionId}</p>
        <a href="/api/ui">⬅️ Retour</a>
      </body>
    </html>
  `);
};
