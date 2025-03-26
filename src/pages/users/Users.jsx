

// Users.jsx
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "img",
    headerName: "Avatar",
    flex: 0.7,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    flex: 1,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    flex: 1,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    flex: 1.5,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    flex: 0.7,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
