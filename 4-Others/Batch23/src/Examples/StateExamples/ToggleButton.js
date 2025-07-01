function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={() => setIsOn((prev) => !prev)}>{isOn ? 'On' : 'Off'}</button>;
}
