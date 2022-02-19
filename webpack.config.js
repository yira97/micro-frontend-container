const HtmlWebpackPlugin = require('html-webpack-plugin');    
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {                  
    port: 8080,                 
  },
  plugins: [                                           
    new ModuleFederationPlugin({
        name: 'container', // Moduleの名、なくても大丈夫
        remotes: {
            // 左側は、import 'A/B'　を書く時のAとなる。
            // 右側は、 導入したいModuleの名+そのModuleの仕様書にアクセスするアドレス
            displayModule: 'micro_frontend_1@http://localhost:8081/remoteEntry.js' 
        }
    }),      
    new HtmlWebpackPlugin({                                  
			template: './public/index.html'                       
    })                                                       
  ],                                                         
}