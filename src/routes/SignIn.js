import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { postSignIn } from "../services/AuthService";

export default function SignIn({ statusError }) {
  const [emailInvalid, setEmailInvalid] = useState("");
  const [email, setEmail] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [signinError, setSigninError] = useState("");

  const emailFocus = useRef(null);
  useEffect(() => {
    emailFocus.current.focus();
  }, []);

  const onChangeEmail = (event) => {
    setEmailInvalid("");
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPasswordInvalid("");
    setPassword(event.target.value);
  };

  const toSignIn = () => {
    if (!email.match(/\S+@\S+/)) {
      setEmailInvalid("Insert a valid email!");
    } else if (!password) {
      setPasswordInvalid("Insert a password!");
    } else {
      setEmailInvalid("");
      setPasswordInvalid("");

      postSignIn({ email, password })
        .then((res_1) => {
          if (res_1.token) {
            localStorage.setItem("task-token", res_1.token);
            window.location.reload(false);
          } else {
            setSigninError(res_1.signinError);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toSignIn();
    }
  };

  const onEye = () => {
    setEye(!eye);
  };

  return (
    <>
      {statusError ? (
        <div className="row p-2 border border-danger d-flex justify-content-center">
          <h4 className="text-danger">
            {statusError ? statusError + "Try sign in agan" : ""}
          </h4>
        </div>
      ) : signinError ? (
        <div className="row p-2 border border-danger d-flex justify-content-center">
          <h4 className="text-danger">
            {signinError ? signinError + "Try sign in agan" : ""}
          </h4>
        </div>
      ) : (
        <></>
      )}

      <div className="row p-2">
        <div className="col-md-4 p-2"></div>
        <div className="col-md-4 p-2">
          <div className="card bg-info text-white">
            <div className="card-header text-center">
              <h4 className="card-text">Sign In</h4>
            </div>
          </div>
          <div className="card-body bg-info">
            <form>
              <div className="form-group">
                <label htmlFor="email" className="form-control-label">
                  {emailInvalid ? emailInvalid : "Email"}
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={onChangeEmail}
                  ref={emailFocus}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-control-label">
                  {passwordInvalid ? passwordInvalid : "Password"}
                </label>
                <div className="input-group mb-3">
                  <input
                    type={eye ? "text" : "password"}
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                    onKeyDown={handleKeyDown}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" onClick={onEye}>
                      {eye ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer bg-info">
            <button
              type="button"
              className="btn btn-outline-info bg-secondary btn-lg btn-block"
              onClick={toSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="col-md-4 p-2"></div>
      </div>
    </>
  );
}
