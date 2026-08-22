# String analyzer

<!-- maintenance-moved -->
> **Maintenance moved:** [`word-counter`](https://github.com/cig13zs/word-counter) contains the maintained implementation.
> This repository is kept as a read-only historical release.

Count words, characters, bytes, sentences, and paragraphs in a string.

[Open the web app](https://cig13zs.github.io/string-analyzer/)

The tool runs in the browser without analytics or uploads. It also includes a Manifest V3 extension with no requested permissions.

## Use it

Paste or enter a value, run the tool, then copy the result. The sample button provides a valid starting input.

## Local checks

```sh
node core.test.js
node site.test.js
```

## Extension

Open `chrome://extensions`, enable Developer mode, choose **Load unpacked**, and select the `extension` folder. A ready-to-load zip is included in the repository.

## License

[MIT](LICENSE). Support the project at [ko-fi.com/jju1s](https://ko-fi.com/jju1s).
