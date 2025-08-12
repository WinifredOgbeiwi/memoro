"use client";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { PanelTopClose } from "lucide-react";
import DashboardNavbar from "../components/DashboardNavbar";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const width = useWindowWidth();

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <main className="flex h-full relative overflow-hidden bg-primary9">
      <motion.div
        animate={{
          width: openSidebar ? "13rem" : "4rem",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="bg-primary2 text-text-primary h-full fixed top-0 left-0 z-[2000]"
      >
        <Sidebar handleSidebar={handleSidebar} openSidebar={openSidebar} />
      </motion.div>

      <motion.div
        animate={{
          paddingLeft: openSidebar && width > 640 ? "15rem" : "5rem",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-y-auto overflow-x-hidden flex-1 bg-primary9 pr-4 w-full"
      >
        <div className="flex justify-between items-start w-full relative">
 
          {width > 640 && (
            <motion.div
              animate={{
                left: openSidebar ? "208px" : "60px",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="w-fit p-1 pr-2 rounded-tr-2xl rounded-br-2xl bg-primary2 fixed top-0 overflow-hidden"
            >
              <PanelTopClose
                className="text-white w-5 cursor-pointer hover:text-primary hover:scale-105"
                onClick={handleSidebar}
              />
            </motion.div>
          )}
          <div className={`w-full ${openSidebar ? "mx-1" : "mx-5"}`}>
            <DashboardNavbar />
            <div className="mt-8 custom-scrollbar">{children}</div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
