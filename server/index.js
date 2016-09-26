import express from 'express';
import path from 'path';

// Webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('localhost:3000'));