import Card from "@/app/components/ui/Card";
import { IMAGES } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col md:flex-row gap-5 justify-between ">
        {/* 1 */}
        <div className="w-full md:w-2/3">
           <Card>
        <div className="h-52 w-full bg-primary2 text-white relative rounded-lg ">
          <Image
            src={IMAGES.Blob_bg}
            alt="Memoro-blob-img"
            fill={true}
            className="absolute object-cover w-full h-full "
          />
          <div className="flex justify-between items-center relative z-50">
            <div className="">
              <h3>lorem</h3>
              <p></p>
            </div>
            <Image
              src={IMAGES.MotivationImage}
              alt="Motivation-img"
              width={250}
              height={250}
              className=" "
            />
          </div>
        </div>
      </Card> 
      
      <div className="grid grid-cols-3 gap-5">
        <Card>
          <div className="w-full h-28"></div>
        </Card>
        <Card>
          <div className="w-full h-28"></div>
        </Card>
         <Card>
          <div className="w-full h-28"></div>
        </Card>
      </div>

         <div className="grid grid-cols-3 gap-5">
        <Card>
          <div className="w-full h-28"></div>
        </Card>
        <Card>
          <div className="w-full h-28"></div>
        </Card>
         <Card>
          <div className="w-full h-28"></div>
        </Card>
      </div>

      <Card>
        <div className="w-full h-52">Graph</div>
      </Card>
        </div>
        {/* 2 */}
        <div className="w-1/3 bg-amber-600">j</div>
      </div>

    </div>
  );
};

export default DashboardPage;
