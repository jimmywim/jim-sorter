export function debounce(callback, delay = 300, ...args) {
  const timerClear = () => clear = true;
  var clear = true;
  return event => {
    if (clear) {
      clear = false;
      setTimeout(timerClear, delay);
      callback(event, ...args);
    }
  }
}