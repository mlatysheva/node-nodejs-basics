import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { doesExist } from '../utils/doesExist.js';

const remove = async () => {
  const fileToRemoveExists = await doesExist(getResolvedPath('fs/files/fileToRemove.txt'));
  if (fileToRemoveExists) {
    await fs.rm(getResolvedPath('fs/files/fileToRemove.txt'))
  } else {
    throwErrorMessage();
  }
}

await remove();