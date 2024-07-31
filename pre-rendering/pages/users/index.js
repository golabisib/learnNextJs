import Link from "next/link";
import React from "react";

function Users({ users }) {
  return <div>
    <ul>
        {
            users.map(user => <li key={user.id}><Link href={`/users/${user.id}`}>name: {user.name} ... username: {user.username} <hr/></Link></li>)
        }
    </ul>
  </div>;
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();

  return {
    props: { users: data },
    revalidate: 10 //seconds
  };
}
