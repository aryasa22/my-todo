import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

export default function TodoItem({ todos, setTodos, todo }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <div className="todoText">
        <p>{todo.title}</p>
      </div>
      <div className="actions">
        <button onClick={completeHandler}>
          <FaCheck />
        </button>
        <button>
          <FaPen />
        </button>
        <button onClick={deleteHandler}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
