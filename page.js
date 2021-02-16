function ready() {
  const output = document.getElementById('output');

  const worker = new Worker('worker.js');
  worker.postMessage({ cmd: 'run' });
  worker.onmessage = message => {
    output.textContent = message.output;
  };
}

if (document.readyState == 'load') {
  ready();
} else {
  window.addEventListener('load', ready, { once: true, passive: true });
}
