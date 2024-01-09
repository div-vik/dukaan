"use client";

import Image from "next/image";
import React from "react";

const Search = ({ placeholder }) => {
  return (
    <div className="flex w-full bg-transparent items-center px-5 gap-2">
      <div>
        <Image
          className="object-contain py-2 bg-transparent"
          src="/search.png"
          alt="search"
          width={20}
          height={20}
        />
      </div>
      <div className="w-full">
        <input
          className="bg-transparent py-2 w-full focus:outline-none"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
