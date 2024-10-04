import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "아이디 찾기",
  description: "아이디 찾기 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
