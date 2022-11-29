import { spawn } from 'node:child_process';
import { getResolvedPath } from '../utils/getResolvedPath.js';
import { fileURLToPath } from 'node:url';

const _filename = fileURLToPath(import.meta.url);
const scriptToExecute = getResolvedPath(_filename, 'files', 'script.js');

/**
 * @param {*} args of Array type 
 */

const spawnChildProcess = async (args) => {
  try {
    const child = spawn('node', [scriptToExecute, ...args]);

    process.stdin.on('data',(msg) => {
      child.stdin.write(msg);
    });
    
    child.stdout.on('data',(msg) => {
      process.stdout.write(msg);
    });
  } catch(err) {
    console.error(err);
  }  
};

spawnChildProcess(['--ls, node']);
