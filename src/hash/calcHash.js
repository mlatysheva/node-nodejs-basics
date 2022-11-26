import crypto from 'crypto';
import { readFile } from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';

const fileToHash = 'hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const content = await readFile(getResolvedPath(fileToHash));
  const hash = crypto.createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();