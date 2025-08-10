import { FolderCardProps } from "@/app/type";
import React from "react";


const FolderCard: React.FC<FolderCardProps> = ({
  title,
  onClick,
  description,
}) => {
  return (
    <div
      className="bg-primary4 hover:bg-primary3 rounded-tr-lg rounded-b-md shadow-md cursor-pointer transition hover:scale-105 w-40 sm:w-48 h-32 flex flex-col"
      onClick={onClick}
      style={{
        position: "relative",
      }}
    >
      <div
        className="bg-primary3  w-24 h-6 absolute left-0 -top-[23px]"
        style={{
          clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }}
      />
      <div className="flex-1 flex flex-col justify-center items-center px-4 pt-6">
        
        <span className="font-semibold text-lg text-white">{title}</span>
        {description && (
          <p className="text-[9px] text-center text-white mt-1  ">
           {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default FolderCard;














// import React from "react";

// interface FolderCardProps {
//   title: string;
//   description?: string;
//   onClick?: () => void;
//   icon?: React.ReactNode;
// }

// const FolderCard: React.FC<FolderCardProps> = ({
//   title,
//   onClick,
//   icon,
//   description,
// }) => {
//   return (
//     <div
//       className="bg-primary2 rounded-b-md shadow-md cursor-pointer transition hover:scale-105 w-48 h-32 flex flex-col"
//       onClick={onClick}
//       style={{
//         position: "relative",
//       }}
//     >
//       {/* Simulated files inside the folder */}
//       <div className="absolute left-4 -top-4 w-[176px] h-3 bg-grey5 rounded-tr-sm shadow-sm z-0" />
//       <div className="absolute left-8 -top-2 w-40 h-2 bg-grey6 shadow-sm z-0 " />

//       <div
//         className="bg-primary3 w-24 h-6 absolute left-0 -top-[23px] z-10"
//         style={{
//           clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
//           borderTopLeftRadius: "0.5rem",
//           borderTopRightRadius: "0.5rem",
//         }}
//       />
//       <div className="flex-1 flex flex-col justify-center items-center px-4 pt-6 z-20">
//         {icon && <div className="mb-2">{icon}</div>}
//         <span className="font-semibold text-lg text-gray-800">{title}</span>
//         {description && (
//           <p className="text-sm text-gray-600 mt-1">
//             Your learning description will be displayed here.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FolderCard;
