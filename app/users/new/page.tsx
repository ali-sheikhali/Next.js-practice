"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
 
  
  return (
    <div className="p-5">
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Back
      </button>
    </div>
  );
};

export default NewUser;
