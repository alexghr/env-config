const { repository } = require("./package.json");
module.exports = {
  branches: [{ name: "main" }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [{ type: "build", scope: "deps", release: "patch" }],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
      },
    ],
    "@semantic-release/changelog",
    ["@semantic-release/npm", {
      npmPublish: true,
      pkgRoot: "./",
      tarbalDir: "./"
    }],
    "@semantic-release/git",
    ["@semantic-release/github", {
      "assets": "./*.tgz"
    }],
  ],

  repositoryUrl: repository,
  tagFormat: "v${version}",
};
