const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.ts') //Несколько точек входа
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', // Берётся имя ключа из объекта //*entry
        clean: true, //Удалять старые файлы сборки
        assetModuleFilename: '[name][ext]',
    },
    devtool: "source-map", //Добавлять карты при сборке
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), //Статиеские файлы, которые будут отображаться
        },
        port: 3000, //Используемый порт
        open: true, //Открытие вкладки при запуске дев-сервера
        hot: true, //Горячая замена модулей
        compress: true, //Сжатие gzip файлов
        historyApiFallback: true, //??
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node-modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //Лоадер для загрузки стилей
                    'css-loader', //Лоадер для загрузки css-файлов
                    'sass-loader' //Лоадер для загрузки sass-файлов
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader', //Babel для обратной совместимости со старыми браузерами
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //Работа с изображениями
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({ //Используем плагин Html
            filename: 'index.html', //Название файла
            template: 'src/template.html' //Шаблон на который будет операться webpack
        }),
        new BundleAnalyzerPlugin() //Анализ зависимостей и размеры файлов при сборке проекта
    ]
}