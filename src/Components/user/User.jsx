import React from "react";
import { useParams } from "react-router-dom";

// Dynamic Routing 
function User() {
    const {userId}=useParams();
  return <div className="p-5 bg-zinc-500 max-w-lg ml-[30%] text-center font-extrabold ">User:{userId}</div>;
}

export default User;
