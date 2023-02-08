# icode-run

### 发布

通过github仓库标记tag，触发action；CI自动构建window、mac安装版本

```
git push origin master --tags
```

项目中配置: .github/workflows/main.yml
github线上配置: 

1. GitHub申请token
   具体操作可参照：https://zhuanlan.zhihu.com/p/547242908
2. 进入github仓库 > (点击)settings > (点击左则)Secrets and variables下的Actions > (点击右上角)New repository secret去配置ACCESS_TOKEN变量，值为（1）中的token