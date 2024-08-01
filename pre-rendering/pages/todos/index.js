// import React, { useEffect, useState } from "react";

import Link from "next/link";
import useSWR from "swr";

function ToDos() {
  //   const [todos, setTodos] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:4000/todos")
  //       .then((res) => res.json())
  //       .then((data) => setTodos(data));
  //   }, []);

  const { data, error } = useSWR("http://localhost:4000/todos", (url) =>
    fetch(url).then((res) => res.json())
  );
  console.log({ data, error });

  return (
    <div>
      {data ? (
        data.map((todo) => (
          <Link href={`/todos/${todo.id}`} key={todo.id}>
            <h3>{todo.title}</h3>
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ToDos;
