import TodoItem from "./TodoItem";

export default function Todos({ todos, setTodos, filteredTodos }) {
  if (filteredTodos.length !== 0) {
    return (
      <div className="todoContainer">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              title={todo.title}
              key={todo.id}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="emptyTask">
        <p>No Task</p>
        <img src={`${process.env.PUBLIC_URL}sleep.png`} alt="" />
      </div>
    );
  }
}
