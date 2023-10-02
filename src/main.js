const fs = require('fs')
const core = require('@actions/core')
const path = require('path')

async function run() {
  try {
    const region = core.getInput('region')
    const project = core.getInput('project')
    const backendConfig = `provider "google" {
        region = "${region}"
        project = "${project}"
    }`
    const fullFilePath = path.join(process.env.GITHUB_WORKSPACE, 'provider.tf')
    fs.writeFileSync(fullFilePath, backendConfig)
  } catch (error) {
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
