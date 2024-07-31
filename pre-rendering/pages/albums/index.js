import React from "react";

function Albums({ albums }) {
  return (
    <div>
      <h1>Albums</h1>
      <hr />
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h3>{album.title}</h3>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  const response = await fetch("http://localhost:4000/albums");
  const data = await response.json();
  return {
    props: { albums: data },
  };
}
