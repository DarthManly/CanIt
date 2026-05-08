const { readFileSync, existsSync } = require('node:fs');

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];
for (const file of requiredFiles) {
  if (!existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = readFileSync('index.html', 'utf8');
const requiredAnchors = ['#arena', '#leaderboard', '#method', '#taxonomy'];
for (const anchor of requiredAnchors) {
  if (!html.includes(anchor)) {
    throw new Error(`Missing navigation anchor: ${anchor}`);
  }
}

const main = readFileSync('src/main.js', 'utf8');
const nodeCount = (main.match(/l1:/g) || []).length;
if (nodeCount < 20) {
  throw new Error(`Expected at least 20 industry nodes, found ${nodeCount}`);
}

console.log(`Static site validation passed with ${nodeCount} industry nodes.`);
