import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/Theme/ThemeProvider";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

// Dynamic imports for heavy components to improve initial load time
const Header = dynamic(() => import("@/components/header"), {
  ssr: true,
});
const SideBar = dynamic(() => import("@/components/sideBar"), {
  ssr: true,
});
const FooterPage = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: true,
});

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
