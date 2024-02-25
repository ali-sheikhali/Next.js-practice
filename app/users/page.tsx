import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="p-5">
      <h1>users</h1>
      <Link href="/users/new" className="btn">
        new user
      </Link>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UserPage;
