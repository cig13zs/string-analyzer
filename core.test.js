const assert = require('assert');
const WordCounter = require('./core');

const res = WordCounter.analyze('Hello world! This is a test sentence. Here is another one.');
assert.strictEqual(res.words, 11);
assert.strictEqual(res.sentences, 3);
console.log('ok, all WordCounter assertions passed');
