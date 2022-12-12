import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { doesExist } from '../utils/doesExist.js';
import { fileURLToPath } from 'url';

const remove = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    const fileToRemove = getResolvedPath(_filename, 'files', 'fileToRemove.txt')
    const fileToRemoveExists = await doesExist(fileToRemove);
    if (fileToRemoveExists) {
      await fs.rm(fileToRemove);
      console.log(`File "fileToRemove.txt" was successfully deleted.`);
    } else {
      throwErrorMessage();
    }
  } catch(err) {
    throwErrorMessage();
  }
}

await remove();