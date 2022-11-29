import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

// Credit given to : https://nodejs.org/api/zlib.html

const decompress = async () => {
  try {
    const _filename = fileURLToPath(import.meta.url);
    const fileToDecompress = getResolvedPath(_filename, 'files', 'archive.gz');
    const decompressedFile = getResolvedPath(_filename, 'files', 'fileToCompress.txt');
    const unzip = createUnzip();
    const source = createReadStream(fileToDecompress);
    const destination = createWriteStream(decompressedFile);

    await pipeline(source, unzip, destination); 
    console.log(`File "archive.gz" is successfully decompressed to "fileToCompress.txt"`);
    
  } catch (err) {
    throwErrorMessage(err);
  }
};

await decompress();