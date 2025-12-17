/**
 * 地区数据（精简版，完整版请查看源码）
 */
const areaData = [
  ["110000,北京市", "110100,北京城区", "110101,东城区"],
  ["110000,北京市", "110100,北京城区", "110102,西城区"],
  ["110000,北京市", "110100,北京城区", "110105,朝阳区"],
  ["110000,北京市", "110100,北京城区", "110106,丰台区"],
  ["110000,北京市", "110100,北京城区", "110108,海淀区"],
  ["110000,北京市", "110100,北京城区", "110112,通州区"],
  ["120000,天津市", "120100,天津城区", "120101,和平区"],
  ["120000,天津市", "120100,天津城区", "120104,南开区"],
  ["130000,河北省", "130100,石家庄市", "130102,长安区"],
  ["310000,上海市", "310100,上海城区", "310101,黄浦区"],
  ["310000,上海市", "310100,上海城区", "310104,徐汇区"],
  ["310000,上海市", "310100,上海城区", "310105,长宁区"],
  ["310000,上海市", "310100,上海城区", "310106,静安区"],
  ["310000,上海市", "310100,上海城区", "310107,普陀区"],
  ["310000,上海市", "310100,上海城区", "310109,虹口区"],
  ["310000,上海市", "310100,上海城区", "310110,杨浦区"],
  ["310000,上海市", "310100,上海城区", "310112,闵行区"],
  ["310000,上海市", "310100,上海城区", "310113,宝山区"],
  ["310000,上海市", "310100,上海城区", "310114,嘉定区"],
  ["310000,上海市", "310100,上海城区", "310115,浦东新区"],
  ["310000,上海市", "310100,上海城区", "310116,金山区"],
  ["310000,上海市", "310100,上海城区", "310117,松江区"],
  ["310000,上海市", "310100,上海城区", "310118,青浦区"],
  ["320000,江苏省", "320100,南京市", "320102,玄武区"],
  ["320000,江苏省", "320100,南京市", "320104,秦淮区"],
  ["320000,江苏省", "320100,南京市", "320105,建邺区"],
  ["320000,江苏省", "320100,南京市", "320106,鼓楼区"],
  ["320000,江苏省", "320500,苏州市", "320505,虎丘区"],
  ["320000,江苏省", "320500,苏州市", "320506,吴中区"],
  ["330000,浙江省", "330100,杭州市", "330102,上城区"],
  ["330000,浙江省", "330100,杭州市", "330105,拱墅区"],
  ["330000,浙江省", "330100,杭州市", "330106,西湖区"],
  ["330000,浙江省", "330100,杭州市", "330108,滨江区"],
  ["330000,浙江省", "330200,宁波市", "330203,海曙区"],
  ["340000,安徽省", "340100,合肥市", "340102,瑶海区"],
  ["350000,福建省", "350100,福州市", "350102,鼓楼区"],
  ["350000,福建省", "350200,厦门市", "350203,思明区"],
  ["360000,江西省", "360100,南昌市", "360102,东湖区"],
  ["370000,山东省", "370100,济南市", "370102,历下区"],
  ["370000,山东省", "370200,青岛市", "370202,市南区"],
  ["410000,河南省", "410100,郑州市", "410102,中原区"],
  ["420000,湖北省", "420100,武汉市", "420102,江岸区"],
  ["420000,湖北省", "420100,武汉市", "420103,江汉区"],
  ["420000,湖北省", "420100,武汉市", "420104,硚口区"],
  ["420000,湖北省", "420100,武汉市", "420105,汉阳区"],
  ["420000,湖北省", "420100,武汉市", "420106,武昌区"],
  ["430000,湖南省", "430100,长沙市", "430102,芙蓉区"],
  ["440000,广东省", "440100,广州市", "440103,荔湾区"],
  ["440000,广东省", "440100,广州市", "440104,越秀区"],
  ["440000,广东省", "440100,广州市", "440105,海珠区"],
  ["440000,广东省", "440100,广州市", "440106,天河区"],
  ["440000,广东省", "440300,深圳市", "440303,罗湖区"],
  ["440000,广东省", "440300,深圳市", "440304,福田区"],
  ["440000,广东省", "440300,深圳市", "440305,南山区"],
  ["440000,广东省", "440300,深圳市", "440306,宝安区"],
  ["440000,广东省", "440300,深圳市", "440307,龙岗区"],
  ["450000,广西壮族自治区", "450100,南宁市", "450102,兴宁区"],
  ["460000,海南省", "460100,海口市", "460105,秀英区"],
  ["500000,重庆市", "500100,重庆城区", "500101,万州区"],
  ["500000,重庆市", "500100,重庆城区", "500103,渝中区"],
  ["500000,重庆市", "500100,重庆城区", "500105,江北区"],
  ["510000,四川省", "510100,成都市", "510104,锦江区"],
  ["510000,四川省", "510100,成都市", "510105,青羊区"],
  ["510000,四川省", "510100,成都市", "510106,金牛区"],
  ["510000,四川省", "510100,成都市", "510107,武侯区"],
  ["510000,四川省", "510100,成都市", "510108,成华区"],
  ["510000,四川省", "510100,成都市", "510112,龙泉驿区"],
  ["510000,四川省", "510100,成都市", "510115,温江区"],
  ["510000,四川省", "510100,成都市", "510116,双流区"],
  ["520000,贵州省", "520100,贵阳市", "520102,南明区"],
  ["530000,云南省", "530100,昆明市", "530102,五华区"],
  ["610000,陕西省", "610100,西安市", "610102,新城区"],
  ["610000,陕西省", "610100,西安市", "610103,碑林区"],
  ["610000,陕西省", "610100,西安市", "610104,莲湖区"],
  ["620000,甘肃省", "620100,兰州市", "620102,城关区"],
  ["630000,青海省", "630100,西宁市", "630102,城东区"],
  ["640000,宁夏回族自治区", "640100,银川市", "640104,兴庆区"],
  ["650000,新疆维吾尔自治区", "650100,乌鲁木齐市", "650102,天山区"]
];

