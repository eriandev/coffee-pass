# Changelog

## [0.4.1](https://github.com/eriandev/coffee-pass/compare/v0.4.0...v0.4.1) (2026-10-01)

### 🐛 Bug Fixes

* **android:** declare hermes-compiler so pnpm exposes hermesc to gradle ([b8be495](https://github.com/eriandev/coffee-pass/commit/b8be495883c1117d5c7b227b2ae9bbe68f6586dd))
* **android:** fail fast when the release signing env vars are missing ([c612fdd](https://github.com/eriandev/coffee-pass/commit/c612fdda9f94e35024c01e3cc47f68a35efe9e25))
* **android:** patch `react-native-date-picker` for modern AGP ([40305c1](https://github.com/eriandev/coffee-pass/commit/40305c1b1472cbb848b9315cc41b5b7b36bf0374))
* **clipboard:** memoize the copy callback and drop the unused read ([46518df](https://github.com/eriandev/coffee-pass/commit/46518df76807b539305342c4fca83ce78c003090))
* **coffee-shop:** look up the shop by id and fall back to NotFound ([1d7684e](https://github.com/eriandev/coffee-pass/commit/1d7684eb5457d7ab8f7d8638a3cd26b40bd6bb0a))
* correct the MainApplication package declaration ([ee04248](https://github.com/eriandev/coffee-pass/commit/ee04248ad09ed366d5bd933af73e934fc87174e2))
* **link:** encode the address and report links that fail to open ([e5326f5](https://github.com/eriandev/coffee-pass/commit/e5326f5f567ae10b0dc60db5185c945053bcfa17))
* lock the app to the light theme to avoid unreadable status bar ([4be3630](https://github.com/eriandev/coffee-pass/commit/4be3630429c380b60e0d4f8be2fbe01163fc697e))
* **modals:** close the modal when the overlay is pressed ([106a41c](https://github.com/eriandev/coffee-pass/commit/106a41c77ada0c79b2b17319199a79473723aa53))
* **nav:** build the static navigator outside of the render cycle ([d5b1ccc](https://github.com/eriandev/coffee-pass/commit/d5b1ccc4d7acac9cbf9f59c8223c76da1a8678c7))
* **nav:** navigate with the coffee shop id instead of the whole object ([a9df615](https://github.com/eriandev/coffee-pass/commit/a9df615a020bd9429d0b3570ae57765a38516317))
* **storage:** tolerate corrupted visit payloads ([4b6c265](https://github.com/eriandev/coffee-pass/commit/4b6c265965069ddf2c8344078bdb0389bdfd4c55))
* **suggestions:** validate the trimmed token and clear the loading state ([d628982](https://github.com/eriandev/coffee-pass/commit/d6289828dd85a1ef2039f4a87ae9f706bee34d54))
* **visits:** reset the selected date and pad day and month correctly ([77f01a2](https://github.com/eriandev/coffee-pass/commit/77f01a21afd13e8c4b5df60de59a82984f63166d))

### 🚜 Code Refactoring

* **address-card:** remove the dead layout measurement ([e8c17e2](https://github.com/eriandev/coffee-pass/commit/e8c17e2dd83ef6cafeee9abfd45fef59b9d23fc4))
* changes required due to the upgrade of the dependencies ([8098f09](https://github.com/eriandev/coffee-pass/commit/8098f097c6e0b53abbef0b4dbda7fe881893ed35))
* replace eslint & prettier with biome ([2ec5ddd](https://github.com/eriandev/coffee-pass/commit/2ec5ddd63bd786410e161e362c3a14e2de136866))
* replaces the release & changelog updater ([35f3728](https://github.com/eriandev/coffee-pass/commit/35f3728af3359bd2db8788ad179413fea7b842c2))
* **ui:** cache the variant stylesheets and drop the dead ones ([93218bd](https://github.com/eriandev/coffee-pass/commit/93218bd25f4b647a45591f2592255c3e2f7e4be9))

### ⚙️ Continuous Integration

* bump setup-java to v5 for node 24 runners ([88599ce](https://github.com/eriandev/coffee-pass/commit/88599ce2e28e415ee1fe45e5fa9fe8114b8484d3))
* pin actions to commit SHAs and harden the release workflow ([bcaf250](https://github.com/eriandev/coffee-pass/commit/bcaf250304e2e7c0fd468574e6e528a55c3bf828))
* publish the GitHub release with the changelog notes on tag push ([4401ded](https://github.com/eriandev/coffee-pass/commit/4401ded983d7974aeb8eb536da2c21f859e9b772))
* restrict workflow permissions and validate signing secrets ([5a51008](https://github.com/eriandev/coffee-pass/commit/5a510081cdc13f1ed0f8cc74e8f407be0367c4c3))
* serialize `deploy-google-play` deployments with a concurrency group ([5b942a2](https://github.com/eriandev/coffee-pass/commit/5b942a2cf839690f5452edd82afaff430054c533))
* update action dependencies ([ccd876a](https://github.com/eriandev/coffee-pass/commit/ccd876acfa91b9234d2468a041543d42917ba3c6))

### Miscellaneous Tasks

* **data:** fill in the Comadre Café schedule and drop the unused district key ([af2c85c](https://github.com/eriandev/coffee-pass/commit/af2c85c7889dad96edd8f6ed819111ab55760096))
* **deps:** update dependencies ([528e212](https://github.com/eriandev/coffee-pass/commit/528e2123824c8c55fe41473373cd65eac0863412))
* drop the unused jest config ([6cd81d1](https://github.com/eriandev/coffee-pass/commit/6cd81d180196d25fc336451ff8dfd1a49256fc5d))

## [0.4.0](https://github.com/eriandev/coffee-pass/compare/v0.3.1...v0.4.0) (2025-11-25)


### Features

* displays a toast on temporarily closed places instead of the modal ([f701a71](https://github.com/eriandev/coffee-pass/commit/f701a71a16d8b39117968da1158e80a7d10780db))
* new hook `use-toast` ([408e64a](https://github.com/eriandev/coffee-pass/commit/408e64a6a49532372009ff52432be096ed66f79a))
* show suggestion cards when search a coffe shop ([715c81b](https://github.com/eriandev/coffee-pass/commit/715c81b88081743c2ecab4c5cf464f51336c78b7))


### Bug Fixes

* some corrections due to the update of some dependencies ([4d07fb8](https://github.com/eriandev/coffee-pass/commit/4d07fb8b8574942d2304f549dbf66b042ae153db))

### [0.3.1](https://github.com/eriandev/coffee-pass/compare/v0.3.0...v0.3.1) (2025-09-30)


### Bug Fixes

* correct text colors on the `coffe-shop` screen ([57acc9e](https://github.com/eriandev/coffee-pass/commit/57acc9ef74cd41b3032ba6f511a0cb82b41a9bc6))
* correct the saving of the visit dates ([25539f6](https://github.com/eriandev/coffee-pass/commit/25539f6bf0adb5b81524571bda687f89dda1ec48))
* fits vertical space when using 'hide notch' features on some devices ([5d7879b](https://github.com/eriandev/coffee-pass/commit/5d7879b52735feb6329fdc5c97e7836308bc4e2f))
* fix schedules width ([a405383](https://github.com/eriandev/coffee-pass/commit/a40538358b3e014cb43ff40d3ea847c2d2edb0b1))

## [0.3.0](https://github.com/eriandev/coffee-pass/compare/v0.2.0...v0.3.0) (2025-09-30)


### Features

* add more info to each place of the coffee stores ([4445141](https://github.com/eriandev/coffee-pass/commit/4445141f379f0a00a873de9d6b616f50da3afd13))
* new marks in the address card & info modal ([844d215](https://github.com/eriandev/coffee-pass/commit/844d215326244ebb1dfee2d063cd9e8181d3406f))


### Bug Fixes

* correct the color of the back button ([8060506](https://github.com/eriandev/coffee-pass/commit/806050669ea7210af538c3691065324d92b2cfda))
* improve the modals design ([1a4b69a](https://github.com/eriandev/coffee-pass/commit/1a4b69a8013dc3e759b15a85e77bca8a540b4971))

## [0.2.0](https://github.com/eriandev/coffee-pass/compare/v0.1.1...v0.2.0) (2025-09-24)


### Features

* add a tag on the `coffee-shop` screen with the number of locations ([368ca6d](https://github.com/eriandev/coffee-pass/commit/368ca6d935efe78679916fed471c1c47ad90f24e))
* improve the screen transitions ([ca6568b](https://github.com/eriandev/coffee-pass/commit/ca6568bba2189df51548a6b0e7eaccb6a347b315))
* now can save the visit and see how many times you have visited on the `coffee-shop` screen ([5251dc0](https://github.com/eriandev/coffee-pass/commit/5251dc05ce0791a92d49d63f1cc7bc276b3291fc))
* update bootsplash screen & app icon ([b59ccc8](https://github.com/eriandev/coffee-pass/commit/b59ccc897ca768c8041f925b720fc4f01b44f0e2))


### Bug Fixes

* improve the contrast of the separation item between the autocomplete items ([50ff243](https://github.com/eriandev/coffee-pass/commit/50ff243debe4d1afc8bdd4df2901e4a9e0a31d47))
* improve the copy button dimensions ([8b7f5d5](https://github.com/eriandev/coffee-pass/commit/8b7f5d58786fdb591f4eb989a307893d069cb2c5))
* improve the go to the previous screen on the `coffee-shop` screen ([59d3e10](https://github.com/eriandev/coffee-pass/commit/59d3e10fdb26860d28f8b90ba71913fd8231c288))
* limit with a minimum and maximum date for the date picker ([6b999ab](https://github.com/eriandev/coffee-pass/commit/6b999ab05c125668fcdb3818b2ee4ec7603eaa4b))
* rename font base ([f06cc3b](https://github.com/eriandev/coffee-pass/commit/f06cc3b0578fed40b8f996fb571ec121a481cb5c))
* set the theme on the `DatePciker` in the `add-visit-modal` component ([cf37e5d](https://github.com/eriandev/coffee-pass/commit/cf37e5d7991c4fce7ecb60463a0e3658d2adb140))

### [0.1.1](https://github.com/eriandev/coffee-pass/compare/v0.1.0...v0.1.1) (2025-09-21)


### Bug Fixes

* correct empty space in the `coffee shop` screen caused by the keyboard in the previous screen ([a769898](https://github.com/eriandev/coffee-pass/commit/a7698981a666136d0a750e2262a4e2bc65b6ff85))
* corrects the bottom space on the `coffee-shop` screen ([c4308e8](https://github.com/eriandev/coffee-pass/commit/c4308e85dfe86f789427d88efa7bd16f80e4f525))
* corrects the redirection in the link component ([9a71d62](https://github.com/eriandev/coffee-pass/commit/9a71d6292b7e93a437af714647cd412e472a3cb5))
