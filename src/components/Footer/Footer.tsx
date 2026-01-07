"use client";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Trail ©{new Date().getFullYear()} by{" "}
      <a
        href="http://gardenventures.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Garden Ventures
      </a>
    </Footer>
  );
};

export default FooterPage;
