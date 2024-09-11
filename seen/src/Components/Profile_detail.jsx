import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Profile_detail() {
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


    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>Profile</h1>
                    {/* <Link to={'/Profile_edit'} className='btn btn-info '>Update profile</Link> */}
                    <hr />
                    <h3>Name : {user.name}</h3>
                    <h6>Email : {user.email}</h6>
                    <h6>Mobile : {user.mobile}</h6>
                    <h6>Address : {user.address}</h6>
                </div>
                <Link to={'/Update_profile'}>Update</Link>
                <div className='col-md-6'>
                    <h1>Orders</h1>
                    <hr />
                </div>
            </div>


        </>
    )
}

export default Profile_detail