# Visual Regression Testing Comparison

VRT ライブラリ・サービスをいくつか試したリポジトリ。

## 本リポジトリに含まれる VRT ライブラリ・サービス

- [reg-suit](https://github.com/reg-viz/reg-suit) & Storycap
- [Chromatic](https://www.chromatic.com/)
- [Playwright](https://playwright.dev/docs/test-snapshots)
- [Playwright Component Tests (experimental)](https://playwright.dev/docs/test-components)
- [lost-pixel](https://github.com/lost-pixel/lost-pixel)

## 各ディレクトリ・ファイルについて

### reg-suit

- 設定ファイル: [`regconfig.json`](./regconfig.json)
- CI 設定ファイル: [`.github/workflows/reg-suit.yml`](./.github/workflows/reg-suit.yml)
- テストディレクトリ: なし
- 実行コマンド:
  - `yarn storycap`: Storybook の内容をキャプチャ
  - `yarn reg-suit`

### Chromatic

- 設定ファイル: なし
- CI 設定ファイル: [`.github/workflows/chromatic.yml`](./.github/workflows/chromatic.yml)

### Playwright

- 設定ファイル: [`playwright.config.js`](./playwright.config.js)
- CI 設定ファイル: [`.github/workflows/playwright.yml`](./.github/workflows/playwright.yml)
- 画像出力先ディレクトリ: [`test-results/`](./test-results/)
- テストディレクトリ: [`tests/`](./tests/)
- 実行コマンド: `yarn playwright`

### Playwright Component Tests (experimental)

- 設定ファイル: [`playwright-ct.config.js`](./playwright-ct.config.js)
- CI 設定ファイル: なし
- 画像出力先ディレクトリ: [`__snapshots__/`](./__snapshots__/)
- テストディレクトリ: [`tests-ct/`](./tests-ct/)
- 実行コマンド: `yarn playwright-ct`

### lost-pixel

- 設定ファイル: [`lostpixel.config.js`](./lostpixel.config.js)
- CI 設定ファイル: [`.github/workflows/lost-pixel.yml`](./.github/workflows/lost-pixel.yml)
  - および [`.github/workflows/update-baselines.yml`](./.github/workflows/update-baselines.yml) （差分を PR として出すための Workflow）
- 画像出力先ディレクトリ: [`.lostpixel/`](./.lostpixel/)
- テストディレクトリ: なし
- 実行コマンド: `yarn lost-pixel` & `yarn lost-pixel:update`
