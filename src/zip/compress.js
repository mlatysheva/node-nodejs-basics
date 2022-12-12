import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

// Credit given to : https://nodejs.org/api/zlib.html

const compress = async () => {
  try { 
    const _filename = fileURLToPath(import.meta.url);
    const fileToCompress = getResolvedPath(_filename, 'files', 'fileToCompress.txt');
    const compressedFile = getResolvedPath(_filename, 'files', 'archive.gz');
    const gzip = createGzip();
    const source = createReadStream(fileToCompress);
    const destination = createWriteStream(compressedFile);

    await pipeline(source, gzip, destination);
    console.log(`File "fileToCompress.txt" is successfully compressed to "archive.gz"`);

  } catch(err) {
    throwErrorMessage(err);
  }
};

await compress();