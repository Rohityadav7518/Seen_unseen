import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Updtae_profile() {
    const [data, setData] = useState('')
    const [user, Setuser] = useState(JSON.parse(localStorage.getItem('user')))

    useEffect(() => {
        fetchData()

    }, [])
    const fetchData = async () => {
        try {

            const response = await axios.get('https://seenunseendesign.com/seen_unseen/api/user/detailInfo?id=', {
                id: id, user_token: user_token
            })
            setData(response.data.data)

        } catch (error) {
            console.error("error", error);
        }
    }


    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDOB] = useState('')
    const [address, setAddress] = useState('')
    const [Gender, setGender] = useState('')
    const [response, setResponse] = useState('')
    const [error, setError] = useState([])

    useEffect((e) => {
        // e.preventDefault();

    }, [])

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://seenunseendesign.com/seen_unseen/api/user/updateProfile', {
                name: name, mobile: mobile, email: email, dob: dob, address: address, gender: Gender,
            })
            setResponse(response.data.data)
            setError([])
        } catch (error) {
            console.log(error);
            setError(error.response.data)
        }
    }


    return (
        <>

            <div className='container'>

                <div className='row'>
                    <div className='col-md-6 m-auto'>
                        <h1>Profile Edit Form</h1>
                        <Link to={'/profile_detail'} className='btn btn-danger '>back to profile</Link>
                        <hr />
                        <form className='row' onSubmit={handleSubmit} method='post '>
                            <div class="mb-3 col-md-6">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="exampleInputEmail1" class="form-label">Mobile</label>
                                <input type="number" name='mobile' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>


                            <div class="mb-3 col-md-6">
                                <label for="exampleInputPassword1" class="form-label">Gender</label>
                                <select class="form-select" aria-label="Default select example"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option selected>Please Select Gander</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>

                            <div class="mb-3 col-md-6">
                                <label for="exampleInputPassword1" class="form-label">DOB</label>
                                <input type="date" class="form-control" name='password' id="exampleInputPassword1" value={user.dob}
                                    onChange={(e) => setDOB(e.target.value)}
                                />
                            </div>

                            <div class="mb-3 col-md-12">
                                <label for="exampleInputPassword1" class="form-label">address</label>
                                <input type="text" class="form-control" name='password' id="exampleInputPassword1" value={user.address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>


                            <button type="submit" class="btn btn-primary">Update Profile</button>
                        </form>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Updtae_profile