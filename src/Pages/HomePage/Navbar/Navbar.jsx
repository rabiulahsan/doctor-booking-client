import "./navbar.css";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";

const Navbar = () => {
  const handleLogOut = () => {
    console.log("clicked log out button");
  };

  const [theme, setTheme] = useState("system");

  // Handle theme based on local storage after the component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedTheme = localStorage.getItem("theme");
      setTheme(selectedTheme ? selectedTheme : "system");
    }
  }, []);

  // Getting system theme and applying dark class based on media query
  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.documentElement;
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const onSystemTheme = () => {
        if (theme === "dark" || (theme === "system" && darkQuery.matches)) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      };

      // Apply system or selected theme when component mounts or theme changes
      onSystemTheme();

      // Sync theme changes with localStorage and DOM
      if (theme === "dark") {
        element.classList.add("dark");
      } else if (theme === "light") {
        element.classList.remove("dark");
      }

      // Watch for system theme changes and apply them
      darkQuery.addEventListener("change", (e) => {
        if (theme === "system") {
          if (e.matches) {
            element.classList.add("dark");
          } else {
            element.classList.remove("dark");
          }
        }
      });
    }
  }, [theme]);

  // Theme switcher functions
  const handleLight = () => {
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const handleNight = () => {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  return (
    <div>
      <div className="hidden md:flex justify-between items-center w-full py-5 px-[6%] relative bg-white bg-opacity-60 backdrop-blur-sm">
        {/*  logo */}
        <div className="">
          <Link href="/">
            <p className="text-4xl font-bold font-playball text-slate-600">
              <span className="text-green-500">Easy</span>Care
            </p>
          </Link>
        </div>

        {/* Right side with search and buttons */}
        <div className="flex items-center gap-x-4">
          <div className=" flex items-center gap-x-8 mr-10">
            <span className="text-slate-500 font-semibold">
              <ActiveLink to="/">Home</ActiveLink>
            </span>
            <span className="text-slate-500 font-semibold">
              <ActiveLink to="/doctors">Doctors</ActiveLink>
            </span>
          </div>

          {/* login or logout button */}
          <button
            onClick={handleLogOut}
            className="flex gap-x-2 items-center font-bold text-slate-100 bg-slate-700 px-7 py-[10px] rounded-sm hover:bg-slate-800"
          >
            Log out
            <span className="text-xl font-semibold">
              <MdOutlineLogout></MdOutlineLogout>
            </span>
          </button>

          <button className="flex  items-center gap-x-2 font-bold text-white bg-slate-700 px-7 py-[10px] rounded-sm hover:bg-slate-800">
            Log in
            <span className="text-xl font-semibold">
              <MdOutlineLogin></MdOutlineLogin>
            </span>
          </button>

          {/* <div className=" text-slate-600   flex items-center ml-2">
            {theme == "dark" && (
              <button
                title="Light theme"
                onClick={handleLight}
                className="mr-5  text-2xl"
              >
                <BsFillSunFill></BsFillSunFill>
              </button>
            )}
            {theme == "light" && (
              <button
                title="Dark theme"
                onClick={handleNight}
                className="mr-5  text-2xl"
              >
                <BsFillMoonFill></BsFillMoonFill>
              </button>
            )}
          </div> */}
        </div>
      </div>

      {/* for responsive design  */}
      {/* <div className=" md:hidden">
        <ResponsiveNavbar
          handleLight={handleLight}
          handleNight={handleNight}
          theme={theme}
        ></ResponsiveNavbar>
      </div> */}
    </div>
  );
};

export default Navbar;
