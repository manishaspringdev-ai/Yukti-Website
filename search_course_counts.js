const fs = require('fs');
const path = require('path');

function searchFiles(dir, regex) {
  const results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...searchFiles(fullPath, regex));
    } else if (/\.(jsx?|tsx?|html)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (regex.test(line)) {
          results.push({ file: fullPath.replace(/\\/g, '/'), line: idx + 1, text: line.trim() });
        }
      });
    }
  }
  return results;
}

const res = searchFiles('./src', /\b(16|19)\+?\s*(courses?|industry|programs?|tracks?|master|career)/i);
console.log(JSON.stringify(res, null, 2));
