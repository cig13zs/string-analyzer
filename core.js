;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.WordCounter = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function analyze(text) {
    if (!text || typeof text !== 'string') {
      return { words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0, paragraphs: 0, readingTimeMinutes: 0 };
    }

    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\r?\n\s*\r?\n/).filter(p => p.trim().length > 0).length;

    // Average reading speed: 225 wpm, speaking speed: 130 wpm
    const readingTime = (words.length / 225).toFixed(1);
    const speakingTime = (words.length / 130).toFixed(1);

    return {
      words: words.length,
      characters: chars,
      charactersNoSpaces: charsNoSpace,
      sentences: sentences,
      paragraphs: paragraphs,
      readingTime: readingTime + ' min',
      speakingTime: speakingTime + ' min'
    };
  }

  return { analyze: analyze };
});
