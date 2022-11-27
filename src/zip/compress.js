import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { pipeline } from 'stream/promises';

// Credit given to : https://nodejs.org/api/zlib.html

const fileToCompress = 'zip/files/fileToCompress.txt';
const compressedFile = 'zip/files/archive.gz';

const compress = async () => {
  try { 
    const gzip = createGzip();
    const source = createReadStream(getResolvedPath(fileToCompress));
    const destination = createWriteStream(getResolvedPath(compressedFile));

    await pipeline(source, gzip, destination);
    console.log(`File ${fileToCompress} is successfully compressed to ${compressedFile}`);

  } catch(err) {
    throwErrorMessage(err);
  }
};

await compress();