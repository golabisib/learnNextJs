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
          <hr/>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/albums");
  const data = await res.json();
  return {
    props: { albums: data },
  };
}
