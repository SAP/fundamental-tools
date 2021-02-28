const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

exports.loadFromFile = function (fileName) {
  const content = fs.readFileSync(path.join("tests", "data", fileName), {
    encoding: "utf-8",
    flag: "r",
  });
  return fileName.match(/\.(yaml|yml)$/)
    ? yaml.load(content, { schema: yaml.JSON_SCHEMA })
    : content;
};

exports.saveToFile = function (fileName, content) {
  if (typeof content !== "string") {
    if (!fileName.match(/\.(yaml|yml)$/)) fileName += ".yaml";
    content = yaml.dump(content, { schema: yaml.JSON_SCHEMA });
  }
  fs.writeFileSync(path.join("tests", "data", fileName), content);
};
