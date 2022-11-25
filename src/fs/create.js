import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const create = async () => {
  try {
    await fs.writeFile(getResolvedPath('fs/files/fresh.txt'), 'I am fresh and young', { flag: 'wx+' });
  } catch(err) {
    throwErrorMessage();
  }
};

create();