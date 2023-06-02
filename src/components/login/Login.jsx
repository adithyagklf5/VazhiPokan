import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, setAdminStatus, setUserName } = useContext(AuthContext); // Retrieve setUserName from AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userAuthentication = () => {
    const userData = {
      username: username,
      password: password
    };
    axios
      .post('http://localhost:2345/login/', userData)
      .then((response) => {
        if (response.status === 200) {
          login();
          setAdminStatus(response.data.isAdmin); // Set isAdmin status based on response data
          setUserName(username); // Set the username in the AuthContext
          navigate('/home');
        } else {
          alert('Invalid user');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert('An error occurred during login');
      });
  };

  return (
    <div>
      <section className="Background">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-12">
              <div className="card card-form">
                <div className="row g-0">
                  <form>
                    <div className="card-body p-md-5 text-black">
                      <div className="d-flex justify-content-center pt-3">
                        <h1 className="fw-Bolder mb-3 pb-3 heading">Login</h1>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          onChange={(e) => setUsername(e.target.value)}
                          className="form-control form-control-lg"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Username"
                          required
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-lg"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-center pt-3">
                        <button type="button" className="btn btn-secondary btn-lg">
                          <Link to="/home">Cancel</Link>
                        </button>
                        <button
                          onClick={userAuthentication}
                          type="button"
                          className="btn btn-secondary btn-lg ms-2"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
