import Image from "next/image";
import { IMAGES } from "../lib/utils";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full  w-full flex flex-col md:flex-row justify-center items-center ">
      <div className="h-full w-full md:w-1/2 px-5 md:px-16 pt-5 xs:pt-0 bg-background flex flex-col justify-center "> {children}</div>

      <div className=" hidden md:flex relative flex-col h-full  justify-center items-center  w-1/2 bg-[#3e2687]">
      <Image src={IMAGES.Auth_bg} alt="Memoro_auth_bg" fill={true} className="absolute"/>
       {/* <ThemeToggleButton /> */}
       <div className="relative flex flex-col justify-center items-center gap-5">
        <Image
          src={IMAGES.Auth1}
          alt="Memoro_AuthImg"
          width={350}
          height={350}
         
        />
        <div className="mt-5 text-[#ffffff] text-center flex flex-col gap-2">
                 <h3 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur </h3>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quaerat ad vitae tempore ipsa molestias, dignissimos rerum illo sapiente quae.</p>
        </div>
 
       </div>
       
      </div>
    </main>
    );
}