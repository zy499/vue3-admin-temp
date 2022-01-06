## 1.0.0-beta.3(2021-11.30)

### 升级说明

- 包管理器由`yarn`改为 `pnpm`
- 删除`node_modules`和`yarn.lock`，全局安装`pnpm`
- 执行`pnpm install`

### ✨ Features

- **其它**
  - 添加`styleImport.ts`按需导入 Ant Design Vue 样式
  - 重写`Axios.ts`

### 🐛 Bug Fixes

- **ant/index.less**
  - 修复 ant 在 button 等组件下 icon 组件不对齐问题

# 1.0.0-beta.2 (2021-11-27)

### ✨ Features

- 新增 SvgIcon 组件

### 🔧 Continuous Integration

- 增加 WindiCss 配置

# 1.0.0-beta.1(2021-11-26)

### 🎫 Chores

- 项目初始化
- 配置 Vite、Eslint、CommitLint
- 增加 GitHook
