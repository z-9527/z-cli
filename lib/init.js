const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const fs = require("fs");
const child_process = require("child_process");
const { throwMessage } = require("../utils");

module.exports = class extends Generator {
  initializing() {
    // console.log(111, this.destinationRoot());
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

  async writing() {
    const { name, template } = this.props;
    switch (template) {
      case "angular11-lib": {
        const templateData = { name };
        // 拷贝除projects目录
        this.fs.copyTpl(
          this.templatePath("**"),
          this.destinationPath(),
          templateData,
          {},
          {
            globOptions: {
              ignore: ["**/projects/**"],
              dot: true,
            },
          }
        );
        // 拷贝projects目录的my-lib并重命名
        this.fs.copyTpl(
          this.templatePath("projects/my-lib/"),
          this.destinationPath(`projects/${name}/`),
          templateData,
          {},
          {
            globOptions: {
              ignore: ["**/projects/my-lib/src/lib/**"],
              dot: true,
            },
          }
        );

        await Promise.allSettled(
          ["component", "module", "service"].map((file) =>
            this.fs.copyTplAsync(
              this.templatePath(`projects/my-lib/src/lib/my-lib.${file}.ts`),
              this.destinationPath(
                `projects/${name}/src/lib/${name}.${file}.ts`
              ),
              templateData
            )
          )
        );

        break;
      }

      default:
        break;
    }
  }

  // install() {
  //   this.installDependencies();
  // }

  end() {
    const { name } = this.props;
    this.log(
      yosay(`创建项目成功，接下来您可以
      ${chalk.blue(`cd ${name}`)}
      ${chalk.blue("yarn install")}
      ${chalk.blue("yarn start")}`)
    );
    child_process.exec('git init && git add . && git commit -m"feat: init"', {
      cwd: path.join(process.cwd(), name),
    });
  }
};
