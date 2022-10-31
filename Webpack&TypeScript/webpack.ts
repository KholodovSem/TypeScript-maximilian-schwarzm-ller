/* 
    Webpack - интсрумент, который осуществляет настройку сборки проекта, и саму сборку.

    Базавый набор NPM-пакетов для работы TS & Webpack:
    ts-loader - компилятор
    typescript - единая версия TS для всего проекта
    webpack - сам webpack
    webpack-dev-server - сервер для разработки


    Затем создаём конфигурационный файл webpack.config.js
    Базовая настрока данного файла будет выглядеть так:

    const path = require('path');

    module.export = {
        entry: './src/app.ts', //* Точка входа 
        output: { //* Точка выхода 
            filename: 'budle.js', //* Конечное название готового файла
            path: path.resolve(__dirname, 'dist') //* Абсолютный путь до директории (для файла выхода)
        },
        devtool: 'inline-source-map', //* Указывает захватить с собой файлы [.map]
        module: { //* Как работать с TS-файлами (TS-Loader)
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: { //* За какими файлами следить
            extensions: ['.ts', '.js']
        }
    };

    Запустить процесс сборки можно введя в консоль "webpack", либо добавив скрипт в
    package.json: "build": "webpack"
    *Настрока dev-server:
    В package.json - "start": "webpack serve"
    В webpack.config.js - 
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },

*/
