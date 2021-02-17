const worker = new Worker('worker.js');

function ready() {
  const output = document.getElementById('output');

  worker.postMessage({ cmd: 'run' });
  worker.onmessage = message => {
    output.textContent = message.data.output;
  };
}

if (document.readyState === 'complete') {
  ready();
} else {
  window.addEventListener('load', ready, { once: true, passive: true });
}
