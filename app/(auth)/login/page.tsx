"use client";
import Button from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { IMAGES, ROUTES } from "@/app/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const [userData, setUserData] = React.useState({
    identifier: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data:", userData);
    // Handle login logic here
  };

  return (
    <section className="flex flex-col justify-center items-center w-full max-w-md mx-auto gap-5 text-text-primary py-8">
      <Link href={ROUTES.home}>
        <Image
          src={theme === "dark" ? IMAGES.Logo_White : IMAGES.Logo}
          alt="Memoro_auth_bg"
          width={80}
          height={80}
          priority={true}
        />
      </Link>

      <div className="w-full text-center">
        <h1 className="font-bold text-3xl mb-2.5">Welcome Back</h1>
        <p>Login to access your memoro account</p>
      </div>

      <button className="border border-primary6 rounded-md text-center w-full p-1 text-lg font-bold flex items-center justify-center gap-4">
        <Image
          width={25}
          height={25}
          src={IMAGES.Google_Logo}
          alt="google-logo"
        />
        <span>Login with Google</span>
      </button>

      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-[0.5px] bg-grey5"></div>
        <p className="text-center text-sm text-text-secondary">or with email</p>
        <div className="flex-1 h-[0.5px] bg-grey5"></div>
      </div>

      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <Input
          label="Email or Username"
          name="identifier"
          type="text"
          value={userData.identifier}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
        />
        <Button style="mt-2" type="submit" text="Login" />
      </form>

      <div className="flex justify-between items-center text-sm gap-4 w-full xs:flex-row flex-col xs:items-start">
        <p className="text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            href={ROUTES.register}
            className="text-primary2 hover:underline hover:scale-105"
          >
            Register
          </Link>
        </p>
        <Link
          href={ROUTES.forgot_password}
          className="text-primary2 hover:underline hover:scale-105"
        >
          Forgot Password?
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
