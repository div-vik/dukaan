"use client";

import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

const Card = ({ title, amount, orders }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-fit flex flex-col gap-2 bg-white shadow-md hover:bg-[#146EB4] rounded-lg hover:text-white cursor-pointer"
    >
      <div className=" flex flex-col px-5 py-6 gap-4">
        <div className="flex items-center gap-2 hover:text-white">
          <p className="font-[400] text-xs xl:text-lg">{title}</p>
          <span>
            <Image
              className="object-contain"
              src={isHovered ? "/help2.png" : "/help.png"}
              alt="help"
              width={15}
              height={15}
            />
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <p className="text-base lg:text-xl xl:text-3xl font-[500]">
            ₹{amount}
          </p>
          <span className="flex items-center gap-1">
            <p className="text-sm lg:text-sm xl:text-base underline">
              {orders}
            </p>
            {title !== "Amount Processed" && <MdArrowForwardIos />}
          </span>
        </div>
      </div>

      {isHovered && (
        <div className="flex justify-between items-center px-5 py-2 rounded-lg text-xs lg:text-xs xl:text-sm bg-[#0E4F82] w-full">
          <p>Next payout date:</p>
          <p>Today, 04:00PM</p>
        </div>
      )}
    </div>
  );
};

export default Card;
