import fs from 'fs';
import path from 'path';
import url from 'url';

const [name] = process.argv.slice(2);
if (!name) {
  throw new Error('Please input the name of the Design pattern');
}

let entryPath;
for (const groupName of ['creational', 'structural', 'behavioral']) {
  const groupPath = path.resolve(import.meta.dirname, groupName);
  if (!fs.existsSync(groupPath)) {
    continue;
  }

  const patternDirName = fs
    .readdirSync(groupPath)
    .find((dirName) => new RegExp(`^${name}\\..+$`).test(dirName) || new RegExp(`^\\d+\\.${name}$`).test(dirName));
  if (!patternDirName) {
    continue;
  }

  entryPath = path.resolve(groupPath, patternDirName, 'index.ts');
}

if (!entryPath) {
  throw new Error('Design pattern not found');
}

await import(url.pathToFileURL(entryPath).href);
