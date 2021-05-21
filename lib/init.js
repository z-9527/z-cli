const Generator = require("yeoman-generator");
// const chalk = require("chalk");
// const yosay = require("yosay");
const path = require("path");
const fs = require("fs");
const { throwMessage } = require("../utils");

module.exports = class extends Generator {
  initializing() {
    console.log(111, this.destinationRoot());
    // throwMessage(5555);
  }

  async prompting() {
    const prompts = [
      {
        type: "list",
        name: "template",
        message: "请选择项目模板",
        choices: [
          { name: "angular11-lib", value: "angular11-lib" },
          { name: "test", value: "angular11-lib" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "请输入项目名称",
        validate: (v) => {
          if (!v) {
            return "请输入项目名称";
          }
          return true;
        },
      },
    ];
    const props = await this.prompt(prompts);
    this.props = props;
    if (fs.existsSync(path.join(process.cwd(), props.name))) {
      throwMessage(`当前目录已存在 ${props.name} 目录`);
    }
  }

  configuring() {
    const { template, name } = this.props;
    // 设置模板根路径
    this.sourceRoot(path.join(__dirname, "..", "templates", template));
    // 设置目标根路径
    this.destinationRoot(path.join(process.cwd(), name));
  }

  writing() {
    // this.fs.copy(
    //   this.templatePath("dummyfile.txt"),
    //   this.destinationPath("dummyfile.txt")
    // );
  }

  // install() {
  //   this.installDependencies();
  // }
};
