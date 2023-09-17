import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {
  return (
    <header className="flex justify-between py-3 container mx-auto ">
      <div className="flex items-center ">
        <h1 className="font-semibold text-2xl">Note App</h1>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
