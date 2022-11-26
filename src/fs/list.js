import * as fs from 'fs/promises';
import { doesExist } from '../utils/doesExist.js';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const list = async () => {
  const filesFolderExists = await doesExist(getResolvedPath('fs/files'));
  try {
    if (filesFolderExists) {
      await (await fs.readdir(getResolvedPath('fs/files'), { withFileTypes: true }))
        .forEach((file) => {
          console.log(file.name);
      });
    } else {
      throwErrorMessage();
    }
  } catch(err) {
    console.error(err);
  }
};

await list();
