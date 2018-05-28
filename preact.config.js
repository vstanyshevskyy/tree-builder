import CopyWebpackPlugin from 'copy-webpack-plugin';
import CriticalCssPlugin from 'preact-cli-plugin-critical-css';

export default (config, env) => {
  config.plugins.push(new CopyWebpackPlugin([
    { context: `${__dirname}/assets`, from: 'icon.png', to: 'assets' }
  ]));
  CriticalCssPlugin(config, env, {});
};
