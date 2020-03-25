import {request} from '../utils/request';
import dataSource from './dataSource';

class MakeApi {

  public api: any = {};
  private dataSource: any = dataSource;

  constructor() {
    this.apiBuilder();
  }

  apiBuilder() {
    Object.keys(dataSource).forEach(key => {
      this.apiSingleBuilder({
        namespace: key,
        configs: this.dataSource[key]
      })
    });
  }

  apiSingleBuilder(apiConfig: any) {
    const {
      namespace,
      configs
    } = apiConfig;
    configs.forEach((config: any): void => {
      const {
        name,
        method,
        path,
      } = config;
      const apiName = `${namespace}/${name}`;
      Object.defineProperty(this.api, apiName, {
        value: (data: any) => {
          return request(method, path, data);
        },
        writable: false
      })
    });

  }

}

export default new MakeApi().api;
