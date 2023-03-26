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

  hasch(new Uint8Array(123))             === 328550458801291844070341966987876531409n,
  hasch('abc')                           === 30216508460253319331260144576202890925n
  hasch(123)                             === 235074070585844934564733336785530021059n
  hasch(Buffer.alloc(5))                 === 82223369041381735457708905440885830446n

  hasch('abc', { seed: 123 })            === 266221380790302914276811936392392262090n
  hasch('abc', { seed: 246 })            === 268273496397672601563576200830246633940n

  hasch('abc', { base: 8 })              === "265667634335613025344536104026336337257255"
  hasch('abc', { base: 12 })             === "617b98437b43184529042060a7607120125"
  hasch('abc', { base: 36 })             === "1cg66nyuy96rto54mr28cm84t"
  hasch('abc', { base: 36, seed: 1000 }) === "7v1fb64sz40yaulnbbn5uogpr"

  hasch('abc', { base: 36, length: 6 })  === "1cg66n"
  hasch('abc', { base: 36, length: 20 }) === "1cg66nyuy96rto54mr28"
  hasch('abc', { base: 36, length: 30 }) === "000001cg66nyuy96rto54mr28cm84t"
```

## Author

👤 **Konrad Pettersson**

- Github: [`KonkenBonken`](https://github.com/KonkenBonken)
- LinkedIn: [`Konrad Pettersson`](https://linkedin.com/in/konrad-pettersson-167144206)
- Discord: `KonkenBonken#1337`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to create an [issue](https://github.com/KonkenBonken/hasch/issues) on GitHub.

<sub>_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_</sub>
