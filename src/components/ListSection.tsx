import { useEffect, useState } from 'react';
import { instance } from '../libs/api';

// records 데이터를 받아오기 위한 Records interface 생성
interface Records {
  id: string;
  fields: Fields;
}

// fields object를 위한 interface 생성
interface Fields {
  name: string;
}

export default function ListSection() {
  const [list, setList] = useState<Records[]>([]);

  // ComponentDidMount(=useEffect) => API 호출

  // 1. useEffect Hook 내부에서 정의
  // 컴포넌트가 마운트 되면, getRes 함수가 호출됨
  // getRes함수에서 res함수는 API를 호출(/todo)
  // setter인 setTodo는 getter인 todo에게 res함수에 담긴 데이터를 건내줌

  // useEffect(() => {
  //   const getRes = async () => {
  //     const res = await instance.get('/todo');
  //     setTodo(res.data.records);
  //   };
  //   getRes();
  // }, []);

  // 2. useEffect Hook 외부에서 정의
  const getRes = async () => {
    const res = await instance.get('/todo');
    setList(res.data.records);
  };
  useEffect(() => {
    getRes();
  }, []);

  return (
    <section>
      {list.map(list => {
        return <li key={list.id}>{list.fields.name}</li>;
      })}
    </section>
  );
}

// 질문...
// useEffect Hook 외부와 내부에서 비동기 함수를 정의하는 것이 차이가 있는것인지 큰것인지 궁금합니다...
