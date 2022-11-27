import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { throwErrorMessage } from '../utils/throwErrorMessage.js';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { pipeline } from 'stream/promises';

// Credit given to : https://nodejs.org/api/zlib.html

const fileToDecompress = 'zip/files/archive.gz';
const decompressedFile = 'zip/files/fileToCompress.txt';

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const source = createReadStream(getResolvedPath(fileToDecompress));
    const destination = createWriteStream(getResolvedPath(decompressedFile));

    await pipeline(source, unzip, destination); 
    console.log(`File ${fileToDecompress} is successfully decompressed to ${decompressedFile}`);
    
  } catch (err) {
    throwErrorMessage(err);
  }
};

await decompress();