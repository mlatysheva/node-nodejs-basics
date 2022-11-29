import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { fileURLToPath } from 'url';

const create = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    await fs.writeFile(getResolvedPath(_filename, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx+' });
    console.log(`The file "fresh.txt" has been successfully written.`);
  } catch(err) {
    throwErrorMessage();
  }
};

create();