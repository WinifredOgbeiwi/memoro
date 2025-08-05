"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { motion } from "framer-motion";
import { PanelTopClose } from "lucide-react";

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
    <main className="flex h-full relative overflow-hidden bg-primary9 ">
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
        <div className="flex justify-between items-center w-full ">

        
        <div
          className={`w-fit p-1 pr-2 rounded-tr-2xl rounded-br-2xl relative bg-primary2 ${
            openSidebar ? "-left-[33px]" : "-left-[17px]"
          }`}
        >
          <PanelTopClose
            className={`text-white w-5 cursor-pointer hover:text-primary hover:scale-105`}
            onClick={handleSidebar}
          />
        </div>

        {children}
        </div>
      </motion.div>
    </main>
  );
}
