import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setpass] = useState('')
    const [confirm_pass, setConfirm_pass] = useState('')
    const [response, setResponse] = useState('')
    const [error, setError] = useState([])



    useEffect(() => {
        document.title = "Register"
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://seenunseendesign.com/seen_unseen/api/user/register', {
                email: email, password: pass, name: name, mobile: mobile, confirm_pass: confirm_pass
            })
            setResponse(response)
            localStorage.setItem('user', JSON.stringify(response.data.data))
            console.log(response.data.data);
            window.location.href = '/'
            setError([])
        } catch (error) {
            setError(error.response.data)
            console.log(error.response.data);
        }


    }
    return (
        <>
            <div className="container ">
                <div className="row p-5 m-auto justify-content-center">
                    <div className="col-md-8">
                        {JSON.stringify(error.massage)}
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3 d-flex  ">
                                <label for="exampleInputEmail1" class="form-label">Your Name</label> <br />
                                <input type="text" class="form-control " id="" aria-describedby="" onChange={(e) => setName(e.target.value)} /> <br />
                                <label for="exampleInputEmail1" class="form-label">mobile</label>
                                <input type="number" class="form-control" id="" aria-describedby="" onChange={(e) => setMobile(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="" aria-describedby="" onChange={(e) => setEmail(e.target.value)} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="" onChange={(e) => setpass(e.target.value)} /> <br />
                                <label for="exampleInputPassword1" class="form-label"> Confirm_Password</label>
                                <input type="password" class="form-control" id="" onChange={(e) => setConfirm_pass(e.target.value)} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button> <br />
                            <p>already account <Link to={'/profile'}> login Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register