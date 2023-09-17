import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-3 ">
      <div>
        <h1 className="font-semibold text-2xl">Note App</h1>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
