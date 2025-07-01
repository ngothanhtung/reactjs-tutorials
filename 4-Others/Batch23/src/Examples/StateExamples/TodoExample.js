function Todos() {
  const [todos, setTodos] = useState(['Task 1']);
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return <button onClick={() => removeTodo(0)}>Remove</button>;
}
