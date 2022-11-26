import { env } from 'node:process';

const parseEnv = () => {
  Object.keys(process.env).forEach((item) => {
    if (item.startsWith('RSS_')) {
      console.log(`${item}=${env[item]}`);
    }
  });
};

parseEnv();