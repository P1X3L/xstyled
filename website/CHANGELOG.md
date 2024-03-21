# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2024-03-21)

### Bug Fixes

- **docs:** added a missing paren in the code example ([#303](https://github.com/P1X3L/xstyled/issues/303)) ([901755b](https://github.com/P1X3L/xstyled/commit/901755ba6d16eb621bacfe966886296cf2c6efdb))
- remove size utility ([#183](https://github.com/P1X3L/xstyled/issues/183)) ([3fb9239](https://github.com/P1X3L/xstyled/commit/3fb92397a4f2e9e824504c16f2a12e84c46637d6))
- size 0.5 conflict fluid range ([#168](https://github.com/P1X3L/xstyled/issues/168)) ([762aa1c](https://github.com/P1X3L/xstyled/commit/762aa1ccf6e4829d0664481a2be2e2ad2c4a0bf9))
- stick to spec for sizes ([a7d4e01](https://github.com/P1X3L/xstyled/commit/a7d4e01a286ed7d2c19d282754c0f8462f267131))
- typo border doc ([694408e](https://github.com/P1X3L/xstyled/commit/694408e0044f214c20a510e5f4c2a8715c0c2fcb))
- use React.forwardRef in createSystemComponent ([6c7da13](https://github.com/P1X3L/xstyled/commit/6c7da13a488d036771c9eee59d6d33ec3703b40b))

### Code Refactoring

- fix tests & refactor styles ([c86c1b4](https://github.com/P1X3L/xstyled/commit/c86c1b421531f0eac6cbbca19ab3bb818bc0794d))

### Features

- add @xstyled/prop-types utility ([73782fd](https://github.com/P1X3L/xstyled/commit/73782fd3378c78100866c94a8dae4fa091d2f950)), closes [#23](https://github.com/P1X3L/xstyled/issues/23)
- add ability to customize spacing properties in "texts" ([#351](https://github.com/P1X3L/xstyled/issues/351)) ([57304c2](https://github.com/P1X3L/xstyled/commit/57304c2fdf5c5eecd7dbceb218bd8da9ef9ab262)), closes [#350](https://github.com/P1X3L/xstyled/issues/350)
- add back borders utilities ([391fc04](https://github.com/P1X3L/xstyled/commit/391fc04e877f6d0eb2cc464748630c17aebeed88))
- add back size utility ([bcab1bd](https://github.com/P1X3L/xstyled/commit/bcab1bd5416cc21f73ab9f0df064e3df8b1d0cad))
- add border positions style helpers ([3bcaada](https://github.com/P1X3L/xstyled/commit/3bcaada8541af40cb40e9fbf691692cd597b8438))
- add border-x-x-radius, outline-style, outline-width support ([693dc5d](https://github.com/P1X3L/xstyled/commit/693dc5de1669bc2d90b94d4ab44ed12d3164fb75))
- add color modes 🌚🌝 ([b81f028](https://github.com/P1X3L/xstyled/commit/b81f028ba4744cbc33b4dec1cad3a10f345b0f64))
- add float property ([0335114](https://github.com/P1X3L/xstyled/commit/0335114280242a2554e300e565065e083459550f)), closes [#192](https://github.com/P1X3L/xstyled/issues/192)
- add fontVariant to typography bag ([#396](https://github.com/P1X3L/xstyled/issues/396)) ([64f1876](https://github.com/P1X3L/xstyled/commit/64f1876a84443d5db661caf654b6062a084cc004))
- add maxW, maxH, minW, minH shortcuts ([fde802e](https://github.com/P1X3L/xstyled/commit/fde802ec0e73b6fb6826936c4bac072348c275b3)), closes [#199](https://github.com/P1X3L/xstyled/issues/199)
- add support for text-shadow ([#49](https://github.com/P1X3L/xstyled/issues/49)) ([96ef25a](https://github.com/P1X3L/xstyled/commit/96ef25a16605d7a2b987a6e9c056ceb157a1c38c))
- add system.apply utility ([#218](https://github.com/P1X3L/xstyled/issues/218)) ([c32f714](https://github.com/P1X3L/xstyled/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))
- add transitions ([be415b2](https://github.com/P1X3L/xstyled/commit/be415b2ad437d11224789a026f31ddab051effe7))
- add useTheme & useUp / useDown ([36d2909](https://github.com/P1X3L/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))
- add xgrids (bootstrap like grids) ([47bcaff](https://github.com/P1X3L/xstyled/commit/47bcaff1578163b286570dcb6084ba001f2ee194))
- alias backgroundColor prop with bg ([c23bfff](https://github.com/P1X3L/xstyled/commit/c23bfff2875bb5856c218ddc8dfbdb7d61ad3c5a)), closes [#89](https://github.com/P1X3L/xstyled/issues/89)
- bind mask-size to sizes ([#219](https://github.com/P1X3L/xstyled/issues/219)) ([ae826fa](https://github.com/P1X3L/xstyled/commit/ae826fa9d69628433f2cd537a883c90b68a37d3d))
- **cache:** add option to disable xstyled cache ([#379](https://github.com/P1X3L/xstyled/issues/379)) ([738f882](https://github.com/P1X3L/xstyled/commit/738f88229e7d3a144fb150be2c4ca71e514cda96))
- **durations:** bind durations to `theme.durations` ([362dea3](https://github.com/P1X3L/xstyled/commit/362dea3284a7a9a951ba1b26822dceed78d2ed4d))
- **emotion:** add importMap to the babel plugin ([#293](https://github.com/P1X3L/xstyled/issues/293)) ([657f7fe](https://github.com/P1X3L/xstyled/commit/657f7fe53b7f14a9523163aa0c1989655d83e058))
- **emotion:** add preflight component to emotion ([#167](https://github.com/P1X3L/xstyled/issues/167)) ([b56e6b6](https://github.com/P1X3L/xstyled/commit/b56e6b66c26f3854bc17d6622567081122556fb4))
- **emotion:** emotion v11 ([a901816](https://github.com/P1X3L/xstyled/commit/a901816aaf268a6999a4af475acd59b8a9840bc6))
- initial version ([3218bce](https://github.com/P1X3L/xstyled/commit/3218bcebaf2803beb582837a34232067ca98f0b4))
- introduce configurable transformers ([4958bcb](https://github.com/P1X3L/xstyled/commit/4958bcb82b19c39246fb97c6f1f0cc8d3b153e48))
- introduce createSystemComponent to avoid undesired HTML attributes ([3187f68](https://github.com/P1X3L/xstyled/commit/3187f689f7d4e1b53bb931f914c0cc1597c64821))
- introduce rpx unit ([8bcc4cb](https://github.com/P1X3L/xstyled/commit/8bcc4cbd6ccdacc3c588e6ce369b2517f6b22a10))
- remove width & height ([8798f1a](https://github.com/P1X3L/xstyled/commit/8798f1a0c63ada98698ef06fcbcb1e01c2d972ac))
- **states:** put states in theme ([#206](https://github.com/P1X3L/xstyled/issues/206)) ([fe74ec9](https://github.com/P1X3L/xstyled/commit/fe74ec9cbb6ca6876737f0ffc965534193c8bb12))
- support emotion ([4b600a4](https://github.com/P1X3L/xstyled/commit/4b600a4003997fb3fa75555bcd1c5322e2bc78ae))
- support fontStyle in props ([1777736](https://github.com/P1X3L/xstyled/commit/17777366373c2f3ca864682f13158f6f3a962802)), closes [#91](https://github.com/P1X3L/xstyled/issues/91)
- **system:** add aria-disabled to the disabled state ([#297](https://github.com/P1X3L/xstyled/issues/297)) ([d28cf38](https://github.com/P1X3L/xstyled/commit/d28cf38425fef81c090cc95b47b62e2bfc440781))
- **text:** new text utility ([73e3a51](https://github.com/P1X3L/xstyled/commit/73e3a5103b9cd931dbb81d86f1c698e804c21fea)), closes [#178](https://github.com/P1X3L/xstyled/issues/178)
- various refactoring & typing improvements ([84d6291](https://github.com/P1X3L/xstyled/commit/84d62919dff7a811b2116fab0466cdb71986d81e))

### Performance Improvements

- optimize color modes ([#185](https://github.com/P1X3L/xstyled/issues/185)) ([7429182](https://github.com/P1X3L/xstyled/commit/7429182020bb54acaf38111196062422f74322c7))

### BREAKING CHANGES

- Box has been removed, "cssProperty" has been renamed "css", "getBreakpoints" has been renamed "getScreens", "useBreakpoints" has been renamed "useScreens", "th.timingFunctions" has been renamed "th.timingFunction".
- **states:** states are now passed in object.
- only w and h are now usable, no longer width and height
- remove default fontSizes.
- **emotion:** upgrade to emotion v11

# [3.7.0](https://github.com/gregberge/xstyled/compare/v3.6.0...v3.7.0) (2022-10-05)

### Features

- **cache:** add option to disable xstyled cache ([#379](https://github.com/gregberge/xstyled/issues/379)) ([738f882](https://github.com/gregberge/xstyled/commit/738f88229e7d3a144fb150be2c4ca71e514cda96))

# [3.6.0](https://github.com/gregberge/xstyled/compare/v3.5.1...v3.6.0) (2022-04-15)

### Features

- add ability to customize spacing properties in "texts" ([#351](https://github.com/gregberge/xstyled/issues/351)) ([57304c2](https://github.com/gregberge/xstyled/commit/57304c2fdf5c5eecd7dbceb218bd8da9ef9ab262)), closes [#350](https://github.com/gregberge/xstyled/issues/350)

# [3.5.0](https://github.com/gregberge/xstyled/compare/v3.4.0...v3.5.0) (2022-01-10)

### Bug Fixes

- typo border doc ([694408e](https://github.com/gregberge/xstyled/commit/694408e0044f214c20a510e5f4c2a8715c0c2fcb))

### Features

- add border positions style helpers ([3bcaada](https://github.com/gregberge/xstyled/commit/3bcaada8541af40cb40e9fbf691692cd597b8438))

# [3.2.0](https://github.com/gregberge/xstyled/compare/v3.1.2...v3.2.0) (2021-12-22)

**Note:** Version bump only for package @xstyled/website

# [3.1.0](https://github.com/gregberge/xstyled/compare/v3.0.3...v3.1.0) (2021-10-02)

### Bug Fixes

- **docs:** added a missing paren in the code example ([#303](https://github.com/gregberge/xstyled/issues/303)) ([901755b](https://github.com/gregberge/xstyled/commit/901755ba6d16eb621bacfe966886296cf2c6efdb))

### Features

- **emotion:** add importMap to the babel plugin ([#293](https://github.com/gregberge/xstyled/issues/293)) ([657f7fe](https://github.com/gregberge/xstyled/commit/657f7fe53b7f14a9523163aa0c1989655d83e058))
- **system:** add aria-disabled to the disabled state ([#297](https://github.com/gregberge/xstyled/issues/297)) ([d28cf38](https://github.com/gregberge/xstyled/commit/d28cf38425fef81c090cc95b47b62e2bfc440781))

## [3.0.2](https://github.com/gregberge/xstyled/compare/v3.0.1...v3.0.2) (2021-06-18)

**Note:** Version bump only for package @xstyled/website

# [2.5.0](https://github.com/gregberge/xstyled/compare/v2.4.1...v2.5.0) (2021-05-02)

**Note:** Version bump only for package @xstyled/website

# [2.4.0](https://github.com/gregberge/xstyled/compare/v2.3.0...v2.4.0) (2021-03-28)

### Features

- add system.apply utility ([#218](https://github.com/gregberge/xstyled/issues/218)) ([c32f714](https://github.com/gregberge/xstyled/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))
- bind mask-size to sizes ([#219](https://github.com/gregberge/xstyled/issues/219)) ([ae826fa](https://github.com/gregberge/xstyled/commit/ae826fa9d69628433f2cd537a883c90b68a37d3d))

# [2.3.0](https://github.com/gregberge/xstyled/compare/v2.2.3...v2.3.0) (2021-03-23)

### Features

- add float property ([0335114](https://github.com/gregberge/xstyled/commit/0335114280242a2554e300e565065e083459550f)), closes [#192](https://github.com/gregberge/xstyled/issues/192)
- add maxW, maxH, minW, minH shortcuts ([fde802e](https://github.com/gregberge/xstyled/commit/fde802ec0e73b6fb6826936c4bac072348c275b3)), closes [#199](https://github.com/gregberge/xstyled/issues/199)
- **durations:** bind durations to `theme.durations` ([362dea3](https://github.com/gregberge/xstyled/commit/362dea3284a7a9a951ba1b26822dceed78d2ed4d))

## [2.2.3](https://github.com/gregberge/xstyled/compare/v2.2.2...v2.2.3) (2021-02-13)

**Note:** Version bump only for package @xstyled/website

## [2.2.2](https://github.com/gregberge/xstyled/compare/v2.2.1...v2.2.2) (2021-02-03)

### Performance Improvements

- optimize color modes ([#185](https://github.com/gregberge/xstyled/issues/185)) ([7429182](https://github.com/gregberge/xstyled/commit/7429182020bb54acaf38111196062422f74322c7))

## [2.2.1](https://github.com/gregberge/xstyled/compare/v2.2.0...v2.2.1) (2021-01-31)

### Bug Fixes

- remove size utility ([#183](https://github.com/gregberge/xstyled/issues/183)) ([3fb9239](https://github.com/gregberge/xstyled/commit/3fb92397a4f2e9e824504c16f2a12e84c46637d6))

# [2.2.0](https://github.com/gregberge/xstyled/compare/v2.1.0...v2.2.0) (2021-01-18)

**Note:** Version bump only for package @xstyled/website

# [2.1.0](https://github.com/smooth-code/xstyled/compare/v2.0.0...v2.1.0) (2021-01-11)

### Bug Fixes

- size 0.5 conflict fluid range ([#168](https://github.com/smooth-code/xstyled/issues/168)) ([762aa1c](https://github.com/smooth-code/xstyled/commit/762aa1ccf6e4829d0664481a2be2e2ad2c4a0bf9))

### Features

- **emotion:** add preflight component to emotion ([#167](https://github.com/smooth-code/xstyled/issues/167)) ([b56e6b6](https://github.com/smooth-code/xstyled/commit/b56e6b66c26f3854bc17d6622567081122556fb4))
