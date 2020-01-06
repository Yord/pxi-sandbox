![pf-sandbox teaser][teaser]

`pf-sandbox` is a sandbox for developing plugins for pf, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![node version][node-shield]][node]
[![license][license-shield]][license]
[![PRs Welcome][prs-shield]][pfx-how-to-contribute]
[![linux unit tests status][linux-unit-tests-shield]][actions]
[![macos unit tests status][macos-unit-tests-shield]][actions]
[![windows unit tests status][windows-unit-tests-shield]][actions]

## Installation

`pf-sandbox` must be cloned to your user folder as follows:

```bash
$ git clone https://github.com/Yord/pf-sandbox.git ~/.pfrc
```

After cloning the module, install its dependencies:

```bash
$ cd ~/.pfrc
$ npm install
```

For a much more detailed description, see the [`.pfrc` module documentation][pf-pfrc-module] in the [`pf` repository][pf].

## Reporting Issues

Please report issues [at the `pf` repository][issues]!

## License

`pf-sandbox` is [MIT licensed][license].

[npm-package]: https://www.npmjs.com/package/@pfx/pf
[license]: https://github.com/Yord/pf-sandbox/blob/master/LICENSE
[teaser]: ./teaser.gif
[pf]: https://github.com/Yord/pf
[actions]: https://github.com/Yord/pf-sandbox/actions
[license-shield]: https://img.shields.io/badge/license-MIT-yellow.svg?labelColor=313A42
[issues]: https://github.com/Yord/pf/issues
[node-shield]: https://img.shields.io/node/v/@pfx/pf?color=red&labelColor=313A42
[node]: https://nodejs.org/
[prs-shield]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42
[pfx-how-to-contribute]: https://github.com/Yord/pf
[linux-unit-tests-shield]: https://github.com/Yord/pf-sandbox/workflows/linux/badge.svg?branch=master
[macos-unit-tests-shield]: https://github.com/Yord/pf-sandbox/workflows/macos/badge.svg?branch=master
[windows-unit-tests-shield]: https://github.com/Yord/pf-sandbox/workflows/windows/badge.svg?branch=master
[pf-pfrc-module]: https://github.com/Yord/pf#pfrc-module