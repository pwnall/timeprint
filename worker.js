/**
 * @returns {number}
 */
function performanceNowResolution() {
  const t0 = performance.now();
  while (true) {
    const t1 = performance.now();
    if (t1 !== t0)
      return t1 - t0;
  }
}

/**
 * @returns {string}
 */
function runCommand() {
  return `performance.now() resolution: ${performanceNowResolution()}`;
}

self.onmessage = message => {
  switch (message.cmd) {
    case 'run':
      self.postMessage({ output: runCommand() });
  }
};
