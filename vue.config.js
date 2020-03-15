module.exports = {
  devServer: {
    port: 8003,
    proxy: {
      '/api': {
        target: 'http://lockscreen-admin-mofeeds-com.9iwuli.com/api',
        // target: 'https://lockscreen-admin.mofeeds.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/log': {
          target: 'http://log-mofeeds-com.9iwuli.com/log/',
      	// target: 'http://10.50.1.61:8007',
          changeOrigin: true,
          pathRewrite: {
              '^/log': ''
          }
      },
    }
  },
  lintOnSave: false
};
