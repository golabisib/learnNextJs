import React from 'react'

function UserDetail() {
  return (
    <div>
        UserDetail
    </div>
  )
}

export default UserDetail

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
