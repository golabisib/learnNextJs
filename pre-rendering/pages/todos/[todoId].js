import React, { useState } from "react";

function TodoDetails({ todo }) {
  const [data, setData] = useState(todo);

  const updateHandler = async (id) => {
    const response = await fetch(`http://localhost:4000/albums/${id}`);
    const data = await response.json();
    setData(data);
  };
  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.completed}</h3>
      <button onClick={() => updateHandler(todo.id)}>update</button>
    </div>
  );
}

export default TodoDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/albums/${params.todoId}`);
  const data = await response.json();

  if (!data.title) {
    return {
      notFound: true,
    };
  }
  return {
    props: { todo: data },
  };
}
