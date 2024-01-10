"use client";

import Image from "next/image";
import Card from "./ui/dashboard/Card";
import Search from "./ui/dashboard/Search";
import Table from "./ui/dashboard/Table";
import Dashboard from "./ui/dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Dashboard title="Home" />
    </div>
  );
}
