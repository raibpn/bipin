const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": hot(preferDefault(require("E:\\Portfolio\\my-gatsby-project\\node_modules\\@lekoarts\\gatsby-theme-cara\\src\\templates\\cara.tsx")))
}

