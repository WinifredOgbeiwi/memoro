"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { IMAGES, ROUTES } from "@/app/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
const [email, setEmail] = useState("");

const [sentEmail , setSentEmail] = useState(false);

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Email:", email);
    setSentEmail(true);
    console.log(sentEmail)
    // Handle login logic here
  };

  return (
    <section className="flex flex-col justify-center w-full  px-5 md:px-16 gap-5 h-full">
      
      <Link href={ROUTES.home}>
        <Image
          src={theme === "dark" ? IMAGES.Logo_White : IMAGES.Logo}
          alt="Memoro_auth_bg"
          width={80}
          height={80}
          className=""
          priority={true}
        />
      </Link>
{
  sentEmail ? (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={IMAGES.email}
        alt="Email Sent"
        width={200}
        height={200}
        />
      <h1 className="font-bold text-3xl mb-2.5">Check Your Email</h1>
      <p>A password reset link has been sent to your email address.</p>
Didn't get the email?
Check your spam or junk folder and ensure you entered the correct email.
    </div>
  ) : (
    <>
      <div>
        <h1 className="font-bold text-3xl mb-2.5"> Forgot Your Password?</h1>
        <p>Enter the email address linked to your account, and we will send you a password reset link.</p>
      </div>
      
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
     
       <Input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />

        <Button style="mt-2" type="submit" text="Reset" />
      </form>
      <div className="flex  justify-between items-center text-sm gap-4 xs:flex-row flex-col xs:items-start">
        <p className="text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            href={ROUTES.register}
            className="text-primary2 hover:underline hover:scale-105"
          >
            Register
          </Link>
        </p>
  <p className="text-text-secondary">
          Remember password?{" "}
          <Link
            href={ROUTES.register}
            className="text-primary2 hover:underline hover:scale-105"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  )
}
    

    
    </section>
  );
};

export default LoginPage;
