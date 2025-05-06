import { useEffect, useReducer, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const Account = () => {
  let inpRef = useRef();
  let [condition, setCondition] = useState(false);
  let getItem = JSON.parse(localStorage.getItem("storeInpValue"));
  let firstLetter = getItem
    ? getItem.map((val) => val.first.slice(0, 1)).join()
    : [];

  useEffect(() => {
    const handleCLick = (event) => {
      if (!inpRef.current.contains(event.target)) {
        inpRef.current.style.height = "6vh";
      }
    };
    document.addEventListener("mousedown", handleCLick);

    return () => {
      document.removeEventListener("mousedown", handleCLick);
    };
  }, [condition]);

  return (
    <div
      ref={inpRef}
      style={{
        height: condition ? "26vh" : "6vh",
      }}
      className="h-[6vh]  rounded-[5px] w-[15vw] absolute right-3 text-white top-2 bg-[#000000]    flex flex-col overflow-hidden  "
    >
      <div className={`flex items-center justify-between w-full  `}>
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${firstLetter}`}
          className="h-11"
        ></img>
        <h3 className="tracking-tighter font-semibold select-none ">Account</h3>

        <div
          className="px-2 flex items-center"
          onClick={() => {
            setCondition(!condition);
          }}
        >
          <FaAngleDown />
        </div>
      </div>
      {condition && (
        <div className={` h-full flex flex-col justify-evenly`}>
          <h1 className="text-[10px] text-center mt-2 font-semibold text-green-600 tracking-tighter">
            Resto<span className="text-orange-500">Indiano</span>
          </h1>
          <h1 className="font-semibold text-[13px] text-center  tracking-tight">
            Hii 👋 {getItem ? getItem[0].first + " " : []}
            {getItem ? getItem[0].last : []}
          </h1>

          <div className="flex items-center font-semibold gap-3 text-[13px] justify-center  h-[2vh]">
            <span>gmail :</span>
            <h1 className="font-semibold text-[13px] text-center   tracking-tight">
              {getItem ? getItem[0].gmail : []}
            </h1>
          </div>
          <div className="flex justify-center">
            <button
              className="text-gray-200 font-semibold  text-[10px]"
              onClick={() => {
                localStorage.removeItem("storeInpValue");
                localStorage.removeItem("loginTrue");
                location.reload();
              }}
            >
              Logout ?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
