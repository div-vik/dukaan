import Image from "next/image";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-3 shadow-md">
      <div className="flex gap-5 items-center">
        <h1 className="text-xl font-[500] text-[#1A181E]">Payouts</h1>
        <div className="flex gap-2 text-[#4D4D4D] cursor-pointer">
          <Image
            className="object-contain"
            src="/help.png"
            alt="help"
            width={15}
            height={15}
          />
          <p className="text-sm font-[400]">How it works</p>
        </div>
      </div>

      <div className="bg-[#F2F2F2] rounded-[6px] w-[30%]">
        <Search placeholder="Search features, tutorials, etc." />
      </div>

      <div className="flex gap-5 items-center">
        <div className="bg-[#E6E6E6] object-contain rounded-full px-3 py-3 cursor-pointer">
          <Image src="/chat.png" alt="chat" width={20} height={20} />
        </div>
        <div className="bg-[#E6E6E6] object-contain rounded-full px-4 py-5 cursor-pointer">
          <Image src="/solidDown.png" alt="chat" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
