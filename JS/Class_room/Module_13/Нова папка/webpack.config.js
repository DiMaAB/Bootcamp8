const path = require('path');
const argv = require('yargs').argv; // визначає режим єто модуль
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// берет css файли и кидает в один 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');// берет js файл и делает в одну сторочку 
const HtmlWebpackPlugin = require('html-webpack-plugin');// вставляет скрипти и линки 


const isDevelopment = argv.mode === 'development';//запускаем елси тру
const isProduction = !isDevelopment;// запускаем елси фалс 
const distPath = path.join(__dirname, '/public');// папка куда идет финальний результат webpack


const config = {
entry:{//  это поле в котором мы говорим за какими файлами нужно следить 
main:'./src/js/index.js'
},
output:{// это поле  говорить как називаеться файли и в какую папку вігружать 
filename:'bundle.js' ,
path: distPath
},
module:{// создаеться поле rules  в котором будет сохраняться массив в коором будет обьекти которіе помогають работать 
   
        rules: [{
          test: /\.html$/,
          use: 'html-loader'
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader'
          }]
        }, {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [/// на начинает подгркужать загружчики справа на лево тоесть чтобы запустить загружчик первым то написать в низу 
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  isProduction ? require('cssnano') : () => {},
                  require('autoprefixer')({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        }, {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash].[ext]'
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
              }
            }
          },
          ],
        }, {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name][hash].[ext]'
            }
          },
        }]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ],
      optimization: isProduction ? {
        minimizer: [
          new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
              compress: {
                inline: false,
                drop_console: true
              },
            },
          }),
        ],
      } : {},
      devServer: {
        contentBase: distPath,
        port: 9000,
        compress: true,
        open: true
      }
};

module.exports=config;

//загрузчик єто доп пакет которий учить вебпак роботать с файлами 

//плагин єто доп пакети которіе помагають єти файли обрабативаться