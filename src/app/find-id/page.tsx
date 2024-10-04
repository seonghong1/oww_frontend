"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [isIdFound, setIsIdFound] = useState(false);

  const onFindId = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsIdFound(!isIdFound);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1/4">
        <h1 className="title-h1 mb-6">아이디 찾기</h1>
        <form
          onSubmit={onFindId}
          className={`flex flex-col gap-5 ${isIdFound ? "disabled-form" : ""}`}
        >
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
            아이디 찾기
          </button>
        </form>

        {isIdFound && (
          <p className="mt-5 bg-color-sub text-color-white text-center rounded-lg py-6 font-noto-600">
            wodeanniversary
          </p>
        )}
      </div>
    </div>
  );
}
