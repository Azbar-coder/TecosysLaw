import { resolve as _resolve, join } from 'path';

export const entry = './src/index.js';
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'bundle.js', // The output file name
};
export const module = {
    rules: [
        {
            test: /\.js$/, // Transpile JavaScript files
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.css$/, // Load CSS files
            use: ['style-loader', 'css-loader'],
        },
        // Add other loaders as needed
    ],
};
export const devServer = {
    contentBase: join(__dirname, 'public'),
    compress: true,
    port: 9000,
    setupMiddlewares: (middlewares) => {
        // Add your middleware setup here
        // Example: devServer.app.use(yourMiddlewareFunction);
        return middlewares;
    },
};
export const resolve = {
    extensions: ['.js', '.jsx'],
};
export const mode = 'development';
