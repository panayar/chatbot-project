import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Home />
        <About/>
        <Members/>
      </div>
    </>
  );
}

export default App;
