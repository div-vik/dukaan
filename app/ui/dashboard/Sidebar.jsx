"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const menuItems = [
  { title: "Home", icon: "/home.png", url: "/" },
  { title: "Order", icon: "/order.png", url: "/order" },
  { title: "Products", icon: "/products.png", url: "/products" },
  { title: "Delivery", icon: "/delivery.png", url: "/delivery" },
  { title: "Marketing", icon: "/marketing.png", url: "/marketing" },
  { title: "Analytics", icon: "/analytics.png", url: "/analytics" },
  { title: "Payouts", icon: "/payouts.png", url: "/payouts" },
  { title: "Discounts", icon: "/discounts.png", url: "/discounts" },
  { title: "Audience", icon: "/audience.png", url: "/audience" },
  { title: "Appearance", icon: "/appearance.png", url: "/appearance" },
  { title: "Plugins", icon: "/plugins.png", url: "/plugins" },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="relative py-3 h-full">
      <div className="flex items-center gap-20 px-5">
        <div className="flex gap-3">
          <Image
            className="object-contain"
            src="/user.png"
            alt="user"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-2 text-white">
            <span className="font-[500]">Nishyan</span>
            <span className="font-[400] text-xs opacity-80 underline cursor-pointer">
              Visit store
            </span>
          </div>
        </div>
        <div>
          <span className="cursor-pointer text-white">
            <MdArrowForwardIos className="rotate-90" />
          </span>
        </div>
      </div>

      <ul className="mt-10 px-1">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className={
              pathname === item.url
                ? "flex items-center text-white my-2 pl-7 bg-[#353C53] rounded-[4px] py-2"
                : "flex items-center text-white my-2 pl-7 hover:bg-[#353C53] rounded-[4px] py-2"
            }
          >
            <li className="flex">
              <Image
                className="mr-3 object-contain"
                src={item.icon}
                alt="icon"
                width={25}
                height={25}
              />
              <p className="opacity-80">{item.title}</p>
            </li>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-5 px-5 w-full">
        <div className="rounded-[4px] bg-[#353C53] px-4 py-2 gap-3 flex items-center">
          <div className="rounded-[4px] bg-slate-600 px-2 py-2">
            <Image
              className="object-contain"
              src="/wallet.png"
              alt="wallet"
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col justify-center text-white">
            <span className="text-sm opacity-80">Available credits</span>
            <span className="text-lg">222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
