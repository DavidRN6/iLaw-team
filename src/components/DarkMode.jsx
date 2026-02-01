import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../assets/assets";
import { IoMdMoon } from "react-icons/io";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement; // html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={assets.sun}
        alt="Light mode icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-7 cursor-pointer
        transition-all
        duration-300 absolute right-0 z-10
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />

      <IoMdMoon
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-7 text-2xl text-background cursor-pointer
        transition-all duration-300
        ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export default DarkMode;
