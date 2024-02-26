import { Route, Router } from "wouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import "./normal.css";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import ForgotPass from "./components/forms/ForgotPass";
import NewPass from "./components/forms/NewPass";
import VerifyOTPCode from "./components/forms/VerifyOTPCode";
import Chat from "./chat/Chat";
import Main from "./pages/Main";

import { login } from "./redux/userSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const localToken = localStorage.getItem("userToken");
  const userLog = useSelector((state) => state.user);

  if (localToken !== "") {
    dispatch(login({ isLoggedIn: true, token: localToken }));
  }

  return (
    <div className="container-fluid">
      <Router>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpass" component={ForgotPass} />
        <Route path="/newpass" component={NewPass} />
        {userLog.isLoggedIn && <Route path="/chat" component={Chat} />}
        <Route path="/verifyOTP" component={VerifyOTPCode} />
      </Router>
    </div>
  );
}

export default App;
