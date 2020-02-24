const path = require("path");
const { mapPackage } = require("./mapPackage");

const isDev = process.env.NODE_ENV === "development";

const base = isDev ? "/" : "/npm-packages/";

const alias = {
  ...mapPackage(),
  assets: path.resolve(__dirname, "..", "assets")
};

module.exports = {
  title: "halobear-npm包管理",
  description: "vue组件和工具集合-halobear",
  base,
  head: [["link", { rel: "stylesheet", href: `/style.css` }]],
  themeConfig: {
    sidebar: {
      // '/feedback/': ['/', '/feedback/']
    },
    nav: [
      // 导航链接
      // {
      //   text: '组件',
      //   items: [
      //     { text: '导航组件', link: '/views/menu' },
      //     { text: '转盘抽奖', link: '/views/lottery' }
      //   ]
      // },
      { text: "Github", link: "https://github.com/halobear/npm-packages" }
    ]
  },
  configureWebpack: {
    resolve: {
      symlinks: false, // 使用npm link
      alias
    }
  },
  extraWatchFiles: ["../../packages"],
  less: {
    includePaths: []
  }
};
