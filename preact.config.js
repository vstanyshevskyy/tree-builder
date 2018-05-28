import CopyWebpackPlugin from 'copy-webpack-plugin';

export default config => {
  config.plugins.push(new CopyWebpackPlugin([
    { context: `${__dirname}/assets`, from: `*.*` },
    { context: `${__dirname}/assets`, from: `_redirects` }
  ]));
};
