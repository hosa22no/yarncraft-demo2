import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./Theme/ThemeSwitcher";
import LoginBtn from "./LoginBtn";

export default function Footer() {
  return (
    <div className="bg-custom-blue text-white shadow-md fixed bottom-0 left-0 w-full z-50">
      <footer className="p-4 text-center">
        &copy; {new Date().getFullYear()} YarnCraft. All rights reserved.
        <div className="flex justify-center items-center space-x-4 mt-4">
        <p> <Link href="https://github.com/hosa22no" target="_blank" rel="noopener noreferrer">
        <img src="/github-mark-white.png" alt="GitHub account" className="w-10 h-10" />
      </Link>
      </p>
          <ThemeSwitcher />
          <LoginBtn />
        </div>
      </footer>
    </div>
  );
}
