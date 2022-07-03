import axios, { AxiosRequestConfig } from 'axios';

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
