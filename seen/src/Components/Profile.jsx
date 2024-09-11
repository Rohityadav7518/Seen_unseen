import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Profile() {
  const [email, Setemail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  const [error, setError] = useState([])

  useEffect(() => {
    document.title = "login "

  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://seenunseendesign.com/seen_unseen/api/user/login', { email: email, password: password })
      setResponse(response)
      localStorage.setItem('user', JSON.stringify(response.data.data))
      setError([])
      window.location.href = '/';

    } catch (error) {
      console.log(error);
      setError(error.response.data)
    }
  }


  return (
    <>
      <div className="container">
        <div className="row p-5 m-auto justify-content-center ">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => Setemail(e.target.value)} aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button> <br />

              <p>Haven't account <Link to='/register'>Register Now </Link> </p>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile
