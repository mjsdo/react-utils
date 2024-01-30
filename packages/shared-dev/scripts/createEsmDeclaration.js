const path = require('node:path');

const fsExtra = require('fs-extra');
const glob = require('glob');

const createEsmDeclarations = () => {
  const distPath = path
    .join(__dirname, '../dist/**/*.d.ts')
    .replace(/\\/g, '/');
  const allFiles = glob.sync(distPath);
  for (const file of allFiles) {
    const dest = file.replace('d.ts', 'd.mts');
    fsExtra.copySync(file, dest);
  }
};

createEsmDeclarations();
