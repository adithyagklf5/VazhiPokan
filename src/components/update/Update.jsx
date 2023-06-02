import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import image from '../image/registration.jpg';
import { AuthContext } from '../context/AuthContext';

const Update = () => {
  const { loggedInUsername } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [ID, setID] = useState(null);
  const navigate = useNavigate();

  const sendDataToAPI = (e) => {
    e.preventDefault(); // Prevent the default form submission

    axios
      .put(`http://localhost:2345/blog/update/${ID}`, {
        title,
        date,
        content,
        username: loggedInUsername
      })
      .then((res) => {
        console.log(res);
        navigate('/home');
      })
      .catch((error) => {
        console.error('Update error:', error);
        alert('An error occurred during update');
      });
  };

  useEffect(() => {
    setTitle(localStorage.getItem('title'));
    setDate(localStorage.getItem('date'));
    setContent(localStorage.getItem('content'));
    setID(localStorage.getItem('ID'));
  }, []);

  return (
    <div>
      <section className="Background">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col ">
              <div className="card card-form">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img className='logo ms-100 w-100 vh-100 img' src={image} alt="logo" />
                  </div>
                  <div className="col-xl-6">
                    <form onSubmit={sendDataToAPI}> {/* Use onSubmit event and attach the handler */}
                      <div className="card-body p-md-5 text-black">
                        <div className="d-flex justify-content-center pt-3">
                          <h1 className="fw-Bolder mb-3 pb-3 headeing">Update Blog</h1>
                        </div>
                        <br /><br />
                        <div className="form-outline mb-2">
                          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Date" />
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Content" />
                        </div>
                        <br />
                        <div className="d-flex justify-content-center pt-3">
                          <Link to='/home'>
                            <button type="button" className="btn btn-secondary btn-lg">Back</button>
                          </Link>
                          <button type="submit" className="btn btn-secondary btn-lg ms-2">Update</button>
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
}

export default Update;
