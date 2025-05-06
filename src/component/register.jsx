import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseLocalStorage } from "../cstmHook/forLocalStorage";
const Register = () => {
  let [data, setData] = UseLocalStorage("storeInpValue", []);
  let navigate = useNavigate();
  let inpRef = useRef({});
  let inpData = [
    {
      type: "text",
      required: true,
      name: "first",
      placeholder: "Enter Your First Name",
      id: 1.6,
    },
    {
      type: "text",
      required: true,
      name: "last",
      placeholder: "Enter Your Last Name",
      id: 1.7,
    },
    {
      type: "text",
      placeholder: "Enter Your Password",
      name: "Password",
      id: 1.2,
      required: true,
    },
    {
      type: "email",
      placeholder: "Enter Your Gmail",
      id: 1.3,
      required: true,

      name: "gmail",
    },
  ];

  let handleSubmit = (e) => {
    e.preventDefault();
    let getItem = JSON.parse(localStorage.getItem("storeInpValue")) ?? [];

    let obj = {};
    Object.keys(inpRef.current).map((val) => {
      obj[val] = inpRef.current[val].value;
    });

    let isAvailable = getItem.some((val) => val.gmail === obj.gmail);

    if (!isAvailable) {
      setData((val) => [...val, obj]);

      setTimeout(() => {
        alert("registration successfully completed");
        Object.keys(inpRef.current).map((val) => {
          inpRef.current[val].value = "";
        });
        navigate("/login");
      }, 1000);
    } else {
      alert("gmail already exist");
    }
  };

  return (
    <div className="h-[calc(100vh-9vh)] w-full bg-gray-300 flex items-center justify-center">
      <div className="h-[50vh] w-[30vw] flex flex-col items-center  rounded-2xl bg-white">
        <form
          className="h-[40vh] w-[30vw] flex flex-col items-center gap-3 rounded-2xl bg-white"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center mt-4 text-2xl font-bold tracking-tighter">
            Register
          </h1>

          {inpData.map((val) => {
            return (
              <div key={val.id}>
                {val.name === "first" ? (
                  <input
                    required={val.required}
                    ref={(e) => {
                      inpRef.current[val.name] = e;
                    }}
                    type={val.type}
                    placeholder={val.placeholder}
                    className="border-2 px-3 py-1 w-70 rounded-2xl  outline-none"
                  ></input>
                ) : val.name === "last" ? (
                  <input
                    required={val.required}
                    ref={(e) => {
                      inpRef.current[val.name] = e;
                    }}
                    type={val.type}
                    placeholder={val.placeholder}
                    className="border-2 px-3 py-1 w-70 rounded-2xl  outline-none"
                  ></input>
                ) : val.name === "Password" ? (
                  <input
                    required={val.required}
                    ref={(e) => {
                      inpRef.current[val.name] = e;
                    }}
                    type={val.type}
                    className="border-2 px-3 py-1 w-70 rounded-2xl  outline-none"
                    placeholder={val.placeholder}
                  ></input>
                ) : val.name === "gmail" ? (
                  <input
                    required={val.required}
                    ref={(e) => {
                      inpRef.current[val.name] = e;
                    }}
                    type={val.type}
                    className="border-2 rounded-2xl py-1 w-70  px-3 outline-none"
                    placeholder={val.placeholder}
                  ></input>
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <button
            className="bg-green-500 text-white tracking-tight px-5 rounded-2xl font-semibold cursor-pointer "
            type="submit "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
