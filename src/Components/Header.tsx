import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-12/12 h-auto sticky  bg-white shadow-xl border-2 p-2 border-black/15  ">
      <div className="flex justify-start items-center gap-2">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={50} height={50} alt="Logo-Img" />
          <p className="text-black text-xl text-center font-bold">Portia </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
