// 전역적으로 선언하는 타입에 대해서
// d = declaration
// 타입에 대한 것만 쓰는 파일
// 여기서 작성한 타입은 다른 컴포넌트에서 import 안해도 사용가능하다.

interface ITodo {
  id: string;
  createdTime: string;
  fields: {
    name: string;
  };
}
