import TodoItem from "./TodoItem";

export default function TodoItem(props) {
  return (
    <>
      {props.todolist.map((Item) => (
        <TodoItem Item={Item} />
      ))}
    </>
  );
}
