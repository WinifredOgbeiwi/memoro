import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import React from "react";

const DashboardPage = () => {
  return (
   <div className="w-full ">
  <div className="flex justify-between items-center w-full">
    <h2 className="font-semibold ">Welcome Winifred,</h2>
    <div>
      <ThemeToggleButton/>
    </div>
  </div>
</div>

  );
};

export default DashboardPage;
