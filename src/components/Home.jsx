import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2345/blog/").then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  return (
    <div>
      <section className="Background1">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col ">
              <div className="card card-table">
                <div className="row g-0">
                  <div className="d-flex justify-content-center pt-3">
                    <h1 className="fw-Bolder mb-3 pb-3 headeing">Blog List</h1>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                          {apiData.map((data) => {
                            return (
                              <div
                                className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6"
                                key={data.id}
                              >
                                <div className="card text-bg-light mb-3">
                                  <div className="card-header">
                                    {data.category}
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.content}</p>
                                    <h5 className="card-title">
                                      {data.author}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
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

export default Home;
