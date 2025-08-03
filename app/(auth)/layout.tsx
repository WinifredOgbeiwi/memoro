import Image from "next/image";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { IMAGES } from "../lib/utils";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full  w-full flex flex-col md:flex-row justify-center items-center ">
      <div className="h-full w-full md:w-1/2 px-5 md:px-16 pt-5 xs:pt-0 bg-background flex flex-col justify-center "> {children}</div>
      <div className=" hidden md:flex relative flex-col h-full w-1/2 bg-primary2">
      <Image src={IMAGES.Auth_bg} alt="Memoro_auth_bg" fill={true} className="absolute"/>
       <ThemeToggleButton />
       
        {/* text */}
      </div>
    </main>
    );
}