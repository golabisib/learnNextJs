export default function Home(props) {
    console.log(props)
  return (
    <>
      <h3>{props.data}</h3>
    </>
  );
}

export async function getStaticProps() {
  //fetch data from api
  const data = "roozbeh";

  return {
    props: {
        data,
    },
  };
}
