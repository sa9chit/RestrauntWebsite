import { useState } from "react";
import { data } from "react-router-dom";
export const Timee = ({ dataForSlot }) => {
  let timeData = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  return (
    <div className="h-[50vh] overflow-auto absolute top-10" id="scroll">
      {timeData.map((val) => {
        return (
          <button
            onClick={() => {
              dataForSlot((prev) => ({ ...prev, time: val }));
            }}
            className="bg-gray-300 rounded-2xl cursor-pointer  mb-1 text-[15px] font-semibold tracking-tighter px-5 py-1 "
            key={val * 2}
          >
            {val}:00{val >= 12 ? "pm" : "am"}
          </button>
        );
      })}
    </div>
  );
};
