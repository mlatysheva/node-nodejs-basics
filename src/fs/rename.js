import * as fs from 'fs/promises';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { doesExist } from '../utils/doesExist.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const rename = async () => {
  try {
    const wrongFileExists = await doesExist(getResolvedPath('fs/files/wrongFilename.txt'));
    const properFileExists = await doesExist(getResolvedPath('fs/files/properFilename.md'));
    if (wrongFileExists && !properFileExists) {
      await fs.rename(getResolvedPath('fs/files/wrongFilename.txt'), getResolvedPath('fs/files/properFilename.md'))
    } else {
      throwErrorMessage();
    }
  } catch(err) {
    console.error(err);
  }
};

rename();