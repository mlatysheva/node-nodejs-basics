import { createReadStream } from 'fs';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { fileURLToPath } from 'url';


const read = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    const fileToRead = getResolvedPath(_filename, 'files', 'fileToRead.txt');
    const readableStream = await createReadStream(fileToRead);

    readableStream.on('error', () => {
      throwErrorMessage();
    })

    readableStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    })
  } catch(err) {
    console.error(err);
  }
};

await read();