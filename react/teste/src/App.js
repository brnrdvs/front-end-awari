import './App.css';
import List from "./components/list";

function App() {
  const pessoas = [
    {
      name: "PESSOA 1",
      id: 1
    },
    {
      name: "PESSOA 2",
      id: 2
    },
    {
      name: "PESSOA 3",
      id: 3
    }
  ]

  return (
    <div>
      <List items={pessoas} />
    </div>
  );
}

export default App;