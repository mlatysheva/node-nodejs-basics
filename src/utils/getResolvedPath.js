import path, {dirname} from 'node:path';

// export const getResolvedPath = (relativePath) => {
//   const resolvedPath = path.resolve('src', relativePath);
//   return resolvedPath;
// }

export const getResolvedPath = (_filename, ...paths) => {
  const _dirname = dirname(_filename);
  const resolvedPath = path.join(_dirname, ...paths);
  console.log(`resolvedPath is ${resolvedPath}`);
  return resolvedPath;
}