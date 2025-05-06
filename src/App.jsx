import "./App.css";
import React, { lazy, Suspense } from "react";
import NavBar from "./component/navbar";
// import { Login } from "./component/loginPage";
// import { Register } from "./component/register";
// import { Home } from "./component/home";
// import { Menu } from "./component/menu";

const Login = lazy(() => import("./component/loginPage"));
const Register = lazy(() => import("./component/register"));
const Home = lazy(() => import("./component/home"));
const Menu = lazy(() => import("./component/menu"));
const AboutFood = lazy(() => import("./component/aboutFood"));
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const App = () => {
  const location = useLocation();
  const hideNavBarRoutes = ["/menu"]; // you can add more paths here
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {!shouldHideNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="AboutFood" element={<AboutFood></AboutFood>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
