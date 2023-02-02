import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
// import Todoboard from "./components/TodoItem";
import TodoItem from "./components/TodoItem";

export default function About() {
  // const todolist: unknown[];
  const [todolist, setTodolist] = useState([]);
  const addItem = () => {
    setTodolist([...todolist, todolistInput]);
  };

  const [todolistInput, setTodolistInput] = useState("");
  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  // ID값 주는법??
  // const onRemove = useCallback(
  //   (id: number) => {
  //     setTodolist(todolist.filter((todo) => todo.id !== id));
  //   },
  //   [todolist]
  // );

  return (
    <>
      <nav className="flex sm:justify-center">
        <Link href="/">Home</Link>
      </nav>
      <input
        placeholder="입력"
        value={todolistInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodolistInput(e.target.value)
        }
        type="text"
        id="test"
      />
      <button
        onClick={() => {
          addItem(todolistInput);
          setTodolistInput("");
        }}
      >
        추가
      </button>
      {/* <Todoboard todolist={todolist} /> */}
      {/* 컴포넌트를 사용해서 가져와도 되고 
그냥 가져와도 된다 두가지 방법 다 사용했음 */}
      {todolist.map((todolist, id) => (
        <TodoItem todolist={todolist} setTodolist={setTodolist} key={id} />
      ))}
    </>
  );
}
