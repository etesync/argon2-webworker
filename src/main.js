import Worker from "./background.worker.js";
export { ArgonType } from "argon2-browser";

export function hash(options) {
  return new Promise((resolve, reject) => {
    try {
      const worker = new Worker();
      worker.onmessage = (event) => {
        if (event.error) {
          reject(event.error);
        } else {
          resolve(event.data.data);
        }
      }
      worker.postMessage(options);
    } catch (e) {
      reject(e);
    }
  });
};
