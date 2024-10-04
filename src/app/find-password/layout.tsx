import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비밀번호 찾기",
  description: "비밀번호 찾기 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
