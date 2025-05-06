import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../contextApi/Context";
import { UseLocalStorage } from "../cstmHook/forLocalStorage";
const Login = () => {
  let [value, setValue] = UseLocalStorage("loginTrue", [
    {
      loginTrue: false,
    },
  ]);

  console.log(value);

  const navigate = useNavigate();
  let inpRef = useRef({});

  let inpData = [
    {
      type: "text",
      placeholder: "Enter Your Password",
      name: "Password",
      id: 1.2,
      required: true,
    },
    {
      type: "gmail",
      placeholder: "Enter Your Gmail",
      id: 1.3,
      required: true,

      name: "gmail",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let getItem = JSON.parse(localStorage.getItem("storeInpValue")) ?? [];
    let obj = {};
    Object.keys(inpRef.current).map((value) => {
      obj[value] = inpRef.current[value].value;
    });
    let condition = getItem.some((val) => {
      return val.gmail === obj.gmail && val.Password === obj.Password;
    });

    if (condition) {
      setValue((prev) => prev.map((val) => ({ ...val, loginTrue: true })));

      setTimeout(() => {
        alert("login successfully Completed");
        Object.keys(inpRef.current).map((value) => {
          inpRef.current[value].value = "";
        });
        navigate("/");
      }, 400);
    } else {
      alert("no data found");
    }
  };

  return (
    <div className="h-[calc(100vh-9vh)] w-full bg-gray-300 flex items-center justify-center">
      <div className="h-[50vh] w-[30vw] flex flex-col items-center  rounded-2xl bg-white">
        <form
          onSubmit={handleSubmit}
          className="h-[40vh] w-[30vw] flex flex-col items-center gap-3 rounded-2xl bg-white"
        >
          <h1 className="text-center mt-4 text-2xl font-bold tracking-tighter">
            Login
          </h1>

          {inpData.map((val) => {
            return (
              <div key={val.id}>
                {val.name === "Password" ? (
                  <input
                    type={val.type}
                    className="border-2 px-3 py-1 w-70 rounded-2xl  outline-none"
                    placeholder={val.placeholder}
                    ref={(e) => (inpRef.current[val.name] = e)}
                  ></input>
                ) : val.name === "gmail" ? (
                  <input
                    type={val.name}
                    className="border-2 rounded-2xl py-1 w-70  px-3 outline-none"
                    placeholder={val.placeholder}
                    ref={(e) => (inpRef.current[val.name] = e)}
                  ></input>
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <button
            className="bg-green-500 px-5 text-white rounded-2xl font-semibold cursor-pointer "
            type="submit"
          >
            Submit
          </button>
        </form>
        <Link to="/register" className="text-gray-400">
          Register?
        </Link>
      </div>
    </div>
  );
};

export default Login;
