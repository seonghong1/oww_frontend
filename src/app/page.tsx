"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  if (!mounted) return null; // 클라이언트가 렌더링될 때까지 기다림

  return (
    <>
      <p className="text-main dark:text-dark font-noto-600 text-xl">테스트 입니다.</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "라이트 모드" : "다크 모드"}
      </button>
    </>
  );
}
