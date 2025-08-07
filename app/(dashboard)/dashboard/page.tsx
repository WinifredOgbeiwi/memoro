import Card from "@/app/components/Card";
import { IMAGES } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="w-full">
    
      <Card>
        <div className="h-52 w-full bg-primary2 text-white relative rounded-lg ">
          <Image
            src={IMAGES.Blob_bg}
            alt="Memoro-blob-img"
            fill={true}
            className="absolute object-cover "
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

      {/* <div className=" ">
        <div className="w-2/3">
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
        </div>
        <div className="w-1/3">
          <Card>
            <div className="w-full h-60">6</div>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardPage;
