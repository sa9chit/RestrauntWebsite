import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { MdWeb, MdContactPhone } from "react-icons/md";
import { Link } from "react-router-dom";

import Account from "./account";
function NavBar() {
  let getItem = JSON.parse(localStorage.getItem("loginTrue"));
  let data = getItem ? getItem[0].loginTrue : "";

  return (
    <div>
      <nav className="h-[9vh] w-[100vw] shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.75)] justify-around flex items-center px-5">
        <div className="flex items-center gap-2">
          <GiKnifeFork className="text-2xl " />{" "}
          <h1 className="text-2xl font-semibold text-green-600 tracking-tighter">
            Resto<span className="text-orange-500">Indiano</span>
          </h1>{" "}
          <GiKnifeFork className="text-2xl " />
        </div>
        <div>
          <ul className="flex text-xl font-semibold items-center gap-10">
            <div className="flex items-center gap-2 text-xl">
              <Link to="/">Home</Link>
              <MdWeb className="mt-1 text-red-500" />
            </div>
            <div className="flex items-center gap-2 text-xl">
              <li>Contact</li>
              <MdContactPhone className="mt-1 text-green-500" />
            </div>
            <div className="flex items-center gap-2 text-xl">
              <li>About</li>
              <FcAbout className="mt-1" />
            </div>
          </ul>
        </div>

        {!data && (
          <div>
            <Link
              to="Login"
              className="font-bold tracking-tighter text-xl rounded-4xl py-1 px-8  "
              style={{ boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.75)" }}
            >
              Login
            </Link>
          </div>
        )}

        {data && <div></div>}

        {data ? <Account /> : ""}
      </nav>
    </div>
  );
}

export default NavBar;
