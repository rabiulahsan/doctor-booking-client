/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./ActiveLink.css"; // Custom CSS for animation

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "active-link text-green-500 font-bold"
          : "inactive-link text-gray-500"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
