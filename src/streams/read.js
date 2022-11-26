import { createReadStream } from 'fs';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';

const fileToRead = 'streams/files/fileToRead.txt';

const read = async () => {
  const readableStream = await createReadStream(getResolvedPath(fileToRead));

  readableStream.on('error', () => {
    throwErrorMessage();
  })

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  }) 
};

await read();