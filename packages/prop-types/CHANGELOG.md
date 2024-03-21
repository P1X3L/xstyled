# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2024-03-21)

### Bug Fixes

- **esm:** fix module exports ([5624604](https://github.com/P1X3L/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/P1X3L/xstyled/issues/336)
- fix missing files ([18a22cd](https://github.com/P1X3L/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))
- move away from mjs extension to work in more environments ([9098b83](https://github.com/P1X3L/xstyled/commit/9098b83407888dea985081029dc93c18d5bb6eab))
- **prop-types:** add bool option to the prop-types to use it with col and row props ([#142](https://github.com/P1X3L/xstyled/issues/142)) ([3a835ba](https://github.com/P1X3L/xstyled/commit/3a835ba97177dbe0a1ef3848e16b6e1b8373f1e0))

### Code Refactoring

- fix tests & refactor styles ([c86c1b4](https://github.com/P1X3L/xstyled/commit/c86c1b421531f0eac6cbbca19ab3bb818bc0794d))

### Features

- add @xstyled/prop-types utility ([73782fd](https://github.com/P1X3L/xstyled/commit/73782fd3378c78100866c94a8dae4fa091d2f950)), closes [#23](https://github.com/P1X3L/xstyled/issues/23)
- add back borders utilities ([391fc04](https://github.com/P1X3L/xstyled/commit/391fc04e877f6d0eb2cc464748630c17aebeed88))
- add typings ([#144](https://github.com/P1X3L/xstyled/issues/144)) ([bb77c0a](https://github.com/P1X3L/xstyled/commit/bb77c0aa79d1b703dd93a4cf30f102ed1011c7f4))
- add useTheme & useUp / useDown ([36d2909](https://github.com/P1X3L/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))
- export `styled` as a named export ([410cd67](https://github.com/P1X3L/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))
- **states:** put states in theme ([#206](https://github.com/P1X3L/xstyled/issues/206)) ([fe74ec9](https://github.com/P1X3L/xstyled/commit/fe74ec9cbb6ca6876737f0ffc965534193c8bb12))
- various refactoring & typing improvements ([84d6291](https://github.com/P1X3L/xstyled/commit/84d62919dff7a811b2116fab0466cdb71986d81e))

### BREAKING CHANGES

- Box has been removed, "cssProperty" has been renamed "css", "getBreakpoints" has been renamed "getScreens", "useBreakpoints" has been renamed "useScreens", "th.timingFunctions" has been renamed "th.timingFunction".
- **states:** states are now passed in object.
- remove default fontSizes.

# [3.7.0](https://github.com/gregberge/xstyled/compare/v3.6.0...v3.7.0) (2022-10-05)

**Note:** Version bump only for package @xstyled/prop-types

## [3.5.1](https://github.com/gregberge/xstyled/compare/v3.5.0...v3.5.1) (2022-01-10)

### Bug Fixes

- fix missing files ([18a22cd](https://github.com/gregberge/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))

# [3.5.0](https://github.com/gregberge/xstyled/compare/v3.4.0...v3.5.0) (2022-01-10)

### Bug Fixes

- **esm:** fix module exports ([5624604](https://github.com/gregberge/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/gregberge/xstyled/issues/336)

# [3.2.0](https://github.com/gregberge/xstyled/compare/v3.1.2...v3.2.0) (2021-12-22)

### Features

- export `styled` as a named export ([410cd67](https://github.com/gregberge/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))

# [3.1.0](https://github.com/gregberge/xstyled/compare/v3.0.3...v3.1.0) (2021-10-02)

**Note:** Version bump only for package @xstyled/prop-types

## [3.0.2](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v3.0.1...v3.0.2) (2021-06-18)

### Bug Fixes

- move away from mjs extension to work in more environments ([9098b83](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/commit/9098b83407888dea985081029dc93c18d5bb6eab))

## [2.2.2](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v2.2.1...v2.2.2) (2021-02-03)

**Note:** Version bump only for package @xstyled/prop-types

## [1.19.1](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v1.19.0...v1.19.1) (2020-11-04)

### Bug Fixes

- **prop-types:** add bool option to the prop-types to use it with col and row props ([#142](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/issues/142)) ([3a835ba](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/commit/3a835ba97177dbe0a1ef3848e16b6e1b8373f1e0))

# [1.19.0](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v1.18.1...v1.19.0) (2020-09-10)

**Note:** Version bump only for package @xstyled/prop-types

## [1.17.2](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v1.17.1...v1.17.2) (2020-07-18)

**Note:** Version bump only for package @xstyled/prop-types

## [1.17.1](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v1.17.0...v1.17.1) (2020-04-29)

**Note:** Version bump only for package @xstyled/prop-types

# [1.16.0](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v1.15.1...v1.16.0) (2020-02-02)

**Note:** Version bump only for package @xstyled/prop-types

## [1.15.1](https://github.com/gregberge/xstyled/tree/master/packages/prop-types/compare/v1.15.0...v1.15.1) (2019-12-29)

**Note:** Version bump only for package @xstyled/prop-types

# [1.14.0](https://github.com/gregberge/xstyled/compare/v1.13.1...v1.14.0) (2019-11-13)

### Features

- add useTheme & useUp / useDown ([36d2909](https://github.com/gregberge/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))

# [1.11.0](https://github.com/gregberge/xstyled/compare/v1.10.1...v1.11.0) (2019-08-28)

**Note:** Version bump only for package @xstyled/prop-types

# [1.3.0](https://github.com/gregberge/xstyled/compare/v1.2.0...v1.3.0) (2019-06-11)

### Features

- add @xstyled/prop-types utility ([73782fd](https://github.com/gregberge/xstyled/commit/73782fd)), closes [#23](https://github.com/gregberge/xstyled/issues/23)
