import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const fileToRead = 'fs/files/fileToRead.txt';

const read = async () => {
  try {
    const content = await fs.readFile(getResolvedPath(fileToRead), 'utf8');
    console.log(content);
  } catch(err) {
    throwErrorMessage();
  }
};

await read();