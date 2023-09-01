export const greetValidator = (name) => {
  return /^[j]/i.test(name) ? `Good Bye ${name}` : `Hello ${name}`;
};
