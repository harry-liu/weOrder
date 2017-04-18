# we-order

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 文档结构

``` bash

.
├── dist                                        // webpack配置文件
├── node_modules                                // node
├── src                                         // 源码目录
│   ├── components                              // 组件
│       ├── AddPhoneNumber.vue                  // 添加手机号
│       ├── CardPay.vue                         // 支付卡支付
│       ├── Charge.vue                          // 充值
│       ├── ChargeHistory.vue                   // 充值历史
│       ├── ChargeList.vue                      // 充值列表
│       ├── ChargePay.vue                       // 充值支付
│       ├── ChooseRestaurant.vue                // 选择店铺
│       ├── FoodMenu.vue                        // 菜单
│       ├── Home.vue                            // 首页
│       ├── InsteadPay.vue                      // 代替支付
│       ├── MemberCenter.vue                    // 会员中心
│       ├── MyOrder.vue                         // 我的订单
│       ├── MyOrders.vue                        // 我的订单列表
│       ├── Pay.vue                             // 支付
│       ├── PayOnline.vue                       // 在线支付
│       ├── scan.vue                            // 扫描二维码
│       ├── SelectList.vue                      // 选择列表
│       ├── Tab.vue                             // tab头部
│       ├── Tabs.vue                            // tab内容
│   ├── API                                     // API
│       ├── api.js                              // apijs入口
│       ├── config.js                           // apijs配置
│       ├── resource.js                         // apijs源文件
│   ├── assets                                  // 图片
│   ├── css                                     // css
│   ├── store                                   // vuex
│       ├── store.js                            // storejs入口
│       ├── module                              // module
│           ├── moduleCards.js                  // 支付卡支付接口
│           ├── moduleCart.js                   // 购物车接口
│           ├── moduleCommon.js                 // 公共借口
│           ├── moduleMenu.js                   // 菜单接口
│           ├── modulePay.js                    // 支付接口
│           ├── moduleRestaurant.js             // 饭店接口
│           ├── moduleUser.js                   // 用户接口
│           ├── moduleWechat.js                 // 微信接口
│   ├── app.vue                                 // 初始化视图
│   ├── main js                                 // 入口js
│   ├── route js                                // vue router
├── favicon.ico                                 // 图标 未完成
├── index.html                                  // 入口html文件
.


```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
