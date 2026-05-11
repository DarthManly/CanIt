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

for (const requiredId of ['capabilityCube', 'cubeDetail', 'taxonomyMap', 'productDimensionList', 'valueChainList']) {
  if (!html.includes(requiredId)) {
    throw new Error(`Missing required UI mount point: ${requiredId}`);
  }
}

const main = readFileSync('src/main.js', 'utf8');
const leafIndustryCount = (main.match(/code: '[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ]'/g) || []).length;
const productCount = (main.match(/code: 'P\d+'/g) || []).length;
const valueChainCount = (main.match(/code: 'V\d+'/g) || []).length;
if (leafIndustryCount < 20) {
  throw new Error(`Expected at least 20 fourth-level industry leaves, found ${leafIndustryCount}`);
}
if (productCount < 5) {
  throw new Error(`Expected at least 5 product dimensions, found ${productCount}`);
}
if (valueChainCount < 6) {
  throw new Error(`Expected at least 6 value-chain stages, found ${valueChainCount}`);
}

console.log(
  `Static site validation passed with ${leafIndustryCount} fourth-level industries, ${productCount} product dimensions, and ${valueChainCount} value-chain stages.`,
);
