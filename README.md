# [React demo](https://github.com/pdsuwwz/react-test) &middot;

## 🛠 安装依赖
```
npm install OR yarn install
```

---
## ⚙️ 运行
```
// 测试环境
npm run dev

// 生产环境
npm run build

OR

// 直接使用 WDS 
npm start

```

## 目录结构

```
├── build                          打包配置，这里包括了抽离库的配置（ dll 配置）
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.dll.conf.js
├── .babelrc                       babel 配置
├── bundle-config.json             第三方库自动插入模板文件配置
├── index.js                       服务开启入口
├── package.json
├── postcss.config.js              css 规范化配置
├── public                         打包后的文件目录
│   ├── bundle.css
│   ├── bundle.js
│   └── index.html
├── src                            源文件目录
│   ├── common                     公共方法及配置
│   │   ├── base.js
│   │   ├── config.js
│   │   ├── global.js
│   │   └── utils.js
│   ├── script                     核心代码
│   │   ├── actions                action creator
│   │   ├── components             react 组件
│   │   ├── routes                 路由配置
│   │   └── app.js                 webpack 入口文件
│   ├── server                     静态服务渲染
│   │   └── index.js
│   └── styles                     公共 css
│       └── common.scss
├── vendor                         抽离的公共库
│   └── dll
│       ├── vendor-manifest.json
│       └── vendor.xxx.dll.js
└── templates                      模板渲染
    └── index.html
```