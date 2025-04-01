import React from "react";
import { Footer, Header, ScrollToTop } from "./_components";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
