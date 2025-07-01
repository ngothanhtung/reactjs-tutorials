function App() {
  const [data, setData] = useState(() => expensiveComputation());
  return <div>{data}</div>;
}

function expensiveComputation() {
  return Array(1000).fill('data');
}

function Form() {
  const [form, setForm] = useState({ name: '', age: 0 });
  const updateName = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  return <input value={form.name} onChange={updateName} />;
}
