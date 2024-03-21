# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2024-03-21)

### Bug Fixes

- add border-width utility ([df4c47f](https://github.com/P1X3L/xstyled/commit/df4c47fdc0cbc83db248d572e0a63ba6123fea47))
- allow numeric values for systemprops ([efdefe1](https://github.com/P1X3L/xstyled/commit/efdefe1ddcf481a10bac1f7473143ce140e34ca8))
- boolean or string for transform property type ([1498d86](https://github.com/P1X3L/xstyled/commit/1498d8671af5b46357ae99ae85c4ed62213e065f))
- **breakpoints:** add \_ into breakpoints ([bcfda4b](https://github.com/P1X3L/xstyled/commit/bcfda4b77531487ac5a6b8c30b715dd2bcfd08bd)), closes [#277](https://github.com/P1X3L/xstyled/issues/277)
- **breakpoints:** multiple responsive style props ([#141](https://github.com/P1X3L/xstyled/issues/141)) ([b884076](https://github.com/P1X3L/xstyled/commit/b884076cec72cd89a9434616c22cb9e9468f656b))
- **cache:** fix object keys caching ([#383](https://github.com/P1X3L/xstyled/issues/383)) ([879708c](https://github.com/P1X3L/xstyled/commit/879708cde533066cd728027275014df776b9709d))
- color prop missing responsive support ([65f532b](https://github.com/P1X3L/xstyled/commit/65f532bd1bf2f1b2dbc56068ef8d943223d7b4ff))
- **emotion:** fix array handling used in breakpoints utilities ([e34d576](https://github.com/P1X3L/xstyled/commit/e34d5763d12292fe73388597dd72d08edd7a2999)), closes [#29](https://github.com/P1X3L/xstyled/issues/29)
- ensure the number is one of the keys ([c2f71fd](https://github.com/P1X3L/xstyled/commit/c2f71fd5c01b2f8597c4de370c39486218aa291b))
- **esm:** fix module exports ([5624604](https://github.com/P1X3L/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/P1X3L/xstyled/issues/336)
- fix & optimize style sorting ([76ed20a](https://github.com/P1X3L/xstyled/commit/76ed20a122666c50e80a9b3ddcf32c467d7d6de7))
- fix double negative value with strings ([b254667](https://github.com/P1X3L/xstyled/commit/b254667e81d8062fc28cc7ff32c3a272d9c08d73))
- fix minW, minH, maxW, maxH ([#217](https://github.com/P1X3L/xstyled/issues/217)) ([65c04de](https://github.com/P1X3L/xstyled/commit/65c04deb8001835b4944fc9ac5dc34f2c7c64fab))
- fix missing files ([18a22cd](https://github.com/P1X3L/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))
- fix rpxTransformer => rpxTransformers ([2658a07](https://github.com/P1X3L/xstyled/commit/2658a078813608780e153a18b4205fbc2f2b73b5))
- fixed incomplete hex alpha value generation ([#373](https://github.com/P1X3L/xstyled/issues/373)) ([fd0a097](https://github.com/P1X3L/xstyled/commit/fd0a09781f7c2cc0eee5d59e485381e9f3fc1ed0))
- FlexboxesProps missing FlexBasisProps ([#332](https://github.com/P1X3L/xstyled/issues/332)) ([dbc531b](https://github.com/P1X3L/xstyled/commit/dbc531b8dfc93ef516d190d5d51c951165ea5bee))
- handle a few more built-ins ([1aeb541](https://github.com/P1X3L/xstyled/commit/1aeb5419853b47dae0c7b438ef950ca6069f13a7))
- more correct synthesized type that allows number keys ([c31c6b1](https://github.com/P1X3L/xstyled/commit/c31c6b11b024fd9e5b96640f51d8f2b0c0342bb8))
- move at-rules to end of nested responsive states ([6c7528e](https://github.com/P1X3L/xstyled/commit/6c7528e46b2dccd934cf21ec12eb0f5076004e59)), closes [#288](https://github.com/P1X3L/xstyled/issues/288)
- move away from mjs extension to work in more environments ([9098b83](https://github.com/P1X3L/xstyled/commit/9098b83407888dea985081029dc93c18d5bb6eab))
- move typography color fix to proper file ([5c635b0](https://github.com/P1X3L/xstyled/commit/5c635b08f321ce5c81ca7c2dbb93d29ca7ab9b12))
- remove size utility ([#183](https://github.com/P1X3L/xstyled/issues/183)) ([3fb9239](https://github.com/P1X3L/xstyled/commit/3fb92397a4f2e9e824504c16f2a12e84c46637d6))
- size 0.5 conflict fluid range ([#168](https://github.com/P1X3L/xstyled/issues/168)) ([762aa1c](https://github.com/P1X3L/xstyled/commit/762aa1ccf6e4829d0664481a2be2e2ad2c4a0bf9))
- stick to spec for sizes ([a7d4e01](https://github.com/P1X3L/xstyled/commit/a7d4e01a286ed7d2c19d282754c0f8462f267131))
- support negative values from theme objects ([4b03dfc](https://github.com/P1X3L/xstyled/commit/4b03dfc8a0baaed89e72dc4783e91d9c6f440b24)), closes [#27](https://github.com/P1X3L/xstyled/issues/27)
- **system:** fix caching issue with value with different types ([4a6ded3](https://github.com/P1X3L/xstyled/commit/4a6ded3c89e2822bac4c672e06c2e74a8f2c7141))
- **system:** fix paddingBottom typings ([#242](https://github.com/P1X3L/xstyled/issues/242)) ([ee01b9b](https://github.com/P1X3L/xstyled/commit/ee01b9b42bf5a4de58227780bf1fccb41c489d51))
- **system:** fix rpx transformers ([339f7fc](https://github.com/P1X3L/xstyled/commit/339f7fcf59fb79b6e042564a03c07d40514a6c87)), closes [#274](https://github.com/P1X3L/xstyled/issues/274)
- **system:** fix space resolution algo ([f50196b](https://github.com/P1X3L/xstyled/commit/f50196bb6ac3706dcabc16d446719813180464dc))
- **system:** space nested values ([4119e8c](https://github.com/P1X3L/xstyled/commit/4119e8c59205ba9347de669b0d4dff49ba388a57))
- transform prop type should be string not boolean ([50c847e](https://github.com/P1X3L/xstyled/commit/50c847eddf11bcfb770830e98bdacda3514f4889))
- **types:** add missing alignContent prop ([eb3c47f](https://github.com/P1X3L/xstyled/commit/eb3c47f856166c2f3803025f88d1546f71f058ae)), closes [#205](https://github.com/P1X3L/xstyled/issues/205)
- **types:** add missing types to the borders system utility ([#346](https://github.com/P1X3L/xstyled/issues/346)) ([c0c92b4](https://github.com/P1X3L/xstyled/commit/c0c92b459bb3a5de46d7854be3667861f816baa5))
- **types:** fix missing values in types ([#361](https://github.com/P1X3L/xstyled/issues/361)) ([01afa25](https://github.com/P1X3L/xstyled/commit/01afa252e9c34220c799142bfc42dc0a736e55d9)), closes [#355](https://github.com/P1X3L/xstyled/issues/355)
- **types:** fix types of CSS objects ([#260](https://github.com/P1X3L/xstyled/issues/260)) ([fbbf91e](https://github.com/P1X3L/xstyled/commit/fbbf91eb1ffc5c022ab1ddf44b2b236824497913))
- **types:** fix wrong type for ThemeVariants ([#301](https://github.com/P1X3L/xstyled/issues/301)) ([b69619e](https://github.com/P1X3L/xstyled/commit/b69619ed06bedfe6146df35e697a5c60a79aa4d5))
- **types:** remove crufty type branch ([9fa412a](https://github.com/P1X3L/xstyled/commit/9fa412ae3e61d422c49965ae3badd1541a5411c6))
- **types:** remove deep path autocompletion ([e01e8b3](https://github.com/P1X3L/xstyled/commit/e01e8b3567bebe16c90f18676797160eb9a6466a))
- **typing:** Support any valid number for utility props that needs it ([#357](https://github.com/P1X3L/xstyled/issues/357)) ([1fd72c6](https://github.com/P1X3L/xstyled/commit/1fd72c6d97c469c4e7d24d900744c10e27a2a8e5))
- use React.forwardRef in createSystemComponent ([6c7da13](https://github.com/P1X3L/xstyled/commit/6c7da13a488d036771c9eee59d6d33ec3703b40b))

### Code Refactoring

- fix tests & refactor styles ([c86c1b4](https://github.com/P1X3L/xstyled/commit/c86c1b421531f0eac6cbbca19ab3bb818bc0794d))

### Features

- add \_ for base breakpoint ([8e9a6cf](https://github.com/P1X3L/xstyled/commit/8e9a6cfd7558d0815fbf2245a36efa11d4e6928d))
- add `backgroundAttachment` and `backgroundClip` utilities ([de32920](https://github.com/P1X3L/xstyled/commit/de32920b2757d6f6f241826e652897a5805b0589))
- add `divideStyle` and `divideColor` utilities ([75c8a8e](https://github.com/P1X3L/xstyled/commit/75c8a8e5e607da8f1084608a75a92017f52b98fc))
- add `flexShrink` and `flexGrow` props ([#130](https://github.com/P1X3L/xstyled/issues/130)) ([9492a00](https://github.com/P1X3L/xstyled/commit/9492a0051c31648bb40ec3a11e5b9483e1488fcd))
- add `gradientFrom`, `gradientVia`, `gradientTo` utilities ([a317cc1](https://github.com/P1X3L/xstyled/commit/a317cc170608c8e1629cd2aa070935b685890d7e))
- add `ring`, `ringInset` and `ringColor` utilities ([738fc91](https://github.com/P1X3L/xstyled/commit/738fc9167c27e71ac7c8ec4727173a83410a9971))
- add `transformOrigin` utility ([bd9c4f7](https://github.com/P1X3L/xstyled/commit/bd9c4f75e2d25ef95f880d7611dac059baee4ac0))
- add ability to customize spacing properties in "texts" ([#351](https://github.com/P1X3L/xstyled/issues/351)) ([57304c2](https://github.com/P1X3L/xstyled/commit/57304c2fdf5c5eecd7dbceb218bd8da9ef9ab262)), closes [#350](https://github.com/P1X3L/xstyled/issues/350)
- add alpha color variants ([4efa00f](https://github.com/P1X3L/xstyled/commit/4efa00f758f68cb9a6aae79f38d1ebc3eab1189e))
- add animation utility ([7c145b2](https://github.com/P1X3L/xstyled/commit/7c145b2ee09297835a2739f74e2450427d536d9f))
- add back borders utilities ([391fc04](https://github.com/P1X3L/xstyled/commit/391fc04e877f6d0eb2cc464748630c17aebeed88))
- add back size utility ([bcab1bd](https://github.com/P1X3L/xstyled/commit/bcab1bd5416cc21f73ab9f0df064e3df8b1d0cad))
- add border positions style helpers ([3bcaada](https://github.com/P1X3L/xstyled/commit/3bcaada8541af40cb40e9fbf691692cd597b8438))
- add boxSizing & container ([be120c8](https://github.com/P1X3L/xstyled/commit/be120c81c84183ef67de7047009f83def4ad6099))
- add default theme ([186800f](https://github.com/P1X3L/xstyled/commit/186800f31feee1d9c46fe831873bcad51bf09f1c))
- add float property ([0335114](https://github.com/P1X3L/xstyled/commit/0335114280242a2554e300e565065e083459550f)), closes [#192](https://github.com/P1X3L/xstyled/issues/192)
- add fontVariant to typography bag ([#396](https://github.com/P1X3L/xstyled/issues/396)) ([64f1876](https://github.com/P1X3L/xstyled/commit/64f1876a84443d5db661caf654b6062a084cc004))
- add getAngle ([55cfd8a](https://github.com/P1X3L/xstyled/commit/55cfd8ab7560207a61ac6e0092c37b1e89498fb2))
- add getDuration ([66b2123](https://github.com/P1X3L/xstyled/commit/66b2123db3207a49f64d35f6d2fb4d9d4acdce92))
- add inset support in theme ([baa6113](https://github.com/P1X3L/xstyled/commit/baa6113570b98f51d4c18573856b6fd20c54cd48))
- add interactivity utilities ([f955980](https://github.com/P1X3L/xstyled/commit/f9559800f50538017937b04529f738a6b3b45e1b))
- add listStylePosition utility ([8ddfb60](https://github.com/P1X3L/xstyled/commit/8ddfb607c67fbed22bb78feec9324ed4f2944803))
- add listStyleType utility ([bf1239e](https://github.com/P1X3L/xstyled/commit/bf1239e12e545f2e369afeb5485d444da3852806))
- add maxW, maxH, minW, minH shortcuts ([fde802e](https://github.com/P1X3L/xstyled/commit/fde802ec0e73b6fb6826936c4bac072348c275b3)), closes [#199](https://github.com/P1X3L/xstyled/issues/199)
- add objectFit utility ([2ee2669](https://github.com/P1X3L/xstyled/commit/2ee26697222a176a55d072d5c1a5a5848fca852b))
- add outlineOffset property ([#360](https://github.com/P1X3L/xstyled/issues/360)) ([4dac9a3](https://github.com/P1X3L/xstyled/commit/4dac9a31c6b80bc66b6f28b0ea69c41a252c7a4d))
- add outlines utilities ([40ca0c1](https://github.com/P1X3L/xstyled/commit/40ca0c16b88de82781fcf86181a90f43d091b8fe))
- add overscrollBehavior utility ([e952179](https://github.com/P1X3L/xstyled/commit/e95217909efe92a4170aa5adf0f732aae7185dfd))
- add placeholder state ([15b7333](https://github.com/P1X3L/xstyled/commit/15b7333c744be68451aafc04701b646487541cea))
- add preflight & default animations ([cb10d05](https://github.com/P1X3L/xstyled/commit/cb10d052910ddd007d6c076b0b936fc4e80de606))
- add sizing values to default theme ([d53c124](https://github.com/P1X3L/xstyled/commit/d53c12400202aaddd199e68b0a1f14a49a8fdee8))
- add spaceX & spaceY utilities ([64f07ea](https://github.com/P1X3L/xstyled/commit/64f07ead8af9e67136c5071a84adc466d5b3b67f))
- add state support ([7de84e5](https://github.com/P1X3L/xstyled/commit/7de84e59ebabb4a83344341ee2f6f4b3bc050d76))
- add support for text-shadow ([#49](https://github.com/P1X3L/xstyled/issues/49)) ([96ef25a](https://github.com/P1X3L/xstyled/commit/96ef25a16605d7a2b987a6e9c056ceb157a1c38c))
- add system.apply utility ([#218](https://github.com/P1X3L/xstyled/issues/218)) ([c32f714](https://github.com/P1X3L/xstyled/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))
- add tableLayout and borderCollapse utilities ([994bf6b](https://github.com/P1X3L/xstyled/commit/994bf6bfd2cc712c8799d4b772e8bd6b0abc704b))
- add textDecoration utility ([e53ae4e](https://github.com/P1X3L/xstyled/commit/e53ae4e39261786721bc0f05090e0ddc5151962e))
- add textOverflow utility ([910b816](https://github.com/P1X3L/xstyled/commit/910b81620c261d56e38c5160d6ff720d6aa511fc))
- add transforms utilities ([107f253](https://github.com/P1X3L/xstyled/commit/107f25343d5a7d9e7ced6f1c4764022de6abf015))
- add transitionDelay ([b85e95d](https://github.com/P1X3L/xstyled/commit/b85e95d22ad6598ba5dc4c7c8d553246244ffae6))
- add transitionProperty, transitionDuration, transitionTimingFunction ([a042cd0](https://github.com/P1X3L/xstyled/commit/a042cd0598f1b474d9cb66cfe31652ba1bbeb7d7))
- add transitions ([be415b2](https://github.com/P1X3L/xstyled/commit/be415b2ad437d11224789a026f31ddab051effe7))
- add transitions in defaultTheme ([f5f53d0](https://github.com/P1X3L/xstyled/commit/f5f53d059686276d287728070f741fed121c7e38))
- add typings ([#144](https://github.com/P1X3L/xstyled/issues/144)) ([bb77c0a](https://github.com/P1X3L/xstyled/commit/bb77c0aa79d1b703dd93a4cf30f102ed1011c7f4))
- add useTheme & useUp / useDown ([36d2909](https://github.com/P1X3L/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))
- add visibility utility ([e9abb48](https://github.com/P1X3L/xstyled/commit/e9abb48999891d640386506e4300c7634e62f6ff))
- add white-space utility ([a18d58d](https://github.com/P1X3L/xstyled/commit/a18d58d142fad3388782d2b0ac988aa165b56199))
- add x.extend, cleanup code ([c786a4c](https://github.com/P1X3L/xstyled/commit/c786a4c98605389b9c052f3993a37bd3fedd23a4))
- add xgrids (bootstrap like grids) ([47bcaff](https://github.com/P1X3L/xstyled/commit/47bcaff1578163b286570dcb6084ba001f2ee194))
- added inline variants support ([#334](https://github.com/P1X3L/xstyled/issues/334)) ([acfa364](https://github.com/P1X3L/xstyled/commit/acfa364561a2fb69b07a2a3689baf5f3a345f028)), closes [#333](https://github.com/P1X3L/xstyled/issues/333)
- adjust breakpoints ([5d8fe14](https://github.com/P1X3L/xstyled/commit/5d8fe14153debb107229f8900480026eace4adee))
- alias backgroundColor prop with bg ([c23bfff](https://github.com/P1X3L/xstyled/commit/c23bfff2875bb5856c218ddc8dfbdb7d61ad3c5a)), closes [#89](https://github.com/P1X3L/xstyled/issues/89)
- alias width, w and height, h ([587146c](https://github.com/P1X3L/xstyled/commit/587146c46d3d281a2f815ba9f7ab036f44fef6a2))
- allow to configure rootFontSize ([41e73b4](https://github.com/P1X3L/xstyled/commit/41e73b488a93269098e3289fd97b34c94fd736f6)), closes [#115](https://github.com/P1X3L/xstyled/issues/115)
- bind all prop getters ([ce9afce](https://github.com/P1X3L/xstyled/commit/ce9afce3a3c28ce0e5017cac985ddbce9b0bbb83))
- **border:** allow strings to be expanded ([b4520a8](https://github.com/P1X3L/xstyled/commit/b4520a87d40733e562b1a87f2aa0f1288c6865be))
- **cache:** add option to disable xstyled cache ([#379](https://github.com/P1X3L/xstyled/issues/379)) ([738f882](https://github.com/P1X3L/xstyled/commit/738f88229e7d3a144fb150be2c4ca71e514cda96))
- **durations:** bind durations to `theme.durations` ([362dea3](https://github.com/P1X3L/xstyled/commit/362dea3284a7a9a951ba1b26822dceed78d2ed4d))
- **emotion:** emotion v11 ([a901816](https://github.com/P1X3L/xstyled/commit/a901816aaf268a6999a4af475acd59b8a9840bc6))
- export `styled` as a named export ([410cd67](https://github.com/P1X3L/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))
- expose `getBreakpoints` ([b8dcc29](https://github.com/P1X3L/xstyled/commit/b8dcc29f4d3dcbd56f4426940e4e575793be2c22))
- expose hooks ([7559260](https://github.com/P1X3L/xstyled/commit/75592602ead13cf8ed98458fac3d263bcbcd202f))
- initial version ([3218bce](https://github.com/P1X3L/xstyled/commit/3218bcebaf2803beb582837a34232067ca98f0b4))
- introduce configurable transformers ([4958bcb](https://github.com/P1X3L/xstyled/commit/4958bcb82b19c39246fb97c6f1f0cc8d3b153e48))
- introduce createSystemComponent to avoid undesired HTML attributes ([3187f68](https://github.com/P1X3L/xstyled/commit/3187f689f7d4e1b53bb931f914c0cc1597c64821))
- introduce rpx unit ([8bcc4cb](https://github.com/P1X3L/xstyled/commit/8bcc4cbd6ccdacc3c588e6ce369b2517f6b22a10))
- move overflow to layout, add overflowX & overflowY ([2c95bda](https://github.com/P1X3L/xstyled/commit/2c95bdabc7c9c59e31875cb54d95e2250a1fe698))
- plugins API ([9798694](https://github.com/P1X3L/xstyled/commit/979869412dc70b8fad749ed59cabba4ca535fe58))
- publish xstyled utilities as a separated package ([cc08d0f](https://github.com/P1X3L/xstyled/commit/cc08d0f2dd608326b7069927ee1ae2bb81c4f79b))
- refactor breakpoints, fix types, add theme utilities: generateHexAlphaVariants, aliasColor ([752ee14](https://github.com/P1X3L/xstyled/commit/752ee14825388412f57c50ca2a703306811c88cc))
- remove border{dir}, border{dir}Color utilities ([3a9d585](https://github.com/P1X3L/xstyled/commit/3a9d5854fa0b24bb6d16a6f2d99c4eef8aed758a))
- remove size utility ([611160c](https://github.com/P1X3L/xstyled/commit/611160c40c284a836f2084a307dc8815fb2b8bb5))
- remove variant utility ([b3b5b30](https://github.com/P1X3L/xstyled/commit/b3b5b30de6b465ecc3efee50b8fd49b35e069dec))
- remove width & height ([8798f1a](https://github.com/P1X3L/xstyled/commit/8798f1a0c63ada98698ef06fcbcb1e01c2d972ac))
- rename xgrids to flexboxGrids ([a7bd797](https://github.com/P1X3L/xstyled/commit/a7bd797446b7c9c38a79ef4e43a399a13f100699))
- reorganize styles ([defae25](https://github.com/P1X3L/xstyled/commit/defae25f2f175153ae10db39628d787bf0042fb2))
- reorganize styles ([1b1c435](https://github.com/P1X3L/xstyled/commit/1b1c4353ac4d16f34d5eb4cbbab67736aecb4408))
- replace forwardedAs by as ([d5ea7e6](https://github.com/P1X3L/xstyled/commit/d5ea7e6755eb896f04fde00e50459e663e2e4548))
- replace gridGap by gap ([8230bc6](https://github.com/P1X3L/xstyled/commit/8230bc677dc88593a1dd4e1e6576f19fed7e6884))
- shorthand borderRadius ([42730d1](https://github.com/P1X3L/xstyled/commit/42730d1313038af93faa9a47430b1cf30478499b))
- **sizing:** remove maxW, minW, maxH, minW ([6296e1a](https://github.com/P1X3L/xstyled/commit/6296e1aeb69db9393590084b4f597d90e6b776aa))
- **states:** put states in theme ([#206](https://github.com/P1X3L/xstyled/issues/206)) ([fe74ec9](https://github.com/P1X3L/xstyled/commit/fe74ec9cbb6ca6876737f0ffc965534193c8bb12))
- stricter color type ([#395](https://github.com/P1X3L/xstyled/issues/395)) ([f8638e7](https://github.com/P1X3L/xstyled/commit/f8638e73e1647753119ff9b6c8ba751162e8cf70))
- **style:** improve mixin ([#225](https://github.com/P1X3L/xstyled/issues/225)) ([66ac294](https://github.com/P1X3L/xstyled/commit/66ac294eb7fa0760bf75b1ac679e9e964397c915))
- support "fill" & "stroke" properties ([5df1b82](https://github.com/P1X3L/xstyled/commit/5df1b82471c5e1620101f68d5af0487d34e71bbf)), closes [#118](https://github.com/P1X3L/xstyled/issues/118)
- support array in theme ([0be50a2](https://github.com/P1X3L/xstyled/commit/0be50a2a7ef2d09a26196fd42fddb9d11774b011))
- support default value in th & theme getters ([df31809](https://github.com/P1X3L/xstyled/commit/df31809977172ec9c31e8cc675c9095aafd56b72))
- support emotion ([4b600a4](https://github.com/P1X3L/xstyled/commit/4b600a4003997fb3fa75555bcd1c5322e2bc78ae))
- support fontStyle in props ([1777736](https://github.com/P1X3L/xstyled/commit/17777366373c2f3ca864682f13158f6f3a962802)), closes [#91](https://github.com/P1X3L/xstyled/issues/91)
- support mixins in cssProperty ([a554785](https://github.com/P1X3L/xstyled/commit/a55478510a15e627a03373b426845cfd9a86f1de))
- support shorthand in borderColor ([927d106](https://github.com/P1X3L/xstyled/commit/927d1062d624b6ca9a38e37cd2ccb72d2e7f7373))
- support shorthand styles ([63be3d2](https://github.com/P1X3L/xstyled/commit/63be3d2a3d0ed5d9874cb18d9125a404f7b15eeb))
- **system:** add aria-disabled to the disabled state ([#297](https://github.com/P1X3L/xstyled/issues/297)) ([d28cf38](https://github.com/P1X3L/xstyled/commit/d28cf38425fef81c090cc95b47b62e2bfc440781))
- **text:** new text utility ([73e3a51](https://github.com/P1X3L/xstyled/commit/73e3a5103b9cd931dbb81d86f1c698e804c21fea)), closes [#178](https://github.com/P1X3L/xstyled/issues/178)
- **theme:** add default border ([68b6912](https://github.com/P1X3L/xstyled/commit/68b691274980ab473e94e7ca3eb57ea5b68afca2))
- **theme:** add default borderWidth ([613447d](https://github.com/P1X3L/xstyled/commit/613447df94c1a6523ac1a9c59b7cddb71b36c1ef))
- **theme:** add letter spacings & line heights ([8056f24](https://github.com/P1X3L/xstyled/commit/8056f24ad602ebac0063c21623c7af4e0d794f6a))
- **theme:** add missing font sizes ([72d6732](https://github.com/P1X3L/xstyled/commit/72d6732005dded6c0baefe7f10f1d41667777b2e))
- **theme:** add sizes ([8979fa7](https://github.com/P1X3L/xstyled/commit/8979fa77acd754ef20b270e0b5bbf0a649ca6570))
- **theme:** allow gridTemplateColumns & gridTemplateRows ([b5daa80](https://github.com/P1X3L/xstyled/commit/b5daa80c47c6e07d3745c0174b5dfc8adfbbf234))
- **theme:** use x1 instead of 1 for size ([2199bda](https://github.com/P1X3L/xstyled/commit/2199bdaa5970ee79223d1ea8eb057f4d9101a3c1))
- **transform:** min/max widths in media queries ([aa1f518](https://github.com/P1X3L/xstyled/commit/aa1f518f26c098e30299b4fb1f36db95f1ccab86))
- **typing:** infer automatically the typing of the generators used inside of the compose ([#358](https://github.com/P1X3L/xstyled/issues/358)) ([ecbae73](https://github.com/P1X3L/xstyled/commit/ecbae7351280b93b7fbce02ab262e0dff5884cea))
- **typings:** assemble deep paths for autocompletion ([#310](https://github.com/P1X3L/xstyled/issues/310)) ([9867158](https://github.com/P1X3L/xstyled/commit/986715841c9c40c775d55ad54b8653165b2f1b71))
- **typings:** type of colors object being more specific ([#174](https://github.com/P1X3L/xstyled/issues/174)) ([379e54d](https://github.com/P1X3L/xstyled/commit/379e54d0bdb53a71dc013171aa0ebe8bf60af363))
- use "default" value if value is `true` ([42945b6](https://github.com/P1X3L/xstyled/commit/42945b6bd34762980763ff760e4df7db1e8a8e3c))
- various refactoring & typing improvements ([84d6291](https://github.com/P1X3L/xstyled/commit/84d62919dff7a811b2116fab0466cdb71986d81e))

### Performance Improvements

- **system:** improve perf x4 ([996b773](https://github.com/P1X3L/xstyled/commit/996b77328508dfee72ff540930c1046ded841651))

### BREAKING CHANGES

- - Remove `x.extend`

* Remove `createX`
* TypeScript: use `Theme` from `@xstyled/system` everywhere.

- Box has been removed, "cssProperty" has been renamed "css", "getBreakpoints" has been renamed "getScreens", "useBreakpoints" has been renamed "useScreens", "th.timingFunctions" has been renamed "th.timingFunction".
- **states:** states are now passed in object.
- only w and h are now usable, no longer width and height
- "breakpoints" are now stored in "screens", default breakpoints are now part of theme
- variant utility has been removed
- x is no longer a component, just a namespace.
- remove default fontSizes.
- reorganize style groups
- borderTop, borderRight, borderBottom, borderLeft, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor.

Use border and borderColor shorthands instead.

- replace gridGap, gridColumnGap, gridRowGap by gap, columnGap and rowGap.
- overflow has moved from basics to layout group.
- default breakpoints have changed.
- system groups have changed.
- remove size utility.
- new state props are now available on system wide components.
- new props are available on system components.
- new state props are now available on system wide components.
- default space variants have been removed.
- forwardedAs is no longer supported.
  It has to be replaced by "as".
- **emotion:** upgrade to emotion v11

# [3.7.0](https://github.com/gregberge/xstyled/compare/v3.6.0...v3.7.0) (2022-10-05)

### Bug Fixes

- **cache:** fix object keys caching ([#383](https://github.com/gregberge/xstyled/issues/383)) ([879708c](https://github.com/gregberge/xstyled/commit/879708cde533066cd728027275014df776b9709d))
- fixed incomplete hex alpha value generation ([#373](https://github.com/gregberge/xstyled/issues/373)) ([fd0a097](https://github.com/gregberge/xstyled/commit/fd0a09781f7c2cc0eee5d59e485381e9f3fc1ed0))

### Features

- **cache:** add option to disable xstyled cache ([#379](https://github.com/gregberge/xstyled/issues/379)) ([738f882](https://github.com/gregberge/xstyled/commit/738f88229e7d3a144fb150be2c4ca71e514cda96))

# [3.6.0](https://github.com/gregberge/xstyled/compare/v3.5.1...v3.6.0) (2022-04-15)

### Bug Fixes

- move at-rules to end of nested responsive states ([6c7528e](https://github.com/gregberge/xstyled/commit/6c7528e46b2dccd934cf21ec12eb0f5076004e59)), closes [#288](https://github.com/gregberge/xstyled/issues/288)
- **types:** add missing types to the borders system utility ([#346](https://github.com/gregberge/xstyled/issues/346)) ([c0c92b4](https://github.com/gregberge/xstyled/commit/c0c92b459bb3a5de46d7854be3667861f816baa5))
- **types:** fix missing values in types ([#361](https://github.com/gregberge/xstyled/issues/361)) ([01afa25](https://github.com/gregberge/xstyled/commit/01afa252e9c34220c799142bfc42dc0a736e55d9)), closes [#355](https://github.com/gregberge/xstyled/issues/355)
- **types:** remove deep path autocompletion ([e01e8b3](https://github.com/gregberge/xstyled/commit/e01e8b3567bebe16c90f18676797160eb9a6466a))
- **typing:** Support any valid number for utility props that needs it ([#357](https://github.com/gregberge/xstyled/issues/357)) ([1fd72c6](https://github.com/gregberge/xstyled/commit/1fd72c6d97c469c4e7d24d900744c10e27a2a8e5))

### Features

- add ability to customize spacing properties in "texts" ([#351](https://github.com/gregberge/xstyled/issues/351)) ([57304c2](https://github.com/gregberge/xstyled/commit/57304c2fdf5c5eecd7dbceb218bd8da9ef9ab262)), closes [#350](https://github.com/gregberge/xstyled/issues/350)
- add outlineOffset property ([#360](https://github.com/gregberge/xstyled/issues/360)) ([4dac9a3](https://github.com/gregberge/xstyled/commit/4dac9a31c6b80bc66b6f28b0ea69c41a252c7a4d))
- added inline variants support ([#334](https://github.com/gregberge/xstyled/issues/334)) ([acfa364](https://github.com/gregberge/xstyled/commit/acfa364561a2fb69b07a2a3689baf5f3a345f028)), closes [#333](https://github.com/gregberge/xstyled/issues/333)
- **typing:** infer automatically the typing of the generators used inside of the compose ([#358](https://github.com/gregberge/xstyled/issues/358)) ([ecbae73](https://github.com/gregberge/xstyled/commit/ecbae7351280b93b7fbce02ab262e0dff5884cea))

## [3.5.1](https://github.com/gregberge/xstyled/compare/v3.5.0...v3.5.1) (2022-01-10)

### Bug Fixes

- fix missing files ([18a22cd](https://github.com/gregberge/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))

# [3.5.0](https://github.com/gregberge/xstyled/compare/v3.4.0...v3.5.0) (2022-01-10)

### Bug Fixes

- **esm:** fix module exports ([5624604](https://github.com/gregberge/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/gregberge/xstyled/issues/336)

### Features

- add border positions style helpers ([3bcaada](https://github.com/gregberge/xstyled/commit/3bcaada8541af40cb40e9fbf691692cd597b8438))

# [3.2.0](https://github.com/gregberge/xstyled/compare/v3.1.2...v3.2.0) (2021-12-22)

### Bug Fixes

- FlexboxesProps missing FlexBasisProps ([#332](https://github.com/gregberge/xstyled/issues/332)) ([dbc531b](https://github.com/gregberge/xstyled/commit/dbc531b8dfc93ef516d190d5d51c951165ea5bee))

### Features

- export `styled` as a named export ([410cd67](https://github.com/gregberge/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))

## [3.1.2](https://github.com/gregberge/xstyled/compare/v3.1.1...v3.1.2) (2021-11-05)

### Bug Fixes

- **system:** fix caching issue with value with different types ([4a6ded3](https://github.com/gregberge/xstyled/commit/4a6ded3c89e2822bac4c672e06c2e74a8f2c7141))

## [3.1.1](https://github.com/gregberge/xstyled/compare/v3.1.0...v3.1.1) (2021-10-30)

### Bug Fixes

- allow numeric values for systemprops ([efdefe1](https://github.com/gregberge/xstyled/commit/efdefe1ddcf481a10bac1f7473143ce140e34ca8))
- boolean or string for transform property type ([1498d86](https://github.com/gregberge/xstyled/commit/1498d8671af5b46357ae99ae85c4ed62213e065f))
- color prop missing responsive support ([65f532b](https://github.com/gregberge/xstyled/commit/65f532bd1bf2f1b2dbc56068ef8d943223d7b4ff))
- ensure the number is one of the keys ([c2f71fd](https://github.com/gregberge/xstyled/commit/c2f71fd5c01b2f8597c4de370c39486218aa291b))
- more correct synthesized type that allows number keys ([c31c6b1](https://github.com/gregberge/xstyled/commit/c31c6b11b024fd9e5b96640f51d8f2b0c0342bb8))
- move typography color fix to proper file ([5c635b0](https://github.com/gregberge/xstyled/commit/5c635b08f321ce5c81ca7c2dbb93d29ca7ab9b12))
- transform prop type should be string not boolean ([50c847e](https://github.com/gregberge/xstyled/commit/50c847eddf11bcfb770830e98bdacda3514f4889))

# [3.1.0](https://github.com/gregberge/xstyled/compare/v3.0.3...v3.1.0) (2021-10-02)

### Bug Fixes

- **types:** fix wrong type for ThemeVariants ([#301](https://github.com/gregberge/xstyled/issues/301)) ([b69619e](https://github.com/gregberge/xstyled/commit/b69619ed06bedfe6146df35e697a5c60a79aa4d5))

### Features

- **system:** add aria-disabled to the disabled state ([#297](https://github.com/gregberge/xstyled/issues/297)) ([d28cf38](https://github.com/gregberge/xstyled/commit/d28cf38425fef81c090cc95b47b62e2bfc440781))
- **typings:** assemble deep paths for autocompletion ([#310](https://github.com/gregberge/xstyled/issues/310)) ([9867158](https://github.com/gregberge/xstyled/commit/986715841c9c40c775d55ad54b8653165b2f1b71))

## [3.0.2](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v3.0.1...v3.0.2) (2021-06-18)

### Bug Fixes

- **breakpoints:** add \_ into breakpoints ([bcfda4b](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/bcfda4b77531487ac5a6b8c30b715dd2bcfd08bd)), closes [#277](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/277)
- **system:** fix rpx transformers ([339f7fc](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/339f7fcf59fb79b6e042564a03c07d40514a6c87)), closes [#274](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/274)
- move away from mjs extension to work in more environments ([9098b83](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/9098b83407888dea985081029dc93c18d5bb6eab))

# [2.5.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.4.1...v2.5.0) (2021-05-02)

### Bug Fixes

- **system:** fix paddingBottom typings ([#242](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/242)) ([ee01b9b](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/ee01b9b42bf5a4de58227780bf1fccb41c489d51))

### Features

- **style:** improve mixin ([#225](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/225)) ([66ac294](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/66ac294eb7fa0760bf75b1ac679e9e964397c915))

# [2.4.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.3.0...v2.4.0) (2021-03-28)

### Bug Fixes

- fix minW, minH, maxW, maxH ([#217](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/217)) ([65c04de](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/65c04deb8001835b4944fc9ac5dc34f2c7c64fab))

### Features

- add system.apply utility ([#218](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/218)) ([c32f714](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))

# [2.3.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.3...v2.3.0) (2021-03-23)

### Bug Fixes

- **types:** add missing alignContent prop ([eb3c47f](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/eb3c47f856166c2f3803025f88d1546f71f058ae)), closes [#205](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/205)

### Features

- add float property ([0335114](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/0335114280242a2554e300e565065e083459550f)), closes [#192](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/192)
- add maxW, maxH, minW, minH shortcuts ([fde802e](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/fde802ec0e73b6fb6826936c4bac072348c275b3)), closes [#199](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/199)
- **durations:** bind durations to `theme.durations` ([362dea3](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/362dea3284a7a9a951ba1b26822dceed78d2ed4d))
- **transform:** min/max widths in media queries ([aa1f518](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/aa1f518f26c098e30299b4fb1f36db95f1ccab86))

## [2.2.3](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.2...v2.2.3) (2021-02-13)

**Note:** Version bump only for package @xstyled/system

## [2.2.2](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.1...v2.2.2) (2021-02-03)

### Bug Fixes

- fix & optimize style sorting ([76ed20a](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/76ed20a122666c50e80a9b3ddcf32c467d7d6de7))

## [2.2.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.0...v2.2.1) (2021-01-31)

### Bug Fixes

- remove size utility ([#183](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/183)) ([3fb9239](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/3fb92397a4f2e9e824504c16f2a12e84c46637d6))

# [2.2.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.1.0...v2.2.0) (2021-01-18)

### Features

- **typings:** type of colors object being more specific ([#174](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/174)) ([379e54d](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/379e54d0bdb53a71dc013171aa0ebe8bf60af363))

# [2.1.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.0.0...v2.1.0) (2021-01-11)

### Bug Fixes

- size 0.5 conflict fluid range ([#168](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/168)) ([762aa1c](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/762aa1ccf6e4829d0664481a2be2e2ad2c4a0bf9))

## [1.19.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.19.0...v1.19.1) (2020-11-04)

### Bug Fixes

- **breakpoints:** multiple responsive style props ([#141](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/141)) ([b884076](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/b884076cec72cd89a9434616c22cb9e9468f656b))

# [1.19.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.18.1...v1.19.0) (2020-09-10)

### Features

- add `flexShrink` and `flexGrow` props ([#130](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/130)) ([9492a00](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/9492a0051c31648bb40ec3a11e5b9483e1488fcd))

## [1.17.2](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.17.1...v1.17.2) (2020-07-18)

**Note:** Version bump only for package @xstyled/system

## [1.17.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.17.0...v1.17.1) (2020-04-29)

**Note:** Version bump only for package @xstyled/system

# [1.17.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.16.0...v1.17.0) (2020-02-24)

### Features

- alias backgroundColor prop with bg ([c23bfff](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/c23bfff2875bb5856c218ddc8dfbdb7d61ad3c5a)), closes [#89](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/89)
- support fontStyle in props ([1777736](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/17777366373c2f3ca864682f13158f6f3a962802)), closes [#91](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/91)

# [1.16.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.15.1...v1.16.0) (2020-02-02)

**Note:** Version bump only for package @xstyled/system

## [1.15.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.15.0...v1.15.1) (2019-12-29)

**Note:** Version bump only for package @xstyled/system

# [1.14.0](https://github.com/gregberge/xstyled/compare/v1.13.1...v1.14.0) (2019-11-13)

### Features

- add useTheme & useUp / useDown ([36d2909](https://github.com/gregberge/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))

# [1.11.0](https://github.com/gregberge/xstyled/compare/v1.10.1...v1.11.0) (2019-08-28)

### Features

- add support for text-shadow ([#49](https://github.com/gregberge/xstyled/issues/49)) ([96ef25a](https://github.com/gregberge/xstyled/commit/96ef25a))

# [1.10.0](https://github.com/gregberge/xstyled/compare/v1.9.1...v1.10.0) (2019-08-11)

### Features

- publish xstyled utilities as a separated package ([cc08d0f](https://github.com/gregberge/xstyled/commit/cc08d0f))

## [1.9.1](https://github.com/gregberge/xstyled/compare/v1.9.0...v1.9.1) (2019-08-11)

### Bug Fixes

- **system:** fix space resolution algo ([f50196b](https://github.com/gregberge/xstyled/commit/f50196b))

# [1.9.0](https://github.com/gregberge/xstyled/compare/v1.8.4...v1.9.0) (2019-08-09)

### Bug Fixes

- **system:** space nested values ([4119e8c](https://github.com/gregberge/xstyled/commit/4119e8c))

## [1.8.4](https://github.com/gregberge/xstyled/compare/v1.8.3...v1.8.4) (2019-07-15)

**Note:** Version bump only for package @xstyled/system

## [1.8.2](https://github.com/gregberge/xstyled/compare/v1.8.1...v1.8.2) (2019-07-09)

### Bug Fixes

- use React.forwardRef in createSystemComponent ([6c7da13](https://github.com/gregberge/xstyled/commit/6c7da13))

## [1.8.1](https://github.com/gregberge/xstyled/compare/v1.8.0...v1.8.1) (2019-07-09)

### Bug Fixes

- fix rpxTransformer => rpxTransformers ([2658a07](https://github.com/gregberge/xstyled/commit/2658a07))

# [1.8.0](https://github.com/gregberge/xstyled/compare/v1.7.0...v1.8.0) (2019-07-09)

### Features

- introduce configurable transformers ([4958bcb](https://github.com/gregberge/xstyled/commit/4958bcb))

# [1.7.0](https://github.com/gregberge/xstyled/compare/v1.6.0...v1.7.0) (2019-07-08)

### Features

- introduce rpx unit ([8bcc4cb](https://github.com/gregberge/xstyled/commit/8bcc4cb))

# [1.6.0](https://github.com/gregberge/xstyled/compare/v1.5.4...v1.6.0) (2019-07-08)

### Features

- introduce createSystemComponent to avoid undesired HTML attributes ([3187f68](https://github.com/gregberge/xstyled/commit/3187f68))

## [1.5.3](https://github.com/gregberge/xstyled/compare/v1.5.2...v1.5.3) (2019-07-07)

### Performance Improvements

- **system:** improve perf x4 ([996b773](https://github.com/gregberge/xstyled/commit/996b773))

## [1.5.2](https://github.com/gregberge/xstyled/compare/v1.5.1...v1.5.2) (2019-06-24)

### Bug Fixes

- fix double negative value with strings ([b254667](https://github.com/gregberge/xstyled/commit/b254667))

## [1.5.1](https://github.com/gregberge/xstyled/compare/v1.5.0...v1.5.1) (2019-06-22)

### Bug Fixes

- **emotion:** fix array handling used in breakpoints utilities ([e34d576](https://github.com/gregberge/xstyled/commit/e34d576)), closes [#29](https://github.com/gregberge/xstyled/issues/29)
- support negative values from theme objects ([4b03dfc](https://github.com/gregberge/xstyled/commit/4b03dfc)), closes [#27](https://github.com/gregberge/xstyled/issues/27)

# [1.5.0](https://github.com/gregberge/xstyled/compare/v1.4.0...v1.5.0) (2019-06-13)

### Features

- expose `getBreakpoints` ([b8dcc29](https://github.com/gregberge/xstyled/commit/b8dcc29))

# [1.4.0](https://github.com/gregberge/xstyled/compare/v1.3.0...v1.4.0) (2019-06-13)

### Features

- add xgrids (bootstrap like grids) ([47bcaff](https://github.com/gregberge/xstyled/commit/47bcaff))

# [1.3.0](https://github.com/gregberge/xstyled/compare/v1.2.0...v1.3.0) (2019-06-11)

**Note:** Version bump only for package @xstyled/system

# [1.2.0](https://github.com/gregberge/xstyled/compare/v1.1.1...v1.2.0) (2019-06-07)

### Features

- support emotion ([4b600a4](https://github.com/gregberge/xstyled/commit/4b600a4))

## [1.1.1](https://github.com/gregberge/xstyled/compare/v1.1.0...v1.1.1) (2019-06-03)

### Bug Fixes

- add border-width utility ([df4c47f](https://github.com/gregberge/xstyled/commit/df4c47f))

# [1.1.0](https://github.com/gregberge/xstyled/compare/v1.0.4...v1.1.0) (2019-06-03)

### Features

- add transitions ([be415b2](https://github.com/gregberge/xstyled/commit/be415b2))

## [1.0.4](https://github.com/gregberge/xstyled/compare/v1.0.3...v1.0.4) (2019-05-29)

**Note:** Version bump only for package @xstyled/system

## [1.0.2](https://github.com/gregberge/xstyled/compare/v1.0.1...v1.0.2) (2019-05-28)

**Note:** Version bump only for package @xstyled/system

## [1.0.1](https://github.com/gregberge/xstyled/compare/v1.0.0...v1.0.1) (2019-05-28)

### Bug Fixes

- stick to spec for sizes ([a7d4e01](https://github.com/gregberge/xstyled/commit/a7d4e01))
