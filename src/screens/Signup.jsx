import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Signup() {
  const [credentials,setCredentials] = useState({name:'',email:'',password:'',geolocation:''})

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://https://gofoooood.netlify.app/api/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    });

    // You can handle the response from the server here
    const json = await response.json(); // Move await outside of the fetch object
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
};

const onChange = (event) =>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
<div>
      <Footer />
    </div>
    </>
  )
}

export default Signup
