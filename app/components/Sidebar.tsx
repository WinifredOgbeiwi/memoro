"use client";
import Image from "next/image";
import React from "react";
import { DashboardSidebar, IMAGES, ROUTES } from "../lib/utils";
import Link from "next/link";
import { LogOut, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const {theme} = useTheme();
  return (
    <div className="p-3 flex flex-col h-full">
      <Link href={ROUTES.dashboard}>
        <Image
          src={theme === "dark"?IMAGES.Logo:IMAGES.Logo_White}
          alt="Memoro_Logo"
          width={60}
          height={60}
          priority={true}
        />
      </Link>

      <div className="flex-1 mt-8 flex flex-col gap-8">
        {
            DashboardSidebar.map(({route,icon:Icon,title,id}) => (
              <Link
                key={id}
                href={route}
                className="flex items-center gap-2 w-fit group"
              >
              <Icon className="text-white group-hover:text-primary4 transition-colors duration-200" />
        <p className="text-white text-xs font-semibold group-hover:text-primary4 transition-colors duration-200">
          {title}
        </p>
              </Link>
            ))
        }
       
      </div>

      <div className="flex flex-col gap-2 text-white text-xs  ">
        <Link href={ROUTES.feedback} className="flex items-center gap-2">
        <MessageCircle className="text-white"/>
          <p className=" font-semibold">Feedback</p>
        </Link>
        <div className="flex items-center gap-2 p-2 cursor-pointer">
          <LogOut className="text-white"/>
                 <p className="font-semibold">Logout</p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
