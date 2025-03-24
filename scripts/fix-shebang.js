const fs = require('fs');
const path = require('path');

const cliPath = path.join(__dirname, '..', 'dist', 'cli.js');
const content = fs.readFileSync(cliPath, 'utf8');

const contentWithoutShebang = content.replace(/^#!.*\n/, '');

const newContent = `#!/usr/bin/env node\r\n${contentWithoutShebang}`;

fs.writeFileSync(cliPath, newContent, { encoding: 'utf8', flag: 'w' });
console.log('✅ Added shebang to CLI file');
