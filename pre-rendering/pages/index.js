import Post from "@/components/Post";
import Link from "next/link";

export default function Home({ posts }) {

  return (
    <>
      <h3>golabi</h3>
      <hr/>
      <Link href="/users/">Users</Link>
      <hr/>
      <Link href="/albums/">Albums</Link>
      <hr/>
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
