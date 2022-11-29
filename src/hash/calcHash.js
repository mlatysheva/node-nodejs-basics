import crypto from 'crypto';
import { readFile } from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    const fileToHash = getResolvedPath(_filename, 'files', 'fileToCalculateHashFor.txt');

    const content = await readFile(fileToHash);
    const hash = crypto.createHash('sha256').update(content).digest('hex');
    console.log(`The hash for the file "fileToCalculateHashFor.txt" is ${hash}`);
  } catch(err) {
    console.error(err);
  }
};

await calculateHash();