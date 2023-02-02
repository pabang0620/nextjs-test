import Link from "next/link";
import { useState } from "react";
// import Todoboard from "./components/TodoItem";
import TodoItem from "./components/TodoItem";
export default function About() {
  const [todolist, setTodolist] = useState([]);
  const addItem = () => {
    setTodolist([...todolist, todolistInput]);
  };
  const [todolistInput, setTodolistInput] = useState("");
  const OnChange = (e) => {
    setTodolistInput(e.target.value);
  };

  console.log(todolist);
  return (
    <>
      <Link href="/">Home</Link>
      <input value={todolistInput} onChange={OnChange} type="text" />
      <button onClick={addItem}>추가</button>
      {/* <Todoboard todolist={todolist} /> */}
      {/* 컴포넌트를 사용해서 가져와도 되고 
그냥 가져와도 된다 두가지 방법 다 사용했음 */}
      {todolist.map((todolist) => (
        <TodoItem todolist={todolist} />
      ))}
    </>
  );
}
