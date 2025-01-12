const { execSync } = require('child_process')

function installDependency(packageName, isDev = false) {
  try {
    const flag = isDev ? '--save-dev' : '--save';
    console.log(`Installing ${packageName}...`);
    execSync(`npm install ${flag} ${packageName}`, { stdio: 'inherit' });
    console.log(`${packageName} installed successfully.`);
  } catch (error) {
    console.error(`Failed to install ${packageName}:`, error.message);
  }
}

function isDependencyInstalled(packageName) {
  try {
    require.resolve(packageName);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  installDependency,
  isDependencyInstalled
}