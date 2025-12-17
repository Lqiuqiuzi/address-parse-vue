# Address Parse Vue

中国收货地址智能解析 Vue 插件，同时支持 Vue 2 和 Vue 3。

## 安装

```bash
npm install address-parse
# 或
yarn add address-parse
# 或
pnpm add address-parse
```

## 使用方法

### Vue 3

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import AddressParse from 'address-parse';

const app = createApp(App);
app.use(AddressParse);
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

或使用 Options API：

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

### Vue 2

```javascript
// main.js
import Vue from 'vue';
import App from './App.vue';
import AddressParse from 'address-parse';

Vue.use(AddressParse);

new Vue({
  render: h => h(App)
}).$mount('#app');
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

### 直接导入使用（不依赖 Vue）

```javascript
import { AddressParse } from 'address-parse';

const result = AddressParse.parse('张三 13812345678 北京市朝阳区建国路88号');
console.log(result);
```

### CDN 使用

```html
<script src="https://unpkg.com/address-parse/dist/address-parse.umd.min.js"></script>
<script>
  const result = AddressParse.AddressParse.parse('张三 13812345678 北京市朝阳区建国路88号');
  console.log(result);
</script>
```

## 返回结果

```javascript
{
  name: '张三',
  mobile: '13812345678',
  idCard: '',
  zipCode: '',
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

## 许可证

MIT
