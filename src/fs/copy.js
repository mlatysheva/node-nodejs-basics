import * as fs from 'fs/promises';
import { folderExists } from "../utils/folderExists.js";
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const copy = async () => {
  try {
    const filesFolderExists = await folderExists(getResolvedPath('fs/files'));
    const filesCopyFolderExists = await folderExists(getResolvedPath('fs/files_copy'));
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
