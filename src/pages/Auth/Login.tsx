import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaTags from "react-meta-tags";

import Loader from "../../components/Reusables/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/")
    }, 1500);
  };

  return (
    <div className="onboarding">
      <MetaTags>
        <title>Trybe - Login</title>
      </MetaTags>
      {/* <Navigation /> */}
      <div className="brand">
        <h5>
          <Link to="/">Trybe</Link>
        </h5>
      </div>
      <div className="login__form onboarding__components shadow p-3 mb-5 bg-body rounded">
        <p>Login to your trybe account</p>
        <form className="form__group" onSubmit={handleLogin}>
          <div className="form__area">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form__area">
            <label htmlFor="code">Enter code sent to your email</label>
            <input type="password" name="password" placeholder="******" />
          </div>
          <div className="form__area">
            <button className="flex__one">
              {loading ? (
                <Loader />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
