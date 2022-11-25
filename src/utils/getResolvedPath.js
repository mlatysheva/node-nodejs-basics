import path from 'path';
import { fileURLToPath } from 'url';

export const getResolvedPath = (relativePath) => {
  const resolvedPath = path.resolve('src', relativePath);
  console.log(`resolvedPath is ${resolvedPath}`);
  return resolvedPath;
}