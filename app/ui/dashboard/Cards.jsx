import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const Cards = ({ title, amount, orders }) => {
  return (
    <div className="w-full bg-[#146EB4] rounded-lg relative text-white">
      <div className=" flex flex-col px-5 py-6 gap-4 mb-10">
        <div className="flex items-center gap-2 text-white">
          <p className="font-[400] text-sm xl:text-lg">{title}</p>
          <span>
            <Image
              className="object-contain"
              src="/help2.png"
              alt="help"
              width={15}
              height={15}
            />
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm lg:text-xl xl:text-3xl">₹{amount}</p>
          <span className="flex items-center gap-1">
            <p className="text-xs lg:text-sm xl:text-base underline">
              {orders}
            </p>
            <MdArrowForwardIos />
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center absolute bottom-0 px-5 py-2 rounded-lg text-xs lg:text-xs xl:text-sm bg-[#0E4F82] w-full">
        <p>Next payout date:</p>
        <p>Today, 04:00PM</p>
      </div>
    </div>
  );
};

export default Cards;
