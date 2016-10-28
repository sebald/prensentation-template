const chalk = require('chalk');
const detect = require('detect-port');
const open = require('open');
const prettyMs = require('pretty-ms');
const prettyBytes = require('pretty-bytes');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../config/webpack.config.dev');
const paths = require('../config/paths');


// Set env stuff
process.env.NODE_ENV = 'development';
const DEFAULT_PORT = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';


function runServer (port) {
  let first_compile = false;

  // Add hot reloading!
  config.entry.unshift(
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/dev-server'
  );

  // Setup compiler
  // Webpack is tooo noisy, we take over the messages!
  const compiler = webpack(config);
  compiler.plugin('invalid', () => {
    console.log('\u{1f4c0}  Compiling...');
  });
  compiler.plugin('done', stats => {
    const { errors, warnings, time, chunks } = stats.toJson({}, true);

    // Only show errors, if there are some.
    if (errors.length) {
      console.log(chalk.red('\u2620  Compiliation error!'));
      errors.forEach(msg => console.log(msg));
      return;
    }

    // Only show warnings, if there are some.
    if (warnings.length) {
      console.log(chalk.yellow('\u26a0  Compiled with warnings!'));
      warnings.forEach(msg => console.log(msg));
      return;
    }

    // Open browser when successfully compiled the first time.
    if (!first_compile) {
      first_compile = true;
      open(`http://${host}:${port}`);
    }
    const bundle_size = chunks.map(c => c.size).reduce((sum, size) => sum + size, 0);
    console.log(chalk.green('\u267b Compiled successfully! ') + chalk.dim(`(${prettyMs(time)}, ${prettyBytes(bundle_size)})`));
  });

  const server = new WebpackDevServer(compiler, {
    clientLogLevel: 'none',
    quiet: true,
    hot: true,
    contentBase: paths.entry.html,
    publicPath: config.output.publicPath,
    watchOptions: {
      ignored: /node_modules/
    },
    host: host
  });

  // Start server!
  server.listen(port, err => {
    if (err) {
      return conosle.log(chalk.red(err));
    }
    console.log(`\u{1f984}  Starting server @ http://${host}:${port} ...`);
  });
}


// Check if the `DEFAULT_PORT` is available, if not
// go and find another one. Finally, run the dev server.
detect(DEFAULT_PORT).then(port => {
  if (port !== DEFAULT_PORT) {
    console.log(chalk.yellow(`Port ${DEFAULT_PORT} already used, using port ${port} instead.`));
  }

  runServer(port);
});