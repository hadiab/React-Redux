import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import users from './routes/users';

// Webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('localhost:3000'));
