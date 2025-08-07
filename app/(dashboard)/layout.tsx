"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { motion } from "framer-motion";
import { PanelTopClose } from "lucide-react";
import DashboardNavbar from "../components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const [openSidebar, setOpenSidebar] = useState(false);
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
        className="bg-primary2 text-text-primary h-full fixed"
      >
        <Sidebar handleSidebar={handleSidebar} openSidebar={openSidebar} />
      </motion.div>

      <motion.div
        animate={{
          paddingLeft: openSidebar ? "15rem" : "5rem",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-y-auto flex-1 bg-primary9 pr-4 w-full"
      >
        <div className="flex justify-between items-start  w-full relative">
          <motion.div
            animate={{
              left: openSidebar ? "208px" : "60px",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={`w-fit p-1 pr-2 rounded-tr-2xl rounded-br-2xl  bg-primary2 fixed top-0 overflow-hidden  
            }`}
          >
            <PanelTopClose
              className={`text-white w-5 cursor-pointer hover:text-primary hover:scale-105`}
              onClick={handleSidebar}
            />
          </motion.div>
          <div className={`w-full ${openSidebar ? "mx-1" : "mx-5"}`}>
            <DashboardNavbar />
            <div className="mt-8 custom-scrollbar">{children}</div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
