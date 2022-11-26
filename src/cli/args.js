import { argv } from 'node:process';

const parseArgs = () => {
  argv.forEach((arg, index) => {
    if (arg.startsWith('--')) {
      console.log(`${arg.substring(2)} is ${argv[index + 1]}`);
    }
  });
};

parseArgs();