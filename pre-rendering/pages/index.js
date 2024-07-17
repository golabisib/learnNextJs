import Post from "@/components/Post";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <h3>golabi</h3>
      <Post posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  //fetch data from api
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
