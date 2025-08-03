import { useState } from "react";
import { InputProps } from "../type";

export const Input = ({ label, name, value, onChange, type }: InputProps) => {
  const [isShowPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col relative">
      <label htmlFor={name}>{label}</label>
      <input
        type={type === "password" && isShowPassword ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border py-2 px-2  w-full rounded-md focus:outline-none focus:border-primary2 focus:bg-primary8 border-primary6"
        placeholder={name}
        required
      />
      {/* {type === "password" && (
        <div
          onClick={() => setShowPassword(!isShowPassword)}
          className="absolute cursor-pointer right-2 top-8"
        >
          {isShowPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      )} */}
    </div>
  );
};
