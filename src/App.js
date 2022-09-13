import "./App.css";
import Navabar from "./Component/Navabar";
import Shop from "./Component/Shop";

function App() {
  return (
    <>
      <Navabar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
