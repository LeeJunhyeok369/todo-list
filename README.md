# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
todolist
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ 2ddc3d4d7e9ae788c232579872124e4e53ccde
│  │  ├─ 03
│  │  │  └─ 2b669af7bbbf2409295f46027af6a42702611a
│  │  ├─ 0c
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  ├─ 0d
│  │  │  └─ e8960befb88d311f6acecf2f33484a8c8d078a
│  │  ├─ 0f
│  │  │  └─ 6722c1d2c06c829c28b73732ea927c249a3111
│  │  ├─ 12
│  │  │  └─ 3929ea2649ea830c35a01878d8194757ac9971
│  │  ├─ 18
│  │  │  └─ b2d32d1b62931f8c3fbd574e71d5712cb6a063
│  │  ├─ 19
│  │  │  └─ 55f1aa0e193f846809ef08113f78599d51e4ba
│  │  ├─ 1b
│  │  │  ├─ 8ff7b1906c8127f97b73dc6631589fe3d3edce
│  │  │  └─ 97cabb806f15f66ff74aa17b3b49be8f0bd301
│  │  ├─ 22
│  │  │  └─ ebd961be07cc2159233eac84f58785e60a8487
│  │  ├─ 28
│  │  │  └─ 5d8f0d65b4e87263ad8c3749006fbe8244f817
│  │  ├─ 29
│  │  │  ├─ 2c44c03984beed9779e9b31eac7b89d4d1ecae
│  │  │  ├─ 57dfe7217a78928047ca8ddb57099d5d2673cd
│  │  │  └─ d8c8f5c9607b75025cee2ca0260b2e9e9730cc
│  │  ├─ 2e
│  │  │  └─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  ├─ 34
│  │  │  └─ 968068b6f7c6856fab79ec524b52edbecce77f
│  │  ├─ 38
│  │  │  ├─ 29639c5f07a6ccb93006a048f76da13d680c25
│  │  │  └─ 8cad14a0218dcccac8ff49e0972c91916a46ad
│  │  ├─ 3a
│  │  │  └─ a454aa6614e3ed1087ab7d8f6dced08bfa64ef
│  │  ├─ 3b
│  │  │  └─ 8bcd3f5418b3826df80e2573dbfc8bbb116329
│  │  ├─ 3d
│  │  │  └─ 44f18d53aeb6dbeba2c2e7e7b0bfdebe5d542a
│  │  ├─ 3e
│  │  │  └─ 212e1d4307a332e8511f530bc48a4ad5ed6f95
│  │  ├─ 40
│  │  │  └─ 344aa8e542a7fa7faa6936bf0ee71bec9d5325
│  │  ├─ 45
│  │  │  └─ 9a263c93e503ead510bbf828ee163543f8a810
│  │  ├─ 53
│  │  │  └─ 3730970eb2a07eb08615b0237690d55d756d7c
│  │  ├─ 54
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 61
│  │  │  └─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  ├─ 62
│  │  │  └─ f7aabf958b5e27ffd3591bcd64c582620ef4db
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 71
│  │  │  └─ 523a81463b983d3044ed7bd61b6e51c569a4f2
│  │  ├─ 73
│  │  │  └─ 71127e6dff122fdb0869c93d21b161f9bf4bbe
│  │  ├─ 76
│  │  │  ├─ 5a475aa47590513968c3ad65185de755c92127
│  │  │  └─ bf0b996f6d8673e91528bf1962440bb8a0da45
│  │  ├─ 7a
│  │  │  └─ 235fb1d422e8ec3e54dcfae0e6b52c76617ef4
│  │  ├─ 81
│  │  │  └─ 24a6a794ff6017f79ed3464c6c59294e9c793d
│  │  ├─ 83
│  │  │  └─ b422424cb391210f428b7be4e2b36d3d4e7273
│  │  ├─ 86
│  │  │  ├─ 1b04b35601de92787a1a0db6c9fa190975d220
│  │  │  └─ 852b0bdcd2e9e06d093c777a76159396a4ec96
│  │  ├─ 8a
│  │  │  └─ 27f764be2e34b58f1c75c07fb264db4d332b36
│  │  ├─ 8c
│  │  │  └─ 094cde850633d7134cda86ed5d3db2089bbace
│  │  ├─ 8d
│  │  │  └─ 27923e66be680a77130d50a41c8e585f3fcd53
│  │  ├─ 8e
│  │  │  └─ 909f3f13584ad5b06c9da401852cde00575de6
│  │  ├─ 91
│  │  │  └─ ba5cbf8f4ef3079ce7587edcdf85dbfee69862
│  │  ├─ 92
│  │  │  └─ 13081a119115afcc911ee5edfe5ad20076f401
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 96
│  │  │  └─ 83218f028da35b52ec75c5d9644b8c2d211a42
│  │  ├─ 9a
│  │  │  ├─ 42d380ca704cbaae14e6033b8ef19d69b34b27
│  │  │  └─ 7c8be2c00948d826d3424d2d79ebb1e8e2dfd4
│  │  ├─ 9c
│  │  │  └─ 9e6c5a156fc7719779f58ce2b5886a551463fa
│  │  ├─ 9d
│  │  │  └─ 5a345d47d1a735cfaa357f05c76062c8a06808
│  │  ├─ 9e
│  │  │  └─ 2bf98097edc46e8bf04298ff3de240b54fc67e
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ ac
│  │  │  └─ 942c41810cffd081f7b0a72d778ae9a41ff58a
│  │  ├─ ad
│  │  │  └─ cbe2b3b8b0c2c02265d912ff34f70e72dd38d1
│  │  ├─ b2
│  │  │  ├─ 31a2f9a83611bbe30dfe0f104b5ae90fb49433
│  │  │  └─ d10f01ef67bfb2e59e5a8cd44021529d5347a1
│  │  ├─ b5
│  │  │  ├─ 9300c9b7e4341e149d8631bd355005e9a67c08
│  │  │  └─ c61c956711f981a41e95f7fcf0038436cfbb22
│  │  ├─ b7
│  │  │  ├─ 7f5348cae1f5207b65b1086e3cef09dfcf8565
│  │  │  └─ 8fa5d3cf16bf481937ff4c7aa3dc680cbd312f
│  │  ├─ b8
│  │  │  └─ b8473a3696b4f77deff889a84ab45629c42079
│  │  ├─ b9
│  │  │  ├─ 1620d35e1de03d2c5ca843229df7f3b51445b3
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ bc
│  │  │  └─ 6145446884112b09cd4ed3156008fdb9270746
│  │  ├─ bf
│  │  │  └─ 64276a3ed921ed2ec64c7f1663dcf0926ef36d
│  │  ├─ c3
│  │  │  ├─ 17ab0c4672e224b23fe0d2f3424b6849c56b7f
│  │  │  ├─ 327909ee740a319ec3791a31ee189039b9324e
│  │  │  └─ 5fe35f0ebf30fa07c4f29f63f761cb67f0bba8
│  │  ├─ c4
│  │  │  └─ 3a24826f8235552c93120bdb46c6d3bf131666
│  │  ├─ d1
│  │  │  ├─ 4732375757b9dcfde81a0faddd66acbd43f0e8
│  │  │  └─ 59e4f8f11cf5b21f453394f5d9ae82394ec085
│  │  ├─ d6
│  │  │  └─ 4d8984339177117afc27fe4c91f72529117301
│  │  ├─ d7
│  │  │  └─ bd14cce1317ecaf1d11ed6f827cb438e6440a5
│  │  ├─ d8
│  │  │  └─ 5a627c67c0c1d2ce371cded3d4b208c7fa8716
│  │  ├─ d9
│  │  │  └─ a695e6dffbcdfee5501e1d8288a7e1d5b27e63
│  │  ├─ da
│  │  │  └─ 01000f270bb057afee22b73b18aff27f8698e8
│  │  ├─ e5
│  │  │  └─ 39ff06b65ccf08b6e044e72d1771dd2fd5a0e4
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ e11a7d2c992a51f39204647203834657feaf0f
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ e9
│  │  │  └─ c26eba5295ed0b97e33e48644984a9d3725dda
│  │  ├─ ea
│  │  │  └─ 22c1524d3238ae8cd4878e9d3587845f1f29fa
│  │  ├─ ec
│  │  │  └─ 5e338a0289f8dfe18a68706715a69af242c7d9
│  │  ├─ f0
│  │  │  └─ 0277ab84691e18727d69c9cae97be8b9968837
│  │  ├─ f3
│  │  │  ├─ 1e407016e8c1a20dfc8a563826e50cfa4d6a06
│  │  │  └─ 3d94aec7f23c766fe40c128e0ae524741fc6b2
│  │  ├─ f7
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ f8
│  │  │  └─ e04d202620d6a6e932f0af3b14dfaa9ae9adb8
│  │  ├─ ff
│  │  │  └─ 1b5bfa54d978034a1c2afd82eba638ad5e4fe4
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ component
│  │  ├─ CompletionList.jsx
│  │  ├─ InputForm.jsx
│  │  ├─ ModeBtn.jsx
│  │  ├─ Todo.jsx
│  │  └─ TodoList.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
├─ vite.config.js
└─ yarn.lock

```