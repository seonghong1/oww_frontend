"use client";

import { FaRegBell } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex justify-between bg-color-main items-center px-8 py-3">
      <h1 className="text-color-white font-noto-700 text-xl	">OWW</h1>
      <div className="flex items-center gap-7">
        <FaRegBell className="text-color-white text-2xl curs" />
        <div className="flex items-center gap-2">
          <img
            src="https://blog.kakaocdn.net/dn/Hh733/btrcA1znbC9/m3cFIkMBMYyJlnHe7WBiN1/img.gif"
            alt="프로필 이미지"
            className="w-8 h-8"
          />
          <p className="font-noto-600 text-color-white">뚝섬에 무농사</p>
        </div>
      </div>
    </header>
  );
}
