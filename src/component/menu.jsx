import { useEffect } from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { useContext } from "react";
import { Context } from "../contextApi/Context";
const Menu = () => {
  let navigate = useNavigate();
  const [apiData, setApiData] = useState({});
  const array = new Array(50).fill("");
  let { setData } = useContext(Context);
  const Api = async () => {
    let api = await fetch(`https://dummyjson.com/recipes?limit=50`);
    let response = await api.json();
    setApiData(response);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <div>
      <div className="bgImg blur-[10px] flex items-center justify-center z-0"></div>

      <div
        id="Menu"
        className="h-[90vh] absolute w-[30vw] top-1/2 p-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-2xl  overflow-auto  "
      >
        <div className="flex justify-end">
          <button
            className=" bg-red-800 text-white font-bold text-2xl w-[30px] rounded-[50px] flex items-center justify-center  h-[30px] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <GiCancel />
          </button>
        </div>
        <h1 className="text-center text-2xl font-semibold mb-5 Menu scroll-smooth">
          Menu
        </h1>
        {apiData.recipes ? (
          apiData.recipes.map((val) => {
            return (
              <div
                onClick={() => {
                  navigate("/AboutFood");
                  setData((prev) => ({ ...prev, foodItem: val }));
                }}
                key={val.id}
                className="flex transition-all items-center duration-500 justify-between h-10 border-b-2 cursor-pointer mb-2"
              >
                <div>{val.name}</div>
                <img src={val.image} className="w-8 "></img>
                <h3>₹{val.caloriesPerServing}</h3>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col gap-2">
            {array.map((val) => {
              return (
                <div className="h-7 rounded-2xl flex justify-between py-1 animate-pulse px-4 bg-gray-100">
                  <div className="h-full rounded-2xl animate-bounce w-40 bg-gray-200"></div>
                  <FiLoader className="text-gray-500 animate-ping" />
                  <div className="h-full rounded-2xl animate-bounce w-20 bg-gray-200"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
