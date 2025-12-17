import { AddressParse } from './core/AddressParse.js';
import areaData from './data/area.js';

// 初始化地区数据
AddressParse.setAreaData(areaData);

// Vue 插件
const AddressParsePlugin = {
  install(app, options = {}) {
    // 支持自定义地区数据
    if (options.areaData) {
      AddressParse.setAreaData(options.areaData);
    }

    // Vue 3
    if (app.config?.globalProperties) {
      app.config.globalProperties.$addressParse = AddressParse.parse;
      app.provide('addressParse', AddressParse);
    }
    // Vue 2
    else if (app.prototype) {
      app.prototype.$addressParse = AddressParse.parse;
    }
  }
};

// 导出
export { AddressParse };
export default AddressParsePlugin;
