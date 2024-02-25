import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="flex bg-slate-200 space-x-5 p-5">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">admin</Link>
      <Link href="/api/auth/login">login</Link>
    </div>
  );
};

export default NavBar;
