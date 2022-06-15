export default function InputTodo({
  inputTodo,
  setInputTodo,
  todos,
  setTodos,
  setStatus,
}) {
  const inputHandler = (e) => {
    setInputTodo(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (inputTodo === "") return;
    setTodos([
      ...todos,
      {
        title: inputTodo,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputTodo("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="inputContainer">
      <input
        onChange={inputHandler}
        className="inputTodo"
        type="text"
        placeholder="Add a new task"
        value={inputTodo}
      />
      <button onClick={addTodoHandler} className="inputBtn" type="submit">
        +
      </button>

      <select onChange={statusHandler} name="todo-type" id="">
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
