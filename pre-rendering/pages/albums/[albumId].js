import { notFound, redirect } from "next/navigation";
import React from "react";

function AlbumDetail({ album }) {
  return <div>
    <h2>AlbumDetails</h2>
    <h3>{album.id} - {album.title} | {album.userId}</h3>
  </div>;
}

export default AlbumDetail;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/albums/${params.albumId}`);
  const data = await response.json();
  console.log(data);

  if (!data.title){
    return {
        notFound: true,
    }
  };
  return {
    props: { album: data },
  };
}
