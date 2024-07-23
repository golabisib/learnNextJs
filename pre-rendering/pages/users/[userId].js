import React from "react";

function UserDetail({ data }) {
  return (
    <div>
      <h1>UserDetail</h1> <h3>{data.name}</h3>
      <h3>{data.email}</h3>
      <h3>{data.address.city}</h3>
    </div>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/posts");
  const data = await res.json();
  const paths = data.map((user) => ({ params: { userId: user.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/users/${params.userId}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
