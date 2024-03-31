import { Route, Router, useRoute } from "wouter";

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
import { useEffect } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.user);

  const userTokenLocalStorage = localStorage.getItem("userToken");

  useEffect(() => {
    if (userTokenLocalStorage !== null && userTokenLocalStorage !== "") {
      dispatch(login({ isLoggedIn: true, token: userTokenLocalStorage }));
    } 
    // eslint-disable-next-line
  }, [userTokenLocalStorage]);

  const [matched] = useRoute();

  return (
    <div className="container-fluid">
      <Router>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpass" component={ForgotPass} />
        <Route path="/newpass" component={NewPass} />
        {userLog.isLoggedIn && <Route path="/chat" component={Chat} />}
        <Route path="/chat" component={Chat} />
        <Route path="/verifyOTP" component={VerifyOTPCode} />
        {!matched && <NotFound />}
      </Router>
    </div>
  );
}

export default App;
