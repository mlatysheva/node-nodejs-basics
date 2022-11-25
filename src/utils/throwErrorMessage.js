export const throwErrorMessage = (message = 'FS operation failed!') => {
  throw new Error(message);
}