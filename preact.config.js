import CopyWebpackPlugin from 'copy-webpack-plugin';
import criticalCssPlugin from 'preact-cli-plugin-critical-css';

export default (config, env) => {
  config.plugins.push(new CopyWebpackPlugin([
    { context: `${__dirname}/assets`, from: 'icon.png', to: 'assets' },
    { context: `${__dirname}/assets`, from: 'apple-touch-icon.png', to: 'assets' }
  ]));
  criticalCssPlugin(config, env, {});
};
