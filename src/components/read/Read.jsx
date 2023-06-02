import React, { useEffect, useState } from "react";
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:2345/blog/')
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:2345/blog/delete/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error deleting blog:', error);
      });
  };

  return (
    <div>
      <section className="Background">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col ">
              <div className="card card-table">
                <div className="row g-0">
                  <div className="d-flex justify-content-center pt-3">
                    <h1 className="fw-Bolder mb-3 pb-3 headeing">Blog List</h1>
                  </div>
                  <div>
                    <Table celled padded>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Title</Table.HeaderCell>
                          <Table.HeaderCell>Date</Table.HeaderCell>
                          <Table.HeaderCell>Author</Table.HeaderCell>
                          <Table.HeaderCell>Content</Table.HeaderCell>
                          <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {apiData.map((data) => (
                          <Table.Row key={data._id}>
                            <Table.Cell>{data.title}</Table.Cell>
                            <Table.Cell>{data.date}</Table.Cell>
                            <Table.Cell>{data.author}</Table.Cell>
                            <Table.Cell>{data.content}</Table.Cell>
                            <Table.Cell>
                              <Button color="red" onClick={() => onDelete(data._id)}>Delete</Button>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center pt-3">
                    <Link to='/create'>
                      <Button type="button" className="btn btn-secondary btn-lg">Create New Blog</Button>
                    </Link>
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

export default Read;
