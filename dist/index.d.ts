export interface Region {
  code: string;
  name: string;
}

export interface AddressResult {
  name: string;
  mobile: string;
  idCard: string;
  zipCode: string;
  address: string;
  province: Region;
  city: Region;
  district: Region;
  formattedAddress: string;
}

export interface AddressParseInstance {
  parse(address: string): AddressResult;
  setAreaData(data: string[][]): void;
}

export declare const AddressParse: AddressParseInstance;

declare const AddressParsePlugin: {
  install(app: any, options?: { areaData?: string[][] }): void;
};

export default AddressParsePlugin;

// Vue 3 Composition API
declare module 'vue' {
  interface ComponentCustomProperties {
    $addressParse: (address: string) => AddressResult;
  }
}

// Vue 2
declare module 'vue/types/vue' {
  interface Vue {
    $addressParse: (address: string) => AddressResult;
  }
}
