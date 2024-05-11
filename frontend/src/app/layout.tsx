import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavItem from "../components/common/navItem";
import './layout.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-sidebar">
          <div className="layout-sidebar__logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="layout-sidebar__nav">
            <NavItem href="/"> Home </NavItem>
            <NavItem href="/businesses"> Businesses </NavItem>
            <NavItem href="/settings" disabled> Settings </NavItem>
          </div>
        </div>
        <div className="layout-content">
          {children}
        </div>
      </body>
    </html>
  );
}
