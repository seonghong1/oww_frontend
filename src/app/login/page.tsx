"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const goToJoin = () => {
    router.push("/join");
  };

  const goToFindId = () => {
    router.push("/find-id");
  };

  const goToFindPassword = () => {
    router.push("/find-password");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1/4 flex flex-col">
        <form onSubmit={onLogin} className="flex flex-col items-start gap-2">
          <label htmlFor="id" className="font-noto-600 text-xs text-color-sub">
            아이디
          </label>
          <input
            id="id"
            type="text"
            autoComplete="username"
            className="input-style py-2.5 px-4 rounded-lg w-full"
            placeholder="아이디를 입력해주세요."
          />
          <label htmlFor="pw" className="font-noto-600 text-xs text-color-sub">
            비밀번호
          </label>
          <input
            id="pw"
            type="password"
            autoComplete="current-password"
            className="input-style py-2.5 px-4 rounded-lg w-full"
            placeholder="비밀번호를 입력해주세요"
          />
          <div></div>
          <button
            type="submit"
            className="text-color-white rounded-lg w-full bg-color-sub py-2.5 font-noto-600"
          >
            로그인
          </button>
        </form>
        <div className="flex justify-between items-center mt-1">
          <button
            type="submit"
            className="font-noto-600 text-sm text-color-sub"
            onClick={goToJoin}
          >
            회원가입
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={goToFindId}
              className="font-noto-600 text-sm text-color-sub"
            >
              아이디 찾기
            </button>
            <div className="w-0.5 h-3 bg-color-sub opacity-70	"></div>
            <button
              onClick={goToFindPassword}
              className="font-noto-600 text-sm text-color-sub"
            >
              비밀번호 찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
