import { useContext, useState } from "react";
import { Context } from "../contextApi/Context";
const AboutFood = () => {
  let { data } = useContext(Context);
  let [data2, _] = useState(JSON.parse(localStorage.getItem(data)));

  return <div>{data2.foodItem?.name}</div>;
};
export default AboutFood;
