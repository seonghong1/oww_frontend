import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입",
  description: "회원가입 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
