import { Route, Router } from "wouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import "./normal.css";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import ForgotPass from "./components/Forms/ForgotPass";
import NewPass from "./components/Forms/NewPass";
import VerifyOTPCode from "./components/Forms/VerifyOTPCode";
import Chat from "./chat/Chat";
import Main from "./pages/Main";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpass" component={ForgotPass} />
        <Route path="/newpass" component={NewPass} />
        <Route path="/chat" component={Chat} />
        <Route path="/verifyOTP" component={VerifyOTPCode} />
      </Router>
    </div>
  );
}

export default App;
