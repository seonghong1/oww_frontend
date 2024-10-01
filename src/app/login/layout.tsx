import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  description: "로그인 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
