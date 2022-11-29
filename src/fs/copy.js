import * as fs from 'fs/promises';
import { doesExist } from "../utils/doesExist.js";
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { fileURLToPath } from 'url';

const copy = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    const filesFolderPath = getResolvedPath(_filename, 'files');
    const filesCopyFolderPath = getResolvedPath(_filename, 'files_copy');
    const filesFolderExists = await doesExist(filesFolderPath);
    const filesCopyFolderExists = await doesExist(filesCopyFolderPath);
    if (filesFolderExists && !filesCopyFolderExists) {
      await fs.cp(filesFolderPath, filesCopyFolderPath, { recursive: true });
      console.log('Folder "files" has been successfully copied to folder "files_copy"');
    } else {
      throwErrorMessage();
    }
  } catch(err) {
    console.error(err);
  }
};

copy();
