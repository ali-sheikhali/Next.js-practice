import { table } from "console";
import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sortedUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div>
      <div>
        <table className="table table-bordered">
          <thead className="flex justify-between">
            <tr>
              <th>
                <Link href="/users?sortOrder=name">Name</Link>
              </th>
            </tr>
            <tr>
              <Link className="mr-5" href="/users?sortOrder=email">
                Email
              </Link>
            </tr>
          </thead>
          <tbody>
            {sortedUser.map((user) => (
              <tr key={user.id} className="flex justify-between">
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
