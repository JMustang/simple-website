import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import LoadError from "./routes/LoadError";
import Loading from "./routes/Loading";
import SignIn from "./routes/SignIn";
import { checkToken } from "./services/AuthService";

export default function Auth() {
  const [tokenStatus, setTokenStatus] = useState(1);
  const [token, setToken] = useState("");
  const [statusError, setStatusError] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("task-token"));
    checkToken(token)
      .then((res) => {
        if (res.status_token) {
          setTokenStatus(2);
        } else {
          setTokenStatus(3);
          setStatusError(res.status_error);
        }
      })
      .catch((err) => {
        console.log(err);
        setTokenStatus(4);
      });
  }, [token]);

  if (tokenStatus === 1) {
    return <Loading />;
  } else if (tokenStatus === 2) {
    return <Routes />;
  } else if (tokenStatus === 3) {
    return <SignIn statusError={statusError} />;
  } else if (tokenStatus === 4) {
    return <LoadError />;
  }
}
