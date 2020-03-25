/**
 * @description 封装fetch请求
 * @param method
 * @param url
 * @param data
 */
export const request = async (method: string, url: string, data: any) => {
  method = method.toUpperCase();

  let init: RequestInit = {
    credentials: 'include',//为了在当前域名内自动发送 cookie ， 必须提供这个选项
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: "cors",//请求的模式
    cache: "force-cache"
  };

  if (method === 'GET') {
    let dataStr = '';
    Object.keys(data).forEach((key: string) => {
      dataStr = `${key}=${data[key]}&`;
    });
    dataStr && (url += `?${dataStr.substring(0, dataStr.length - 1)}`);
  }

  if (method === 'POST') {
    init.body = JSON.stringify(data);
  }

  try {
    const response: ResponseInit = await fetch(url, init);
    return response;
  } catch (e) {
    console.error(url, e);
  }
};