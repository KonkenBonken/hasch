<h1 align="center">Welcome to hasch 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/hasch" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/hasch.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Install

```sh
npm i hasch
```

## Usage

```ts
import hasch from 'hasch'

hasch(new Uint8Array(123))             // 1794723560
hasch('abc')                           // 852579327
hasch(123)                             // 286822908
hasch(Buffer.alloc(5))                 // 311775565

hasch('abc', { seed: 123 })            // 2274156986 
hasch('abc', { seed: 246 })            // 2420894577

hasch('abc', { base: 0 })              // 852579327
hasch('abc', { base: 2 })              // "110010110100010101001111111111"
hasch('abc', { base: 3 })              // "2012102021111222010"
hasch('abc', { base: 36 })             // "e3lqf3"
hasch('abc', { base: 36, seed: 1000 }) // "wl0nhd"
```

## Author

👤 **Konrad Pettersson**

- Github: [`KonkenBonken`](https://github.com/KonkenBonken)
- LinkedIn: [`Konrad Pettersson`](https://linkedin.com/in/konrad-pettersson-167144206)
- Discord: `KonkenBonken#1337`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to create an [issue](https://github.com/KonkenBonken/hasch/issues) on GitHub.

<sub>_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_</sub>
