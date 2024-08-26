# tetris 3d 前端纪要

# 技术栈

- volta
- pnpm
- vite
- React
- UnoCSS

# 开发

## 环境配置

### 项目创建

```zsh
pnpm create vite tetris --template react-ts
```

### volta 设定 pnpm & node 版本

```zsh
volta pin node@latest
volta pin pnpm@latest
```

#### [配置 volta 支持 pnpm](https://docs.volta.sh/advanced/pnpm)

系统环境变量写入`VOLTA_FEATURE_PNPM=1`

```zsh
# macOS示例：
echo "export VOLTA_FEATURE_PNPM=1" >> ~/.zshrc && source ~/.zshrc
```

## 代码规范

### IDE 设置

1. 添加 .editorconfig ，跨编辑器设置
2. 添加 .vscode/extensions.json ，需要的 vscode 扩展

### 安装使用 @umijs/lint

具体步骤参考 [umi 编码规范](https://umijs.org/docs/guides/lint)

#### 安装 eslint 并添加 .eslintrc.cjs 引用 @umijs/lint 配置

```javascript
module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
};
```

#### 安装 stylelint 并添加 .stylelint.cjs 引用 @umijs/lint 配置

```javascript
module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/stylelint'),
};
```

### 安装使用 prettier

#### 安装 prettier 并添加 .prettierrc.cjs 配置 prettier 规则

#### 安装 eslint-plugin-prettier，并将其添加到 eslintrc 使 IDE 识别格式错误并标注

## 流程规范

### 安装使用 husky lint-staged

1. husky - 管理 git hooks
2. lint-staged - 筛选文件

### 安装使用 commitlint

参考 [commitlint](https://juejin.cn/post/7265455444037533755)

## [UnoCSS](https://unocss.dev/)

内置便捷的原子化 CSS，配合编辑器的提示，高效写样式
