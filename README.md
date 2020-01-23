# vue后台系统模板

## 简介

基于[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)重构：
- 基于最新vue-cli构建
- 升级部分npm包
- 新增交互式命令
- 移除node-sass，使用dart-sass
- 删除移动端的功能和样式
- 简化左侧导航栏代码
- 简化mock代码，自动require接口文件

typescript版：[vue-system-typescript-template](https://github.com/luobin01/vue-system-typescript-template)

## 命令行
````
# 运行
yarn serve

# 产出
yarn build
````

## 产出目录
````
+ dist    正式环境包
+ temp
  + dev   开发环境包
  + test  测试环境包
````

## 登录
````
账户：admin(管理员)/editor(普通)
密码：任意输入
验证码：任意输入
````
