import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

function UserDetail({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>fallback Page</h2>;
  }
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
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();
  const usersData = data.slice(0, 4);
  const paths = usersData.map((user) => ({
    params: { userId: user.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/users/${params.userId}`);
  const data = await res.json();
  if (!data.name) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
