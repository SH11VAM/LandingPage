import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data= useLoaderData()
  return <div className="p-4 bg-zinc-400 text-center font-bold text-2xl ">Github : {data.followers}</div>;
}

export default Github;

export const gitInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();

}
