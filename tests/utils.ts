export const sleep = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
export const log = (...args: any[]) => {
  console.log(...[...args, new Date().getTime()]);
};
