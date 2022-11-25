import * as fs from 'fs/promises';
import { doesExist } from "../utils/doesExist.js";
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const copy = async () => {
  try {
    const filesFolderExists = await doesExist(getResolvedPath('fs/files'));
    const filesCopyFolderExists = await doesExist(getResolvedPath('fs/files_copy'));
    if (filesFolderExists && !filesCopyFolderExists) {
      await fs.cp(getResolvedPath('fs/files'), getResolvedPath('fs/files_copy'), { recursive: true })
    } else {
      throwErrorMessage();
    }
  } catch(err) {
    console.error(err);
  }
};

copy();
