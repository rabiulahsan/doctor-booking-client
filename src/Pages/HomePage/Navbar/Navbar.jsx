import "./navbar.css";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { LuUserPlus } from "react-icons/lu";

const Navbar = () => {
  const handleLogOut = () => {
    console.log("Clicked log out button");
  };

  const [theme, setTheme] = useState("system");

  // Initialize theme
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme") || "system";
    if (selectedTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    } else {
      setTheme(selectedTheme);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleLight = () => setTheme("light");
  const handleNight = () => setTheme("dark");

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".title", {
      y: -100,
      opacity: 0,
      delay: 0.4,
      duration: 0.6,
    });
    tl.from(".nav-options span, .nav-options button, .theme-btn", {
      y: -100,
      opacity: 0,
      stagger: 0.2,
    });

    tl.fromTo(
      ".theme-btn button",
      { y: -100, opacity: 0 }, // Initial state
      { y: 0, opacity: 1, duration: 0.6 }, // Target state
      "-=0.3" // Overlap with the previous animation
    );
  });

  return (
    <div>
      <div className="hidden md:flex justify-between items-center w-full py-5 px-[6%] relative bg-white bg-opacity-60 backdrop-blur-sm">
        <div className="title">
          <Link href="/">
            <p className="text-4xl font-bold font-playball text-slate-600">
              <span className="text-green-500">Easy</span>Care
            </p>
          </Link>
        </div>

        <div className="nav-options flex items-center gap-x-4">
          <div className="flex items-center gap-x-8 mr-10">
            <span className="text-slate-500 font-semibold">
              <ActiveLink to="/">Home</ActiveLink>
            </span>
            <span className="text-slate-500 font-semibold">
              <ActiveLink to="/doctors">Doctors</ActiveLink>
            </span>
          </div>

          <button
            onClick={handleLogOut}
            className="flex gap-x-2 items-center font-bold text-slate-100 bg-slate-700 px-7 py-[10px] rounded-sm hover:bg-slate-800"
          >
            Log out
            <MdOutlineLogout className="text-xl font-semibold" />
          </button>

          <Link to="/create-account">
            <button className="flex gap-x-2 items-center font-bold text-white bg-slate-700 px-7 py-[10px] rounded-sm hover:bg-slate-800">
              Create an Account
              <LuUserPlus className="text-xl font-semibold" />
            </button>
          </Link>

          <div className="theme-btn text-slate-600 flex items-center ml-2">
            {theme === "dark" && (
              <button
                title="Switch to Light Theme"
                onClick={handleLight}
                className="mr-5 text-2xl"
              >
                <BsFillSunFill />
              </button>
            )}
            {theme === "light" && (
              <button
                title="Switch to Dark Theme"
                onClick={handleNight}
                className="mr-5 text-2xl"
              >
                <BsFillMoonFill />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
