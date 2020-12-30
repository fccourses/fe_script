function sum() {
  console.log(arguments);

  let result = null;

  debugger;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
