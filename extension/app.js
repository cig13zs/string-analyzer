const sample = "The quick brown fox jumps over the lazy dog. It was a sunny afternoon, and the world was quiet. Perfect for coding.";

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const statsEl = document.getElementById('output-stats') || document.getElementById('stats');

function process() {
  const txt = inputEl.value;
  const res = WordCounter.analyze(txt);
  outputEl.value = JSON.stringify(res, null, 2);
  if (statsEl) statsEl.textContent = `${res.words} words | ${res.characters} chars | Reading time: ${res.readingTime}`;
}

document.getElementById('btn-run').addEventListener('click', process);
inputEl.addEventListener('input', process);
document.getElementById('btn-sample').addEventListener('click', () => { inputEl.value = sample; process(); });
document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(outputEl.value); alert('Copied text metrics!'); });
if (document.getElementById('btn-clear')) document.getElementById('btn-clear').addEventListener('click', () => { inputEl.value = ''; outputEl.value = ''; });
process();
