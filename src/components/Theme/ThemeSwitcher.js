'use client';

//Dark mode toggle component

import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill, BsPcDisplayHorizontal } from "react-icons/bs";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  }, []);

  function toggleDarkMode() {
    if (theme === "system") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "light") {
      setTheme("system");
      localStorage.removeItem("theme");
      applySystemTheme();
    }
  }

  function applySystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div>
      <button className="m-5" onClick={toggleDarkMode}>
        {theme === "system"? <BsPcDisplayHorizontal /> : null}
        {theme === "dark"? <BsMoonFill/> : null}
        {theme === "light"? <BsSunFill/> : null}
      </button>
    </div>
  );
}
