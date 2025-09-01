module.exports = async (req, res) => {
  const code = `
const { spawnSync, spawn } = require('child_process');
const { existsSync, writeFileSync } = require('fs');
const path = require('path');

const SESSION_ID = 'updateThis'; // <-- Remplace par ta vraie SESSION_ID

function startNode() {
  const child = spawn('node', ['index.js'], { cwd: 'PROJET-SPIDER-NET-BOZ', stdio: 'inherit' });
  child.on('exit', (code) => {
    if (code !== 0) {
      console.log('Redémarrage du bot...');
      startNode();
    }
  });
}

function cloneRepository() {
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/Junior1253/PROJET-SPIDER-NET-BOZ.git', 'PROJET-SPIDER-NET-BOZ'],
    { stdio: 'inherit' }
  );

  if (cloneResult.error) {
    throw new Error('Erreur lors du clonage du repo.');
  }

  const configPath = 'PROJET-SPIDER-NET-BOZ/config.env';
  writeFileSync(configPath, \`SESSION_ID=\${SESSION_ID}\`);
}

if (!existsSync('PROJET-SPIDER-NET-BOZ')) {
  cloneRepository();
}
startNode();
  `;

  res.setHeader("Content-disposition", "attachment; filename=index.js");
  res.setHeader("Content-Type", "application/javascript");
  res.end(code);
};
