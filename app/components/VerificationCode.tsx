import React, { useRef, useState } from "react";

 const VerificationCodeInput = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [codes, setCodes] = useState(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; 

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {codes.map((code, index) => (
        <input
          key={index}
          ref={(el) => {inputRefs.current[index] = el}}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 text-center border rounded-md text-2xl focus:outline-none focus:border-primary2 focus:bg-primary8 border-primary6"
          value={code}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};
export default VerificationCodeInput;


    //   className="border py-2 px-2  w-full rounded-md focus:outline-none focus:border-primary2 focus:bg-primary8 border-primary6"