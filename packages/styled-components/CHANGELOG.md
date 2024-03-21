# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2024-03-21)

### Bug Fixes

- add border-width utility ([df4c47f](https://github.com/P1X3L/xstyled/commit/df4c47fdc0cbc83db248d572e0a63ba6123fea47))
- do not export styled-components internals ([3f98ca5](https://github.com/P1X3L/xstyled/commit/3f98ca57594311befbca355e27de78b6db8b8954)), closes [#37](https://github.com/P1X3L/xstyled/issues/37)
- **esm:** fix module exports ([5624604](https://github.com/P1X3L/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/P1X3L/xstyled/issues/336)
- explicit exports from styled-components ([#5](https://github.com/P1X3L/xstyled/issues/5)) ([0f0204f](https://github.com/P1X3L/xstyled/commit/0f0204f56ced6f22a968a6e993864289cdc9d6e1)), closes [#4](https://github.com/P1X3L/xstyled/issues/4)
- fix missing files ([18a22cd](https://github.com/P1X3L/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))
- fix styled components module name ([#284](https://github.com/P1X3L/xstyled/issues/284)) ([7c979d0](https://github.com/P1X3L/xstyled/commit/7c979d0d69698629a516cfa5b8582cbc01aed1cb))
- increase box specificity ([cb62872](https://github.com/P1X3L/xstyled/commit/cb62872f4d17e159afb61b96a688fb58c3e5c76e))
- move away from mjs extension to work in more environments ([9098b83](https://github.com/P1X3L/xstyled/commit/9098b83407888dea985081029dc93c18d5bb6eab))
- prevent system props on boxes ([4ec5044](https://github.com/P1X3L/xstyled/commit/4ec5044b2814229d0378630e00422843cd5c39d3))
- remove unused code ([7e1b8d3](https://github.com/P1X3L/xstyled/commit/7e1b8d3671c9cbd0228ecdb01452560b79b42702))
- stick to spec for sizes ([a7d4e01](https://github.com/P1X3L/xstyled/commit/a7d4e01a286ed7d2c19d282754c0f8462f267131))
- **styled-components:** fix createGlobalStyle ([8c5d386](https://github.com/P1X3L/xstyled/commit/8c5d3861a536291cffa9dd23420d242fea71bd9f)), closes [#22](https://github.com/P1X3L/xstyled/issues/22)
- **styled-components:** fix ESM interop ([fa93d92](https://github.com/P1X3L/xstyled/commit/fa93d92927a03e450562470690208e22f045495f)), closes [#338](https://github.com/P1X3L/xstyled/issues/338)
- **styled-components:** fix keyframes error in v5 ([ccf3469](https://github.com/P1X3L/xstyled/commit/ccf3469063c66f572c14bab33b85f5f39564348e))
- **styled-components:** support createGlobalStyle ([ec798b4](https://github.com/P1X3L/xstyled/commit/ec798b407494aaae195e166708c2a77acafb1f98))
- styled.box with rule ordering instead of specificity ([9ac9a21](https://github.com/P1X3L/xstyled/commit/9ac9a215181c91d33ae101c3bb8c2ee1366a9e1e))
- support .attrs method ([#8](https://github.com/P1X3L/xstyled/issues/8)) ([3ee0814](https://github.com/P1X3L/xstyled/commit/3ee08149ab6109365faeda873b9c4fd65478d4ba)), closes [#7](https://github.com/P1X3L/xstyled/issues/7)
- support negative values from theme objects ([4b03dfc](https://github.com/P1X3L/xstyled/commit/4b03dfc8a0baaed89e72dc4783e91d9c6f440b24)), closes [#27](https://github.com/P1X3L/xstyled/issues/27)
- **types:** export XStyled, X, XStyledSet ([#392](https://github.com/P1X3L/xstyled/issues/392)) ([9955f61](https://github.com/P1X3L/xstyled/commit/9955f61aa7e5ab1eb8ae75ea5c6907faa47dada3))
- **types:** fix types of CSS objects ([#260](https://github.com/P1X3L/xstyled/issues/260)) ([fbbf91e](https://github.com/P1X3L/xstyled/commit/fbbf91eb1ffc5c022ab1ddf44b2b236824497913))
- **types:** invalid color prop ([0660565](https://github.com/P1X3L/xstyled/commit/0660565773898ec4f87eb66f90a42d5511753953))
- **types:** replace ArgType by Parameters ([443407e](https://github.com/P1X3L/xstyled/commit/443407efafbac1b687ee9dba40ac81259e929082))
- **typings:** fix styled-components types ([#145](https://github.com/P1X3L/xstyled/issues/145)) ([f6c4cab](https://github.com/P1X3L/xstyled/commit/f6c4cab2042ef5d14152427925269a12db5a0816))
- use React.forwardRef in createSystemComponent ([6c7da13](https://github.com/P1X3L/xstyled/commit/6c7da13a488d036771c9eee59d6d33ec3703b40b))
- x.\* must pass through props for as={Component} ([04f845f](https://github.com/P1X3L/xstyled/commit/04f845f66fad8b381575e420b5a1dfc287154192)), closes [/github.com/gregberge/xstyled/pull/231#issuecomment-817353699](https://github.com//github.com/gregberge/xstyled/pull/231/issues/issuecomment-817353699)

### Code Refactoring

- fix tests & refactor styles ([c86c1b4](https://github.com/P1X3L/xstyled/commit/c86c1b421531f0eac6cbbca19ab3bb818bc0794d))

### Features

- add back borders utilities ([391fc04](https://github.com/P1X3L/xstyled/commit/391fc04e877f6d0eb2cc464748630c17aebeed88))
- add color modes 🌚🌝 ([b81f028](https://github.com/P1X3L/xstyled/commit/b81f028ba4744cbc33b4dec1cad3a10f345b0f64))
- add preflight & default animations ([cb10d05](https://github.com/P1X3L/xstyled/commit/cb10d052910ddd007d6c076b0b936fc4e80de606))
- add shorthand "as" support ([a76238c](https://github.com/P1X3L/xstyled/commit/a76238c14c5056a44f277369add975c4f189cab1))
- add system.apply utility ([#218](https://github.com/P1X3L/xstyled/issues/218)) ([c32f714](https://github.com/P1X3L/xstyled/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))
- add transitions ([be415b2](https://github.com/P1X3L/xstyled/commit/be415b2ad437d11224789a026f31ddab051effe7))
- add typings ([#144](https://github.com/P1X3L/xstyled/issues/144)) ([bb77c0a](https://github.com/P1X3L/xstyled/commit/bb77c0aa79d1b703dd93a4cf30f102ed1011c7f4))
- add useTheme & useUp / useDown ([36d2909](https://github.com/P1X3L/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))
- add x.extend, cleanup code ([c786a4c](https://github.com/P1X3L/xstyled/commit/c786a4c98605389b9c052f3993a37bd3fedd23a4))
- export `styled` as a named export ([410cd67](https://github.com/P1X3L/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))
- expose hooks ([7559260](https://github.com/P1X3L/xstyled/commit/75592602ead13cf8ed98458fac3d263bcbcd202f))
- expose hooks ([530f139](https://github.com/P1X3L/xstyled/commit/530f1394798a675ae3092466c0d9c40aca4df63e))
- initial version ([3218bce](https://github.com/P1X3L/xstyled/commit/3218bcebaf2803beb582837a34232067ca98f0b4))
- introduce createSystemComponent to avoid undesired HTML attributes ([3187f68](https://github.com/P1X3L/xstyled/commit/3187f689f7d4e1b53bb931f914c0cc1597c64821))
- plugins API ([9798694](https://github.com/P1X3L/xstyled/commit/979869412dc70b8fad749ed59cabba4ca535fe58))
- publish xstyled utilities as a separated package ([cc08d0f](https://github.com/P1X3L/xstyled/commit/cc08d0f2dd608326b7069927ee1ae2bb81c4f79b))
- re-export everything from @xstyled/system ([a2b6fc8](https://github.com/P1X3L/xstyled/commit/a2b6fc81494c42add14b45d5743e2fa7f3a4797f))
- replace forwardedAs by as ([d5ea7e6](https://github.com/P1X3L/xstyled/commit/d5ea7e6755eb896f04fde00e50459e663e2e4548))
- **styled:** add esm support ([a080d96](https://github.com/P1X3L/xstyled/commit/a080d9609c6bdf02fb91de9e989de7157b131133)), closes [#3601](https://github.com/P1X3L/xstyled/issues/3601)
- support emotion ([4b600a4](https://github.com/P1X3L/xstyled/commit/4b600a4003997fb3fa75555bcd1c5322e2bc78ae))
- support styled-components v5 ([e1bd0eb](https://github.com/P1X3L/xstyled/commit/e1bd0eb1e0e9e867073dfb7478ba0f2e573b761b)), closes [#86](https://github.com/P1X3L/xstyled/issues/86)
- various refactoring & typing improvements ([84d6291](https://github.com/P1X3L/xstyled/commit/84d62919dff7a811b2116fab0466cdb71986d81e))

### Performance Improvements

- optimize color modes ([#185](https://github.com/P1X3L/xstyled/issues/185)) ([7429182](https://github.com/P1X3L/xstyled/commit/7429182020bb54acaf38111196062422f74322c7))

### BREAKING CHANGES

- - Remove `x.extend`

* Remove `createX`
* TypeScript: use `Theme` from `@xstyled/system` everywhere.

- Box has been removed, "cssProperty" has been renamed "css", "getBreakpoints" has been renamed "getScreens", "useBreakpoints" has been renamed "useScreens", "th.timingFunctions" has been renamed "th.timingFunction".
- x is no longer a component, just a namespace.
- remove default fontSizes.
- forwardedAs is no longer supported.
  It has to be replaced by "as".

# [3.7.0](https://github.com/gregberge/xstyled/compare/v3.6.0...v3.7.0) (2022-10-05)

**Note:** Version bump only for package @xstyled/styled-components

# [3.6.0](https://github.com/gregberge/xstyled/compare/v3.5.1...v3.6.0) (2022-04-15)

**Note:** Version bump only for package @xstyled/styled-components

## [3.5.1](https://github.com/gregberge/xstyled/compare/v3.5.0...v3.5.1) (2022-01-10)

### Bug Fixes

- fix missing files ([18a22cd](https://github.com/gregberge/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))

# [3.5.0](https://github.com/gregberge/xstyled/compare/v3.4.0...v3.5.0) (2022-01-10)

### Bug Fixes

- **esm:** fix module exports ([5624604](https://github.com/gregberge/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/gregberge/xstyled/issues/336)
- **styled-components:** fix ESM interop ([fa93d92](https://github.com/gregberge/xstyled/commit/fa93d92927a03e450562470690208e22f045495f)), closes [#338](https://github.com/gregberge/xstyled/issues/338)

# [3.3.0](https://github.com/gregberge/xstyled/compare/v3.2.0...v3.3.0) (2021-12-22)

### Features

- **styled:** add esm support ([a080d96](https://github.com/gregberge/xstyled/commit/a080d9609c6bdf02fb91de9e989de7157b131133)), closes [#3601](https://github.com/gregberge/xstyled/issues/3601)

# [3.2.0](https://github.com/gregberge/xstyled/compare/v3.1.2...v3.2.0) (2021-12-22)

### Features

- export `styled` as a named export ([410cd67](https://github.com/gregberge/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))

## [3.1.2](https://github.com/gregberge/xstyled/compare/v3.1.1...v3.1.2) (2021-11-05)

**Note:** Version bump only for package @xstyled/styled-components

## [3.1.1](https://github.com/gregberge/xstyled/compare/v3.1.0...v3.1.1) (2021-10-30)

**Note:** Version bump only for package @xstyled/styled-components

# [3.1.0](https://github.com/gregberge/xstyled/compare/v3.0.3...v3.1.0) (2021-10-02)

**Note:** Version bump only for package @xstyled/styled-components

## [3.0.3](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v3.0.2...v3.0.3) (2021-06-25)

### Bug Fixes

- fix styled components module name ([#284](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/issues/284)) ([7c979d0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/7c979d0d69698629a516cfa5b8582cbc01aed1cb))

## [3.0.2](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v3.0.1...v3.0.2) (2021-06-18)

### Bug Fixes

- move away from mjs extension to work in more environments ([9098b83](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/9098b83407888dea985081029dc93c18d5bb6eab))

# [2.5.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.4.1...v2.5.0) (2021-05-02)

**Note:** Version bump only for package @xstyled/styled-components

## [2.4.1](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.4.0...v2.4.1) (2021-03-29)

**Note:** Version bump only for package @xstyled/styled-components

# [2.4.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.3.0...v2.4.0) (2021-03-28)

### Features

- add system.apply utility ([#218](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/issues/218)) ([c32f714](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))

# [2.3.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.2.3...v2.3.0) (2021-03-23)

### Bug Fixes

- **types:** invalid color prop ([0660565](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/0660565773898ec4f87eb66f90a42d5511753953))

## [2.2.3](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.2.2...v2.2.3) (2021-02-13)

**Note:** Version bump only for package @xstyled/styled-components

## [2.2.2](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.2.1...v2.2.2) (2021-02-03)

### Performance Improvements

- optimize color modes ([#185](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/issues/185)) ([7429182](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/7429182020bb54acaf38111196062422f74322c7))

## [2.2.1](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.2.0...v2.2.1) (2021-01-31)

**Note:** Version bump only for package @xstyled/styled-components

# [2.2.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.1.0...v2.2.0) (2021-01-18)

**Note:** Version bump only for package @xstyled/styled-components

# [2.1.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v2.0.0...v2.1.0) (2021-01-11)

**Note:** Version bump only for package @xstyled/styled-components

## [1.19.1](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.19.0...v1.19.1) (2020-11-04)

**Note:** Version bump only for package @xstyled/styled-components

# [1.19.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.18.1...v1.19.0) (2020-09-10)

**Note:** Version bump only for package @xstyled/styled-components

## [1.18.1](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.18.0...v1.18.1) (2020-08-10)

**Note:** Version bump only for package @xstyled/styled-components

# [1.18.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.17.2...v1.18.0) (2020-08-06)

**Note:** Version bump only for package @xstyled/styled-components

## [1.17.2](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.17.1...v1.17.2) (2020-07-18)

**Note:** Version bump only for package @xstyled/styled-components

## [1.17.1](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.17.0...v1.17.1) (2020-04-29)

### Bug Fixes

- **styled-components:** fix keyframes error in v5 ([ccf3469](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/ccf3469063c66f572c14bab33b85f5f39564348e))

# [1.17.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.16.0...v1.17.0) (2020-02-24)

**Note:** Version bump only for package @xstyled/styled-components

# [1.16.0](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.15.1...v1.16.0) (2020-02-02)

### Features

- support styled-components v5 ([e1bd0eb](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/commit/e1bd0eb1e0e9e867073dfb7478ba0f2e573b761b)), closes [#86](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/issues/86)

## [1.15.1](https://github.com/gregberge/xstyled/tree/master/packages/styled-components/compare/v1.15.0...v1.15.1) (2019-12-29)

**Note:** Version bump only for package @xstyled/styled-components

# [1.15.0](https://github.com/gregberge/xstyled/compare/v1.14.0...v1.15.0) (2019-11-13)

### Features

- re-export everything from @xstyled/system ([a2b6fc8](https://github.com/gregberge/xstyled/commit/a2b6fc81494c42add14b45d5743e2fa7f3a4797f))

# [1.14.0](https://github.com/gregberge/xstyled/compare/v1.13.1...v1.14.0) (2019-11-13)

### Features

- add useTheme & useUp / useDown ([36d2909](https://github.com/gregberge/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))

## [1.13.1](https://github.com/gregberge/xstyled/compare/v1.13.0...v1.13.1) (2019-09-26)

**Note:** Version bump only for package @xstyled/styled-components

# [1.13.0](https://github.com/gregberge/xstyled/compare/v1.12.8...v1.13.0) (2019-09-26)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.8](https://github.com/gregberge/xstyled/compare/v1.12.7...v1.12.8) (2019-09-26)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.7](https://github.com/gregberge/xstyled/compare/v1.12.6...v1.12.7) (2019-09-26)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.6](https://github.com/gregberge/xstyled/compare/v1.12.5...v1.12.6) (2019-09-26)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.5](https://github.com/gregberge/xstyled/compare/v1.12.4...v1.12.5) (2019-09-23)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.4](https://github.com/gregberge/xstyled/compare/v1.12.3...v1.12.4) (2019-09-22)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.3](https://github.com/gregberge/xstyled/compare/v1.12.2...v1.12.3) (2019-09-22)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.2](https://github.com/gregberge/xstyled/compare/v1.12.1...v1.12.2) (2019-09-22)

**Note:** Version bump only for package @xstyled/styled-components

## [1.12.1](https://github.com/gregberge/xstyled/compare/v1.12.0...v1.12.1) (2019-09-22)

**Note:** Version bump only for package @xstyled/styled-components

# [1.12.0](https://github.com/gregberge/xstyled/compare/v1.11.0...v1.12.0) (2019-09-22)

### Features

- add color modes 🌚🌝 ([b81f028](https://github.com/gregberge/xstyled/commit/b81f028))

# [1.11.0](https://github.com/gregberge/xstyled/compare/v1.10.1...v1.11.0) (2019-08-28)

**Note:** Version bump only for package @xstyled/styled-components

# [1.10.0](https://github.com/gregberge/xstyled/compare/v1.9.1...v1.10.0) (2019-08-11)

### Features

- publish xstyled utilities as a separated package ([cc08d0f](https://github.com/gregberge/xstyled/commit/cc08d0f))

## [1.9.1](https://github.com/gregberge/xstyled/compare/v1.9.0...v1.9.1) (2019-08-11)

**Note:** Version bump only for package @xstyled/styled-components

# [1.9.0](https://github.com/gregberge/xstyled/compare/v1.8.4...v1.9.0) (2019-08-09)

**Note:** Version bump only for package @xstyled/styled-components

## [1.8.4](https://github.com/gregberge/xstyled/compare/v1.8.3...v1.8.4) (2019-07-15)

### Bug Fixes

- do not export styled-components internals ([3f98ca5](https://github.com/gregberge/xstyled/commit/3f98ca5)), closes [#37](https://github.com/gregberge/xstyled/issues/37)

## [1.8.3](https://github.com/gregberge/xstyled/compare/v1.8.2...v1.8.3) (2019-07-09)

**Note:** Version bump only for package @xstyled/styled-components

## [1.8.2](https://github.com/gregberge/xstyled/compare/v1.8.1...v1.8.2) (2019-07-09)

### Bug Fixes

- use React.forwardRef in createSystemComponent ([6c7da13](https://github.com/gregberge/xstyled/commit/6c7da13))

## [1.8.1](https://github.com/gregberge/xstyled/compare/v1.8.0...v1.8.1) (2019-07-09)

**Note:** Version bump only for package @xstyled/styled-components

# [1.8.0](https://github.com/gregberge/xstyled/compare/v1.7.0...v1.8.0) (2019-07-09)

**Note:** Version bump only for package @xstyled/styled-components

# [1.7.0](https://github.com/gregberge/xstyled/compare/v1.6.0...v1.7.0) (2019-07-08)

**Note:** Version bump only for package @xstyled/styled-components

# [1.6.0](https://github.com/gregberge/xstyled/compare/v1.5.4...v1.6.0) (2019-07-08)

### Features

- introduce createSystemComponent to avoid undesired HTML attributes ([3187f68](https://github.com/gregberge/xstyled/commit/3187f68))

## [1.5.4](https://github.com/gregberge/xstyled/compare/v1.5.3...v1.5.4) (2019-07-07)

### Bug Fixes

- remove unused code ([7e1b8d3](https://github.com/gregberge/xstyled/commit/7e1b8d3))

## [1.5.3](https://github.com/gregberge/xstyled/compare/v1.5.2...v1.5.3) (2019-07-07)

### Bug Fixes

- prevent system props on boxes ([4ec5044](https://github.com/gregberge/xstyled/commit/4ec5044))

## [1.5.2](https://github.com/gregberge/xstyled/compare/v1.5.1...v1.5.2) (2019-06-24)

**Note:** Version bump only for package @xstyled/styled-components

## [1.5.1](https://github.com/gregberge/xstyled/compare/v1.5.0...v1.5.1) (2019-06-22)

### Bug Fixes

- support negative values from theme objects ([4b03dfc](https://github.com/gregberge/xstyled/commit/4b03dfc)), closes [#27](https://github.com/gregberge/xstyled/issues/27)

# [1.5.0](https://github.com/gregberge/xstyled/compare/v1.4.0...v1.5.0) (2019-06-13)

**Note:** Version bump only for package @xstyled/styled-components

# [1.4.0](https://github.com/gregberge/xstyled/compare/v1.3.0...v1.4.0) (2019-06-13)

**Note:** Version bump only for package @xstyled/styled-components

# [1.3.0](https://github.com/gregberge/xstyled/compare/v1.2.0...v1.3.0) (2019-06-11)

### Bug Fixes

- **styled-components:** fix createGlobalStyle ([8c5d386](https://github.com/gregberge/xstyled/commit/8c5d386)), closes [#22](https://github.com/gregberge/xstyled/issues/22)

# [1.2.0](https://github.com/gregberge/xstyled/compare/v1.1.1...v1.2.0) (2019-06-07)

### Bug Fixes

- **styled-components:** support createGlobalStyle ([ec798b4](https://github.com/gregberge/xstyled/commit/ec798b4))

### Features

- support emotion ([4b600a4](https://github.com/gregberge/xstyled/commit/4b600a4))

## [1.1.1](https://github.com/gregberge/xstyled/compare/v1.1.0...v1.1.1) (2019-06-03)

### Bug Fixes

- add border-width utility ([df4c47f](https://github.com/gregberge/xstyled/commit/df4c47f))

# [1.1.0](https://github.com/gregberge/xstyled/compare/v1.0.4...v1.1.0) (2019-06-03)

### Features

- add transitions ([be415b2](https://github.com/gregberge/xstyled/commit/be415b2))

## [1.0.4](https://github.com/gregberge/xstyled/compare/v1.0.3...v1.0.4) (2019-05-29)

### Bug Fixes

- increase box specificity ([cb62872](https://github.com/gregberge/xstyled/commit/cb62872))

## [1.0.3](https://github.com/gregberge/xstyled/compare/v1.0.2...v1.0.3) (2019-05-28)

### Bug Fixes

- support .attrs method ([#8](https://github.com/gregberge/xstyled/issues/8)) ([3ee0814](https://github.com/gregberge/xstyled/commit/3ee0814)), closes [#7](https://github.com/gregberge/xstyled/issues/7)

## [1.0.2](https://github.com/gregberge/xstyled/compare/v1.0.1...v1.0.2) (2019-05-28)

### Bug Fixes

- explicit exports from styled-components ([#5](https://github.com/gregberge/xstyled/issues/5)) ([0f0204f](https://github.com/gregberge/xstyled/commit/0f0204f)), closes [#4](https://github.com/gregberge/xstyled/issues/4)

## [1.0.1](https://github.com/gregberge/xstyled/compare/v1.0.0...v1.0.1) (2019-05-28)

### Bug Fixes

- stick to spec for sizes ([a7d4e01](https://github.com/gregberge/xstyled/commit/a7d4e01))
