"use client";

import { FormEvent } from "react";

export default function Login() {
  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-2/4 flex flex-col">
        <form onSubmit={onLogin} className="flex flex-col items-start">
          <input type="text" className="input-style" placeholder="아이디를 입력해주세요." />
          <input type="text" placeholder="비밀번호를 입력해주세요" />
          <div></div>
          <button type="submit" className="text-gray">
            로그인
          </button>
        </form>
        <div className="">
          <button type="submit">회원가입</button>
          <div>
            <button>아이디 찾기</button>|<button>비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
