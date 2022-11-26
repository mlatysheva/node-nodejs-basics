import { createWriteStream } from 'fs';
import { getResolvedPath } from '../utils/getResolvedPath.js';

const fileToWrite = 'streams/files/fileToWrite.txt';

export const write = async () => {
  process.stdout.write('Enter text or type "exit" to quit:\n');

  const writeableStream = createWriteStream(getResolvedPath(fileToWrite));

  process.stdin.on('data', (input) => {
    const entry = input.toString();
    if (entry.trim() == 'exit') {
      process.exit();
    } else {
      writeableStream.write(input.toString());
    }
  });
};

await write();