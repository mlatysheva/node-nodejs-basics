import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { doesExist } from '../utils/doesExist.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { fileURLToPath } from 'url';

const rename = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    const wrongFile = getResolvedPath(_filename, 'files', 'wrongFilename.txt');
    const properFile = getResolvedPath(_filename, 'files', 'properFilename.md');
    const wrongFileExists = await doesExist(wrongFile);
    const properFileExists = await doesExist(properFile);
    if (wrongFileExists && !properFileExists) {
      await fs.rename(wrongFile, properFile);
      console.log('The file "wrongFilename.txt" was successfully renamed into "properFilename.md"');
    } else {
      throwErrorMessage();
    }
  } catch(err) {
    console.error(err);
  }
};

rename();