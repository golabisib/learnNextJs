import Link from "next/link";
import React from "react";

const users = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
];

function UsersList() {
  return (
    <>
    <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>user {user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
