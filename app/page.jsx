"use client";

import Image from "next/image";
import Card from "./ui/dashboard/Card";
import Search from "./ui/dashboard/Search";
import Table from "./ui/dashboard/Table";

export default function Home() {
  return (
    <div className="flex flex-col px-10 py-7 gap-7 w-full bg-[#FAFAFA] h-[calc(100vh-0.75rem)]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-[500] text-[#1A181E]">Overview</h1>
        <div>
          <select className="px-2 py-1 bg-[#FFFFFF] border-[1px] cursor-pointer focus:outline-none">
            {/* <option>Select month</option> */}
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:h-[172.7px] justify-between gap-7">
        <Card title="Next Payout" amount="2,312.23" orders="23 orders" />
        <Card title="Amount Pending" amount="92,312.20" orders="13 orders" />
        <Card title="Amount Processed" amount="23,92,312.19" />
      </div>

      <div className="flex flex-col gap-7">
        <div className="font-[500] text-2xl">Transactions | This Month</div>
        <div className="flex gap-5">
          <span className="bg-[#E6E6E6] px-4 py-2 rounded-3xl">
            Payouts (22)
          </span>
          <span className="bg-[#146EB4] px-4 py-2 rounded-3xl text-white">
            Refunds (6)
          </span>
        </div>

        <div className="flex flex-col bg-white py-3 px-3 rounded-lg gap-6">
          <div className="flex justify-between items-center">
            <div className="w-fit border-[1px] rounded-[4px]">
              <Search placeholder="Order ID or transaction ID" />
            </div>

            <div className="flex items-center gap-5">
              <div className="flex gap-2 px-2 py-2 border-[1px] rounded-[4px]">
                <p>Sort</p>
                <Image
                  className="object-contain"
                  src="/sort.png"
                  alt="sort"
                  width={15}
                  height={15}
                />
              </div>

              <div className="border-[1px] px-2 py-3 h-full rounded-[4px]">
                <Image
                  className="object-contain"
                  src="/download.png"
                  alt="sort"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
