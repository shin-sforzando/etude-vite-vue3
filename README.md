# etude-vite-vue3

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/etude-vite-vue3)](https://github.com/shin-sforzando/etude-vite-vue3/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/etude-vite-vue3/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/etude-vite-vue3/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

| ![Screenshot 1](https://placehold.jp/32/3d4070/ffffff/720x480.png?text=Screenshot%201) | ![Screenshot 2](https://placehold.jp/32/703d40/ffffff/720x480.png?text=Screenshot%202) |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                                      Screenshot 1                                      |                                      Screenshot 2                                      |

<!-- Synopsis -->

**etude-vite-vue3** is a repository for studying Vite + Vue3.

---

<!-- TOC -->

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Setup](#setup)
    - [Reveal secrets](#reveal-secrets)
    - [Environment Variables](#environment-variables)
  - [Develop](#develop)
  - [Document](#document)
    - [CHANGELOG.md](#changelogmd)
  - [Deploy](#deploy)
- [Misc](#misc)
  - [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js
  - [Vite](https://ja.vitejs.dev)
  - Vue 3
  - ESLint
  - Stylelint
  - Prettier
  - Storybook
- [git-secret](https://git-secret.io)

## How to

```shell
$ yarn run
<snip>
   - build
      vue-tsc && vite build
   - dev
      vite
   - preview
      vite preview
```

### Setup

#### Reveal secrets

To reveal secret files, `yarn reveal`.

To hide secret files, `yarn hide`.

#### Environment Variables

```.env
(T. B. D.)
```

### Develop

`yarn dev` to start development server.

### Document

#### CHANGELOG.md

To update CHANGELOG.md, `git cliff --unreleased --output CHANGELOG.md`.

### Deploy

(T. B. D.)

## Misc

### Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
