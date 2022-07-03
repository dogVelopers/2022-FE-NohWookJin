import { ChangeEvent, useState } from 'react';
import useTextInput from './hooks/uesTextInput';
import { instance } from './libs/api';

export default function Study() {
  const { value: todo, onChange: onChangeToDo } = useTextInput({});
  // 배열 형식이 아닌 오브젝로 디스트럭쳐링
  // 배열로 쓰고 싶으면 function에서 튜플 타입으로
  // customHooks: 사용할 이름
  // 추상화
  const { value: writer, onChange: onChangeWriter } = useTextInput({ initialValue: '개발자들' });
  // initalValue 디폴트는 공백 / 설정 가능 / { }로 사용

  function onClickLogBtn() {
    console.log(todo);
    console.log(writer);
    instance.get('/todo');
    // console.log(process.env.REACT_APP_API_KEY);
  }

  return (
    <div>
      <input value={todo} onChange={onChangeToDo} />
      <input value={writer} onChange={onChangeWriter} />
      <button onClick={onClickLogBtn}>출력</button>
    </div>
  );
}

// 자바스크립트 모듈 시스템 => esm / cjs
// 모듈 시스템이란? 나누어진 파일을 사용자가 다운받을 때, 오래걸리기 때문에 모듈 시스템이 하나의 파일로 만들어줌
// CJS => require (초기)
// ESM => import (자바스크립트가 정식으로 지원)

// import {} 형식은 무조건 export된 값. 이름을 바꿀 수 없으며 파일을 한 개만 만들 수 있음
// import useTextInput과 같이 그냥 사용하는 건 언제든 이름을 바꿀 수 있음
