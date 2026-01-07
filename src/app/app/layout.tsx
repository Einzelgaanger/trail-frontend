import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import Header from "@/components/header";

import { ThemeProvider } from "@/Theme/ThemeProvider";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import SideBar from "@/components/sideBar";
import FooterPage from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trail",
  description: "Monitoring and evaluation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider>
        <div className="container-scroller">
          <Header />

          <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
            {" "}
            <SideBar />
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row page-title-header">{children}</div>
              </div>
              <FooterPage />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
