import { Link } from "react-router-dom";
import chef from "../img/chef.png";
import thought from "../img/thought.png";
import { Slot } from "./SlotAvialable";
import { useState } from "react";

export const Home = () => {
  let [condition, setCondition] = useState(false); //later will false only for work time
  return (
    <div className={`px-10`}>
      <div className="rounded-2xl text-white justify-around bg-black h-70 mt-10 flex items-center">
        <img src={thought} className="w-46 "></img>
        <h1 className="text-6xl tracking-tighter text-white font-semibold ">
          <span className="text-8xl text-orange-500 font-bold">Book</span>{" "}
          <br></br> Your Table{" "}
          <span className="text-8xl font-bold leading-0 text-green-500">
            Now
          </span>
          ...
        </h1>

        <div className="h-full flex flex-col  gap-2 items-end justify-end w-120">
          <div className="flex justify-center gap-3">
            <Link
              to="menu"
              className="bg-white h-8 text-black font-semibold px-4 py-1 mt-10 rounded-2xl cursor-pointer"
            >
              Explore Menu
            </Link>
            <button
              onClick={() => {
                setCondition(!condition);
              }}
              className="bg-white h-8 text-black font-semibold px-4 py-1 mt-10 rounded-2xl cursor-pointer"
            >
              Available Table
            </button>
          </div>
          <img className="w-76" src={chef}></img>
        </div>
      </div>
      {condition && <Slot />}
    </div>
  );
};
export default Home;
