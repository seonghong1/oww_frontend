"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const onJoin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1/4">
        <h1 className="title-h1 mb-6">회원가입</h1>
        <form onSubmit={onJoin} className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <label htmlFor="" className="label-style">
              아이디
            </label>
            <input
              type="text"
              autoComplete="username"
              className="input-style rounded-md py-1.5 px-3 text-sm w-8/12"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="label-style">
              비밀번호
            </label>
            <input
              type="password"
              autoComplete="new-password"
              className="input-style rounded-md py-1.5 px-3 text-sm w-8/12"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="label-style">
              비밀번호 확인
            </label>
            <input
              type="password"
              autoComplete="new-password"
              className="input-style rounded-md py-1.5 px-3 text-sm w-8/12"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="label-style">
              닉네임
            </label>
            <input
              type="text"
              className="input-style rounded-md py-1.5 px-3 text-sm w-8/12"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="label-style">
              이메일 주소
            </label>
            <input
              type="email"
              className="input-style rounded-md py-1.5 px-3 text-sm w-8/12"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="label-style">
              생년월일
            </label>
            <input
              type="date"
              className="input-style rounded-md py-1.5 px-3 text-sm w-8/12"
            />
          </div>
          <button
            type="submit"
            className="text-color-white rounded-md w-full bg-color-sub py-2.5 font-noto-600"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
