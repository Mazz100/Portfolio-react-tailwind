import React from "react";
import * as Seperator from "@radix-ui/react-separator";

const Home = () => {
  return (
    <div className="flex flex-col p-12" id="Home">
      <h1 className="my-1 text-4xl">Hello, I'm</h1>

      <span className="text-7xl font-bold text-states-color">Mazen</span>

      <p className="my-1 text-xl opacity-70"> a frontend web developer</p>

      <Seperator.Root
        className="my-4 bg-secondary-color data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
        orientation="horizontal"
      />

      <ul className="flex items-center gap-4 p-2">
        <li>
          <a href="https://github.com/Mazz100" aria-label="GitHub icon">
            <svg
              className="h-6 w-6 rounded-full transition-colors hover:fill-states-color"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/mazen-hassan-3429a7225/"
            aria-label="Linkedin icon"
          >
            <svg
              className="h-6 w-6 rounded-full transition-colors hover:fill-states-color"
              ariahidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.frontendmentor.io/profile/Mazz100"
            aria-label="frontendmentor icon"
          >
            <svg
              className="h-6 w-6"
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="nonzero" fill="none"></g>
              <g fill="#1C2122">
                <path
                  d="M24.762 12.167a.756.756 0 0 1-.307-.065l-6.438-2.883a.751.751 0 0 1 0-1.37l6.438-2.873a.752.752 0 0 1 .991.379.752.752 0 0 1-.38.991l-4.905 2.189 4.906 2.197a.75.75 0 0 1-.305 1.435z"
                  fill="#67BECE"
                />
                <path
                  d="M15.988 22.626c-7.078 0-13.266-4.778-15.045-11.62a.749.749 0 1 1 1.451-.378 14.044 14.044 0 0 0 13.594 10.498.75.75 0 0 1 0 1.5z"
                  fill="#3F54A3"
                />
                <path
                  d="M13.404 16.398a.75.75 0 0 1-.75-.75V1.391a.75.75 0 0 1 1.5 0v14.257a.75.75 0 0 1-.75.75z"
                  fill="#67BECE"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>

      <div className="inline-flex items-center gap-4">
        <a
          href="https://www.dropbox.com/scl/fi/8kcv7xd71i2uoreab9owc/Mazen-Hassan-Resume.pdf?rlkey=u6zl9nb1py74r9yt6uwbcjuwq&st=upa1cm2e&dl=0"
          className="my-6 self-start rounded-md bg-interactive-states-bg p-2 px-4 text-[#000] transition-colors hover:bg-interactive-hover hover:text-text-color"
        >
          Get Resume
        </a>
        <a
          href="#Projects"
          className="my-6 self-start rounded-md border-[1px] border-states-color p-2 px-4 transition-colors hover:border-interactive-hover"
        >
          See Projects
        </a>
      </div>
    </div>
  );
};

export default Home;
