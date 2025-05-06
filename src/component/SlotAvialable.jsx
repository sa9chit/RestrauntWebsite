import { useEffect, useRef, useState } from "react";
import { Timee } from "./time";
import { Datee } from "./date";
import { FaAngleDown } from "react-icons/fa6";
import { UseLocalStorage } from "../cstmHook/forLocalStorage";
export const Slot = () => {
  const [updateConditon, setCondition] = useState({
    forDate: false,
    forTime: false,
  });
  let timeRef = useRef();
  useEffect(() => {
    const handleCLick = (event) => {
      if (!timeRef.current.contains(event.target)) {
        setCondition((prev) => ({ ...prev, forTime: false }));
      }
    };

    document.addEventListener("click", handleCLick);

    return () => {
      document.removeEventListener("click", handleCLick);
    };
  }, [updateConditon]);
  let [slotData, setSlotData] = useState({
    date: "",
    time: "",
    memberValue: "",
  });
  const [_, setValue] = UseLocalStorage("slot", []);
  const handleLocalStorage = () => {
    if (slotData.date && slotData.memberValue && slotData.time) {
      setValue((prev) => [...prev, slotData]);
    } else {
      alert("please fill all detail properly");
    }
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] z-10 h-[93vh] w-[43vw] bg-gray-800 flex justify-center rounded-2xl items-center translate-y-[-50%]">
      <div className="h-[90vh]  rounded-2xl w-[40vw] bgUrl"></div>
      <div className="absolute h-full w-full top-0">
        <div className="h-full w-full border-1 px-10  border-transparent items-center flex flex-col gap-10 ">
          <h1 className="text-center mt-10 font-bold text-3xl tracking-tighter text-orange-500">
            Reserve a Table at Your Preferred Time
          </h1>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setCondition((prev) => ({
                  ...prev,
                  forDate: !updateConditon.forDate,
                  forTime: false,
                }));
              }}
              className="flex items-center gap-2 bg-red-500 text-white font-semibold px-5 py-1 rounded-[2px] "
            >
              Date <FaAngleDown />{" "}
            </button>
            <div
              className="flex flex-col items-center relative  "
              ref={timeRef}
            >
              <button
                onClick={() => {
                  setCondition((prev) => ({
                    ...prev,
                    forTime: !updateConditon.forTime,
                    forDate: false,
                  }));
                }}
                className="flex items-center gap-2 bg-red-500 text-white font-semibold px-5 py-1 rounded-[2px] "
              >
                Time <FaAngleDown />{" "}
              </button>
              {updateConditon.forTime && <Timee dataForSlot={setSlotData} />}
            </div>
            <input
              type="number"
              id="placeholder"
              max={30}
              min={1}
              value={slotData.memberValue}
              onChange={(e) =>
                setSlotData((prev) => ({
                  ...prev,
                  memberValue: e.target.value,
                }))
              }
              className=" w-40 outline-none rounded-[5px] bg-green-500 px-5 py-1 text-white"
              placeholder="Enter Slot.."
            ></input>

            <button
              onClick={handleLocalStorage}
              className="flex items-center gap-2 bg-red-500 text-white font-semibold  cursor-pointer tracking-tighter px-5 py-1 rounded-e-xl "
            >
              Pick
            </button>
          </div>

          {updateConditon.forDate && <Datee slotData={setSlotData} />}
        </div>
      </div>
    </div>
  );
};
