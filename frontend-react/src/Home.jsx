import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) =>
  {
    axios.delete('http://localhost:8081/delete/'+id)
      .then(res => {
        console.log(res)
        window.location.reload();
      })
      .catch(err=>console.log(err));
  }

  return (
    <>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <h3>Student List</h3>
          <div className="d-flex justify-content-end">
            <Link to='/create' className='btn btn-success'>Create Record</Link>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <Link  to={`/read/${student.id}`} className='btn btn-sm btn-info mr-1'>Read</Link>
                      <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary m-1'>Edit</Link>
                      <button onClick={() => handleDelete(student.id)} className='btn btn-sm btn-danger ml-1'>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
