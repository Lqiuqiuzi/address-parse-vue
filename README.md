# Address Parse China

[![npm version](https://img.shields.io/npm/v/address-parse-china.svg)](https://www.npmjs.com/package/address-parse-china)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

中国收货地址智能解析，支持 Vue 2/3 及原生 JavaScript。

解析成功率 99% 以上，支持姓名、手机号、身份证号、邮编、省市区地址解析。

## 在线演示

👉 [https://lqiuqiuzi.github.io/address-parse-vue/](https://lqiuqiuzi.github.io/address-parse-vue/)

## 安装

```bash
npm install address-parse-china
```

## 使用方法

### 原生 JavaScript / ES Module

```javascript
import { AddressParse } from 'address-parse-china';

const result = AddressParse.parse('张三 13812345678 北京市朝阳区建国路88号 100022');
console.log(result);
```

### Vue 3

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import AddressParsePlugin from 'address-parse-china';

const app = createApp(App);
app.use(AddressParsePlugin);
app.mount('#app');
```

```vue
<script setup>
import { inject } from 'vue';

const addressParse = inject('addressParse');

const handleParse = () => {
  const result = addressParse.parse('张三 13812345678 北京市朝阳区建国路88号');
  console.log(result);
};
</script>
```

### Vue 2

```javascript
// main.js
import Vue from 'vue';
import AddressParsePlugin from 'address-parse-china';

Vue.use(AddressParsePlugin);
```

```vue
<script>
export default {
  methods: {
    handleParse() {
      const result = this.$addressParse('张三 13812345678 北京市朝阳区建国路88号');
      console.log(result);
    }
  }
}
</script>
```

## 返回结果

```javascript
{
  name: '张三',
  mobile: '13812345678',
  idCard: '',
  zipCode: '100022',
  address: '北京市朝阳区建国路88号',
  province: { code: '110000', name: '北京市' },
  city: { code: '110100', name: '北京城区' },
  district: { code: '110105', name: '朝阳区' },
  formattedAddress: '建国路88号'
}
```

## 支持的输入格式

支持空格、逗号、回车等多种分隔符：

```
张三 13812345678 北京市朝阳区xxx
张三,13812345678,北京市朝阳区xxx
张三，13812345678，北京市朝阳区xxx
张三
13812345678
北京市朝阳区xxx
```

## 相关项目

- [address-parse-java](https://github.com/Lqiuqiuzi/address-parse-java) - Java 版本

## 许可证

[MIT](LICENSE)

## 联系方式

**企鹅** 2177273545
**卫星** l3885236283
