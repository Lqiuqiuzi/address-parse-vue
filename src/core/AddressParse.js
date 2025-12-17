/**
 * 中国收货地址智能解析
 */
let areaData = [];

export const AddressParse = {
  /**
   * 设置地区数据
   */
  setAreaData(data) {
    areaData = data;
  },

  /**
   * 解析地址
   * @param {string} address 原始地址字符串
   * @returns {Object} 解析结果
   */
  parse(address) {
    const userDetail = parseUserDetail(address);
    const addressDetail = parseAddressDetail(userDetail.address);
    return { ...userDetail, ...addressDetail };
  }
};

function parseUserDetail(address) {
  const detail = {
    name: '',
    mobile: '',
    idCard: '',
    zipCode: ''
  };

  // 1. 过滤常用说明字符
  address = address.replace(
    /收货地址|地址|收货人|收件人|收货|邮编|电话|身份证号码|身份证号|身份证|详细地址|手机号码|所在地区|：|:|；|;|，|,|。|\.|"|"|"|'/g,
    ' '
  );

  // 2. 合并空白字符
  address = address.replace(/\s+/g, ' ').trim();

  // 3. 去除手机号中的短横线
  address = address.replace(/0-|0?(\d{3})-(\d{4})-(\d{4})/g, '$1$2$3');

  // 4. 提取身份证号
  const idCardMatch = address.match(/\d{18}|\d{17}[Xx]/);
  if (idCardMatch) {
    detail.idCard = idCardMatch[0].toUpperCase();
    address = address.replace(idCardMatch[0], '');
  }

  // 5. 提取手机号或座机号
  const mobileMatch = address.match(/\d{7,11}|\d{3,4}-\d{6,8}/);
  if (mobileMatch) {
    detail.mobile = mobileMatch[0];
    address = address.replace(mobileMatch[0], '');
  }

  // 6. 提取邮编
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
      if (part.length < name.length) {
        name = part;
      }
    }
    detail.name = name;
    address = address.replace(name, '').trim();
  }

  detail.address = address;
  return detail;
}

function parseAddressDetail(address) {
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

  // 完整名称再次匹配
  if (matched.length > 1) {
    const filtered = matched.filter(area => {
      const districtName = area[2].substring(7);
      return address.includes(districtName);
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
