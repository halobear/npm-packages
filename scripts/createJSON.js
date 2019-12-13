const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { input } = require("./utils/feedback");

function getJson(name = "插件名字", description = "插件描述") {
  return {
    name: `@halobear/${name}`,
    version: "0.0.4",
    description,
    keywords: ["vue"],
    scripts: {
      dev: "yarn serve",
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      "build:lib": `vue build index.js -t lib -d lib -n ${name}`,
      lint: "vue-cli-service lint",
      version:
        "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 --commit-path '.'"
    },
    author: "luzhongkuan <luzhongk@126.com>",
    homepage: `https://github.com/halobear/npm-packages/tree/master/packages/${name}`,
    license: "ISC",
    main: `lib/${name}.umd.min.js`,
    directories: {
      lib: "lib"
    },
    files: ["lib", "src"],
    publishConfig: {
      access: "public"
    },
    repository: {
      type: "git",
      url: "git+https://github.com/halobear/npm-packages.git"
    },
    bugs: {
      url: "https://github.com/halobear/npm-packages/issues"
    },
    dependencies: {
      "core-js": "^3.3.2",
      vue: "^2.6.10"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^3.12.0",
      "@vue/cli-plugin-eslint": "^3.12.0",
      "@vue/cli-service": "^3.12.0",
      "babel-eslint": "^10.0.1",
      eslint: "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      less: "^3.10.3",
      "less-loader": "^5.0.0",
      "vue-template-compiler": "^2.6.10"
    }
  };
}

function isExist(name) {
  const dir = path.resolve(__dirname, "../packages", name, "package.json");
  return fs.existsSync(dir);
}

async function createJson() {
  const name = await input("请输入插件名字");
  if (isExist(name)) return console.error(chalk.red(`${name}插件已经存在了`));
  const desc = await input("请输入插件描述");
  const json = getJson(name, desc);
  fs.writeFileSync(
    `${__dirname}/package.json`,
    JSON.stringify(json, null, 2),
    "utf-8"
  );
  console.log(chalk.green(`${name}json创建成功`));
}

createJson();
