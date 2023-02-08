# icode-run

## Electron打包

通过GitHub的Action进行自动打包。(支持mac、window系统的版本)

### 打包前配置

**一、项目中配置**

GitHub Action配置文件： .github/workflows/main.yml

Electron打包配置文件：forge.config.js

**二、github线上配置**

1. GitHub申请token
   具体操作可参照：https://zhuanlan.zhihu.com/p/547242908
2. 进入github仓库 > (点击)settings > (点击左则)Secrets and variables下的Actions > (点击右上角)New repository secret去配置ACCESS_TOKEN变量，值为（1）中的token

通过github仓库标记tag，触发action；CI自动构建window、mac安装版本

### 发布操作

```
git push origin master --tags
```


