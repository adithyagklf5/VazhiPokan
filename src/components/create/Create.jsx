import axios from 'axios';
import image from '../image/registration.jpg';
import React, { useState , useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const { username } = useContext(AuthContext);  // Retrieve the username and setUserName from the AuthContext

  const sendDataToAPI = (event) => {
    event.preventDefault(); // Prevent default form submission


    axios
      .post(`http://localhost:2345/blog/create`, {
        title,
        author: username, // Use the username obtained from the AuthContext
        date,
        content,
      })
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <section className="Background">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-form">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      className="logo ms-100 w-100 vh-100 img"
                      src={image}
                      alt="logo"
                    />
                  </div>
                  <div className="col-xl-6">
                    <form onSubmit={sendDataToAPI}>
                      <div className="card-body p-md-5 text-black">
                        <div className="d-flex justify-content-center pt-3">
                          <h1 className="fw-Bolder mb-3 pb-3 headeing">
                            Create Blog
                          </h1>
                        </div>
                        <br />
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Title"
                          />
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="date"
                          />
                        </div>
                        <br/>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            onChange={(e) => setContent(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Content"
                          />
                        </div>
                        <br />
                        <div className="d-flex justify-content-center pt-3">
                          <Link to="/home">
                            <button
                              type="button"
                              className="btn btn-secondary btn-lg"
                            >
                              Back
                            </button>
                          </Link>
                          <button
                            type="submit"
                            className="btn btn-secondary btn-lg ms-2"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
