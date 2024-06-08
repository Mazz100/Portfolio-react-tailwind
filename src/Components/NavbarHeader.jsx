import React from "react";

const NavbarHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-secondary-color">
      <p>
        <a href="#">M.H</a>
      </p>

      <nav className="flex items-center justify-end gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
      </nav>
    </div>
  );
};

export default NavbarHeader;
