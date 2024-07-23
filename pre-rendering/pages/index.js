import Post from "@/components/Post";
import Link from "next/link";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <h3>golabi</h3>
      <Link href="/users/">Users</Link>
      <Post posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  //fetch data from api
  const res = await fetch("http://localhost:4000/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
