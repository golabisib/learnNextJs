import React from 'react'

function UserDetail({ data }) {
  return (
    <div>
        <h1>UserDetail</h1>{" "}
        <h3>{data.name}</h3>
        <h3>{data.email}</h3>
        <h3>{data.address.city}</h3>
    </div>
  )
}

export default UserDetail

export async function getStaticPaths(){
    return {
        paths : [
            {params: {userId: "1"}},
            {params: {userId: "2"}},
            {params: {userId: "3"}},
            {params: {userId: "4"}},
            {params: {userId: "5"}},
            {params: {userId: "6"}},
            {params: {userId: "7"}},
            {params: {userId: "8"}},
            {params: {userId: "9"}},
            {params: {userId: "10"}},
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(
        `http://localhost:4000/users/${params.userId}`
    );
    const data = await res.json()
    return {
        props: {data},
    }
}
