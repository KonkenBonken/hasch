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

  hasch(new Uint8Array(123))             === 329235993716377293806186649522918669518n
  hasch('abc')                           === 133147771053349843105193998924167742055n
  hasch(123)                             === 283825537867327248663696416593378114023n
  hasch(Buffer.alloc(5))                 === 49955116314016825874015941403329333188n
  hasch(true)                            === 150479606365948793785668837958725443536n
  hasch(123456n)                         === 130319799601172616329867553786126566458n
  hasch(new Date('2025-01-25'))          === 168775973375590997000841845937227583553n
  hasch(/abc/gi)                         === 234725142026940655262578860774808203504n
  hasch(new Error('abc'))                === 136767670103793469676517112123264489677n
  hasch(['abc', 123, false])             === 235420182704928267424669892444899362043n
  hasch(new Map([['a', 1]]))             === 2122105882539734952012980404045259426n
  hasch(new Set(['a', 1]))               === 201757903028860370997414747585367718303n
  hasch({ a: 1 })                        === 134240345615721032347562557264699527929n

  hasch('abc', { seed: 123 })            === 230655312275973925400513608974157726309n
  hasch('abc', { seed: 246 })            === 26379508875920428830785225613316203014n

  hasch('abc', { base: 8 })              === "1441265176316106065623406146045754755701147"
  hasch('abc', { base: 64 })             === "1AaRfPe8MROs6cMBZDJU9D"
  hasch('abc', { base: 64, length: 6 })  === "1AaRfP"
  hasch('abc', { base: 64, seed: 1000 }) === "EEac4Z0v5fJXv+lnUVbBJ"
  hasch('abc', { base: '0oOöÖQ' })       === "QQöOQöÖoÖQÖÖÖ0ö0O00öoÖOOoQoo00oÖQöOÖ0öÖ0QoO0öÖQQQ"

  hasch('abc', { decimal: true })        === 0.3998924167742055
  hasch('abc', { choose: [2, 4, 'a'] })  === 4
```

## Author

👤 **Konrad Pettersson**

- Github: [`KonkenBonken`](https://github.com/KonkenBonken)
- LinkedIn: [`Konrad Pettersson`](https://linkedin.com/in/konrad-pettersson)
- Discord: `KonkenBonken`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to create an [issue](https://github.com/KonkenBonken/hasch/issues) on GitHub.

<sub>_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_</sub>
