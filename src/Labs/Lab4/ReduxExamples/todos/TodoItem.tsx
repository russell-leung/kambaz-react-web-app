import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex flex-row-reverse justify-content-end gap-3 align-items-center">
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="btn btn-danger"
      >
        Delete
      </button>
      <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click" className="btn btn-primary">
        Edit
      </button>
      {todo.title}
    </li>
  );
}
