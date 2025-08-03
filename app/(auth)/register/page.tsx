"use client";
import Button from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { countries } from "@/app/lib/data";
import { IMAGES, ROUTES } from "@/app/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  const [role, setRole] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data:", userData,role, country);
    // Handle register logic here
  };

  return (
    <section className="flex flex-col justify-center px-5 w-full gap-5 text-text-primary">
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

      <div>
        <h1 className="font-bold text-3xl mb-2.5">Let&apos;s Get Started</h1>
<p>Join Memoro and make studying less stressful</p>
</div>
      <button className="border border-primary6 rounded-md text-center w-full p-1 text-lg font-bold flex items-center justify-center gap-4">
        <Image
          width={25}
          height={25}
          src={IMAGES.Google_Logo}
          alt="google-logo"
        />
        <span>Register with Google</span>
      </button>

      <div className="flex items-center gap-4">
        <div className="w-full h-[0.5px] bg-grey5"></div>
        <p className="flex w-full justify-center text-center text-sm items-center text-text-secondary ">
          or with email
        </p>
        <div className="w-full h-[0.5px] bg-grey5"></div>
      </div>

      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          value={userData.username}
          onChange={handleChange}
        />


        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col relative w-full md:w-1/2">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              className="border py-2 px-2  w-full rounded-md focus:outline-none focus:border-primary2 focus:bg-primary8 border-primary6"
              value={role}
              style={{
                color: role === "" ? "gray" : "#000",
              }}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled style={{ color: "gray" }}>
                Select your role
              </option>
              <option value="student" style={{ color: "black" }}>
                Student
              </option>
              <option value="worker" style={{ color: "black" }}>
                Worker
              </option>
              <option value="other" style={{ color: "black" }}>
                Others
              </option>
            </select>
          </div>
          <div className="flex flex-col relative w-full md:w-1/2">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              className="border py-2 px-2  w-full rounded-md focus:outline-none focus:border-primary2 focus:bg-primary8 border-primary6"
              value={country}
              style={{
                color: country === "" ? "gray" : "#000",
              }}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="" disabled style={{ color: "gray" }}>
                Select your country
              </option>
              {countries.map((c) => (
                <option key={c.code} value={c.code} style={{ color: "black" }}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={userData.email}
          onChange={handleChange}
        />

      
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col relative w-full md:w-1/2">
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col relative w-full md:w-1/2">
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
 <div>
            <input type="checkbox" name="" id="" />
          <label htmlFor=""> I agree to the terms and conditions </label>
          
        </div>
        <Button type="submit" text="Register" />
      </form>
      <div className="text-sm  ">
       
      

        <p className="text-text-secondary">
         Already have an account? {""}
          <Link
            href={ROUTES.login}
            className="text-primary2 hover:underline hover:scale-105"
          >
            Login
          </Link>
        </p>
        
      </div>
    </section>
  );
};

export default RegisterPage;
