import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  
  const navigate = useNavigate(); 
  const [values, setValues] = useState({
    name: '',
    email: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault(); // Fix the typo here
    axios
      .post('http://localhost:8081/addStudents', values)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className='mb-2'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                placeholder='enter name..'
                className='form-control'
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                placeholder='enter email..'
                className='form-control'
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <button className='btn btn-success' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
