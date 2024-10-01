import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import {
  notoSans200,
  notoSans300,
  notoSans400,
  notoSans500,
  notoSans600,
  notoSans700,
} from "./fonts";

export const metadata: Metadata = {
  title: "OWW",
  description: "OWW 메인 페이지입니다.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${notoSans200.variable} ${notoSans300.variable} ${notoSans400.variable} ${notoSans500.variable} ${notoSans600.variable} ${notoSans700.variable}`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
