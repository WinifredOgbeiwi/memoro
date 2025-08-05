"use client";
import Image from "next/image";
import React from "react";
import { DashboardSidebar, IMAGES, ROUTES } from "../lib/utils";
import Link from "next/link";
import { LogOut, MessageCircle, PanelTopClose } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { SidebarProps } from "../type";

const Sidebar = ({ openSidebar }: SidebarProps) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <div className={`p-3 pr-0 flex flex-col h-full`}>
      <div className="flex items-center justify-between pr-3 ">
        <Link href={ROUTES.dashboard}>
          <Image
            src={theme === "dark" ? IMAGES.Logo : IMAGES.Logo_White}
            alt="Memoro_Logo"
            width={50}
            height={50}
            priority={true}
          />
        </Link>

       
      </div>

      <div className="flex-1 mt-6 flex flex-col gap-2">
        {DashboardSidebar.map(({ route, icon: Icon, title, id }) => (
          <Link
            key={id}
            href={route}
            className={`flex ${
              pathname === route ? "bg-primary9 rounded-l-3xl text-primary9" : ""
            } py-3 pl-2  w-full items-center gap-2 group`}
          >
            <Icon
              className={`group-hover:text-primary4 w-5 ${
                pathname === route ? " text-text-primary" : "text-white "
              } `}
            />
            <p
              className={` text-xs font-semibold group-hover:text-primary4 ${
                pathname === route ? " text-text-primary" : "text-white "
              } ${openSidebar ? "block" : "hidden"}`}
            >
              {title}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2 text-white text-xs  ">
        <Link href={ROUTES.feedback} className="flex items-center gap-2">
          <MessageCircle className="text-white w-5" />
          <p className={` font-semibold ${openSidebar ? "block" : "hidden"}`}>
            Feedback
          </p>
        </Link>
        <div className="flex items-center gap-2 cursor-pointer">
          <LogOut className="text-white w-5" />
          <p className={`font-semibold ${openSidebar ? "block" : "hidden"}`}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
