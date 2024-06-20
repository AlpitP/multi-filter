import "./App.css";
import Filters from "./component/Filters";
import Table from "./component/Table";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Multi Filter Demo</h1>
      <Filters />
    </div>
  );
}

export default App;
