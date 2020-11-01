/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603025484267_8887';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // csrf
  config.security = {
    csrf: {
      //   enable: false
    },
    domainWhiteList: ['http://localhost:8080', 'http://192.168.1.106:8080']
  }
  // config.cors = {
  //   origin: '*',
  //   allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  // }
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '1234',
      database: 'cyx',    
    },
    app: true,
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
  };
};
