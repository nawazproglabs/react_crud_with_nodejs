import axios from 'axios';
import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Read() {
    const {id} = useParams();

    const [student,setStudent] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0])
        })
        .catch(err => console.log(err))
      }, []);
    
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <h3>student Detail</h3>
          <h3>{student.id}</h3>
          <h3>{student.name}</h3>
          <h3>{student.email}</h3>
          <Link to="/" className="btn btn-primary btn-info">Back</Link>
          <Link to={`/edit/${student.id}`} className="btn btn-primary m-1">Edit</Link>
        </div>
      </div>
  )
}
