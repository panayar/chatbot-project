import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Home />
        <About/>
      </div>
    </>
  );
}

export default App;
