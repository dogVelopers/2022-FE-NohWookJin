// custon hooks
// hook은 무조건 use로 시작
// tsx : jsx처럼 컴포넌트일 때
// ts : 랜더링하는 컴포넌트가 아닌 로직
// 중복관리

import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
  // ? => string | undefined  들어가고 되고 안들어가 되고
}
// 인터페이스 작성 후 파라미터로

function useTextInput({ initialValue = '' }: Props) {
  // (= '') => default 값
  const [value, setValue] = useState<string>(initialValue);
  // todo가 아닐때도 쓰므로 value로

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange };
  // 오브젝트로 리턴
}

export default useTextInput;
