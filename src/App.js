import logo from "./logo.svg";
import "./App.css";

const arr = [{ name: "leonardo" }, { name: "anita" }];
const name = "react";
function App() {
  return (
    <div className="App">
      <ul>
        {arr.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
