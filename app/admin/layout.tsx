import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminPage = ({ children }: Props) => {
  return (
    <div className="flex space-x-5 p-5">
      <aside className="p-5 bg-slate-200">admin page </aside>
      {children}
    </div>
  );
};

export default AdminPage;