/**
 * 地址解析核心逻辑
 */
const AddressParse = {
  parse(address) {
    const userDetail = this._parseUserDetail(address);
    const addressDetail = this._parseAddressDetail(userDetail.address);
    return { ...userDetail, ...addressDetail };
  },

  _parseUserDetail(address) {
    const detail = { name: '', mobile: '', idCard: '', zipCode: '' };

    // 过滤常用说明字符
    address = address.replace(
      /收货地址|地址|收货人|收件人|收货|邮编|电话|身份证号码|身份证号|身份证|详细地址|手机号码|所在地区|[：:；;，,。\."""']/g,
      ' '
    );

    // 合并空白字符
    address = address.replace(/\s+/g, ' ').trim();

    // 去除手机号中的短横线
    address = address.replace(/0-|0?(\d{3})-(\d{4})-(\d{4})/g, '$1$2$3');

    // 提取身份证号
    const idCardMatch = address.match(/\d{18}|\d{17}[Xx]/);
    if (idCardMatch) {
      detail.idCard = idCardMatch[0].toUpperCase();
      address = address.replace(idCardMatch[0], '');
    }

    // 提取手机号或座机号
    const mobileMatch = address.match(/\d{7,11}|\d{3,4}-\d{6,8}/);
    if (mobileMatch) {
      detail.mobile = mobileMatch[0];
      address = address.replace(mobileMatch[0], '');
    }

    // 提取邮编
    const zipMatch = address.match(/\d{6}/);
    if (zipMatch) {
      detail.zipCode = zipMatch[0];
      address = address.replace(zipMatch[0], '');
    }

    // 合并空格并分割
    address = address.replace(/ {2,}/g, ' ').trim();
    const parts = address.split(' ').filter(p => p);

    if (parts.length > 1) {
      let name = parts[0];
      for (const part of parts) {
        if (part.length < name.length) name = part;
      }
      detail.name = name;
      address = address.replace(name, '').trim();
    }

    detail.address = address;
    return detail;
  },

  _parseAddressDetail(address) {
    const detail = {
      province: { code: '', name: '' },
      city: { code: '', name: '' },
      district: { code: '', name: '' },
      formattedAddress: ''
    };

    if (!address) return detail;

    address = address.replace(/_/g, '');
    let formattedAddress = address.replace(/^(\D+?)(市)/, '');
    formattedAddress = formattedAddress.replace(/^(\D+?)(区|县|旗)/, '');

    let matched = [];

    // 匹配三级地址
    for (const area of areaData) {
      const districtName = area[2].substring(7);
      const districtShort = districtName.length > 1 
        ? districtName.substring(0, districtName.length - 1) 
        : districtName;
      if (address.includes(districtShort)) {
        matched.push(area);
      }
    }

    // 二级地址过滤
    if (matched.length > 1) {
      const filtered = matched.filter(area => {
        const cityName = area[1].substring(7);
        const cityShort = cityName.length > 1 
          ? cityName.substring(0, cityName.length - 1) 
          : cityName;
        return address.includes(cityShort);
      });
      if (filtered.length) matched = filtered;
    }

    // 一级地址过滤
    if (matched.length > 1) {
      const filtered = matched.filter(area => {
        const provinceName = area[0].substring(7);
        const provinceShort = provinceName.length > 1 
          ? provinceName.substring(0, provinceName.length - 1) 
          : provinceName;
        return address.includes(provinceShort);
      });
      if (filtered.length) matched = filtered;
    }

    if (matched.length) {
      const area = matched[0];
      detail.province = { code: area[0].substring(0, 6), name: area[0].substring(7) };
      detail.city = { code: area[1].substring(0, 6), name: area[1].substring(7) };
      detail.district = { code: area[2].substring(0, 6), name: area[2].substring(7) };
      detail.formattedAddress = formattedAddress.trim();
    }

    return detail;
  }
};
