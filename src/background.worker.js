import argon2 from "argon2-browser";

onmessage = async ev => {
  let result;
  try {
    result = { data: await argon2.hash(ev.data)};
  } catch (e) {
    result = { error: e };
  }
  postMessage(result);
}
