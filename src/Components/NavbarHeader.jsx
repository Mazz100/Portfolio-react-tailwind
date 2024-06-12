import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const NavbarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between bg-secondary-color p-2">
      <p className="mx-4 text-2xl text-states-color">Mazen Hassan</p>

      <nav className="mx-4 hidden p-2 desktop:flex desktop:items-center desktop:gap-10">
        <a
          href="#Home"
          className="rounded-md transition-colors hover:text-states-color"
        >
          Home
        </a>
        <a
          href="#About"
          className="rounded-md transition-colors hover:text-states-color"
        >
          About
        </a>
        <a
          href="#Skills"
          className="rounded-md transition-colors hover:text-states-color"
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="rounded-md transition-colors hover:text-states-color"
        >
          Projects
        </a>
      </nav>

      <DropdownMenu.Root
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(!isOpen ? true : false);
        }}
      >
        <DropdownMenu.Trigger className="desktop:hidden">
          <svg
            className="relative h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#14213D"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              className="duration-250 origin-center transform opacity-70 transition-[opacity,transform] ease-in will-change-transform"
              style={
                isOpen
                  ? { translate: "300px", opacity: "0" }
                  : { translate: "0", opacity: "0.7" }
              }
              x1="3"
              y1="12"
              x2="21"
              y2="12"
            />
            <line
              className="origin-left transform transition-[opacity,transform] duration-150 ease-out will-change-transform"
              style={
                isOpen
                  ? { transform: "translate(50%, 50%) rotate(-45deg)" }
                  : { transform: "rotate(0)" }
              }
              x1="3"
              y1="6"
              x2="21"
              y2="6"
            />
            <line
              className="origin-left transform transition-[opacity,transform] duration-200 ease-in will-change-transform"
              style={
                isOpen
                  ? { transform: "translate(50%, -55%) rotate(45deg)" }
                  : { transform: "rotate(0)" }
              }
              x1="3"
              y1="18"
              x2="21"
              y2="18"
            />
          </svg>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={5}
            sticky="always"
            loop={true}
            className="flex w-[--radix-dropdown-menu-content-available-width] origin-[--radix-dropdown-menu-content-transform-origin] flex-col items-center bg-secondary-color p-2 text-4xl text-text-color transition-opacity data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn landscape:flex-row landscape:justify-between landscape:text-lg"
          >
            <DropdownMenu.Item
              className="mb-4 rounded-md p-4 transition-colors hover:bg-body-bg-color focus-visible:bg-body-bg-color"
              onSelect={(e) => e.preventDefault()}
            >
              <a href="#Home">Home</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="mb-4 rounded-md p-4 transition-colors hover:bg-body-bg-color focus-visible:bg-body-bg-color"
              onSelect={(e) => e.preventDefault()}
            >
              <a href="#About">About</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="mb-4 rounded-md p-4 transition-colors hover:bg-body-bg-color focus-visible:bg-body-bg-color"
              onSelect={(e) => e.preventDefault()}
            >
              <a href="#Skills">Skills</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="mb-4 rounded-md p-4 transition-colors hover:bg-body-bg-color focus-visible:bg-body-bg-color"
              onSelect={(e) => e.preventDefault()}
            >
              <a href="#Projects">Projects</a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default NavbarHeader;
