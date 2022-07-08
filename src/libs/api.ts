import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/app5AO0SumKR9cNKp',
});
// 자주 쓰이는 것들 한꺼번에 모아서

// axios.get('https://naver.com/list')
// baseurl 쓰기 전

// axios.get('/list');
// baseurl 쓰고 난 후

// axios interceptor

// 요청할 때 인터셉트
// App => Axios ==(인터셉트: 토큰값)==> 서버
function requestInterceptor(config: AxiosRequestConfig) {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
}

instance.interceptors.request.use(requestInterceptor);

// 받아올 때 인터셉트
// 성공 시
function responseFulfilledInterceptor(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }

  // 실패시
  return Promise.reject(res.data);
}

// 실패 시
function responseRejectedInterceptor(error: AxiosError) {
  return error;
}

instance.interceptors.response.use(responseFulfilledInterceptor, responseRejectedInterceptor);
