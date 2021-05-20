#!/usr/bin/env node
const yeoman = require("yeoman-environment");
const program = require("commander");

const env = yeoman.createEnv();
env.register(require.resolve("./init.js"), "init");

program
  .version(require("../package.json").version, "-v, --version")
  .command("init [template]")
  .description("初始化模板")
  .action(() => {
    env.run("init");
  });

program.parse(process.argv);
