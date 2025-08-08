"use client";
import React, { useState } from "react";
import Button from "@/app/components/ui/Button";
import { Input } from "@/app/components/Input";
import { IMAGES, ROUTES } from "@/app/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentEmail(true);
    // Handle forgot password logic here
  };

  return (
    <section className="flex flex-col w-full max-w-md mx-auto gap-5 text-text-primary justify-center max-h-screen px-4 py-8 overflow-y-auto">
      <Link href={ROUTES.home}>
        <Image
          src={theme === "dark" ? IMAGES.Logo_White : IMAGES.Logo}
          alt="Memoro_auth_bg"
          width={80}
          height={80}
          priority={true}
        />
      </Link>
      {sentEmail ? (
        <div className="flex flex-col items-center justify-center gap-4 w-full text-center">
          <Image
            src={IMAGES.email}
            alt="Email Sent"
            width={150}
            height={150}
            className="max-w-[80%] h-auto"
          />

          <h1 className="font-bold text-3xl mb-2.5">Check Your Email</h1>
          <p>
            A password reset link has been sent to your email address.
            <br />
            Didn&apos;t get the email? Check your spam or junk folder and ensure
            you entered the correct email.
          </p>
        </div>
      ) : (
        <>
          <div className="w-full text-center">
            <h1 className="font-bold text-3xl mb-2.5">Forgot Your Password?</h1>
            <p>
              Enter the email address linked to your account, and we will send
              you a password reset link.
            </p>
          </div>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
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
            <p className="text-text-secondary">
              Remember password?{" "}
              <Link
                href={ROUTES.login}
                className="text-primary2 hover:underline hover:scale-105"
              >
                Login
              </Link>
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default ForgotPasswordPage;
