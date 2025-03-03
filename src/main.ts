import fs from 'fs';
import path from 'path';
import url from 'url';

const [name] = process.argv.slice(2);
if (!name) {
  throw new Error('Please input the name of the design pattern');
}

for await (const groupName of ['creational', 'structural', 'behavioral']) {
  const groupPath = path.resolve(import.meta.dirname, groupName);
  if (!fs.existsSync(groupPath)) {
    continue;
  }

  const patternDirName = fs.readdirSync(groupPath).find((dirName) => dirName.endsWith(name));
  if (!patternDirName) {
    continue;
  }

  const entryPath = path.resolve(groupPath, patternDirName, 'index.ts');
  await import(url.pathToFileURL(entryPath).href);
}
