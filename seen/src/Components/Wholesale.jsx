import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Wholesale() {

  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, Setemail] = useState('')
  const [description, setDescription] = useState('')
  const [website_url, setWebsite_url] = useState('')
  const [store_Name, setStore_name] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [postal_code, setPostal_code] = useState('')
  const [country, setCountry] = useState('')
  const [response, setResponse] = useState('')
  const [error, setError] = useState([])



  useEffect(() => {
    document.title = "Wholesale"

  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://seenunseendesign.com/seen_unseen/api/user/wholesaler', {
        first_name: first_name, last_name: last_name, email: email, description: description, website_url: website_url, store_Name: store_Name, city: city, state: state, postal_code: postal_code, country: country

      });
      setResponse(response.data.data)
      setError([])
    } catch (error) {
      setError(error.response.data)

    }

  }
  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-center m-auto">
          {JSON.stringify(response.data)}
          <div className="col-md-6 p-3">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" onChange={(e) => setFirst_name(e.target.value)} class="form-control" id="firstName" placeholder="Enter first name" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" onChange={(e) => setLast_name(e.target.value)} id="lastName" placeholder="Enter last name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" onChange={(e) => Setemail(e.target.value)} id="email" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="description">Description Box</label>
                <textarea class="form-control" onChange={(e) => setDescription(e.target.value)} id="description" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="webUrl">Web URL</label>
                <input type="url" onChange={(e) => setWebsite_url(e.target.value)} class="form-control" id="webUrl" placeholder="Enter web URL" />
              </div>
              <div class="form-group">
                <label for="storeName">Store Name</label>
                <input type="text" class="form-control" onChange={(e) => setStore_name(e.target.value)} id="storeName" placeholder="Enter store name" />
              </div>
              <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" onChange={(e) => setCity(e.target.value)} id="city" placeholder="Enter city" />
              </div>
              <br />
              <div class="form-group">
                <select name="country" className='form-select' onChange={(e) => setState(e.target.value)} id="">
                  <option value="" selected >select your state</option>
                  <option value="">raj</option>
                  <option value="">Mp</option>
                  <option value="">up</option>
                </select>
              </div>
              <div class="form-group">
                <label for="postal">Postal</label>
                <input type="text" class="form-control" onChange={(e) => postal_code(e.target.value)} id="postal" placeholder="Enter postal" />
              </div> <br />
              <div class="form-group">
                <select name="country" className='form-select' id="" onChange={(e) => setCountry(e.target.value)} >
                  <option value="" selected >select your country</option>
                  <option value="">india</option>
                  <option value="">china</option>
                  <option value="">pako</option>
                </select>
              </div>
              <div class="form-group">
                <label for="postalCode">Postal Code</label>
                <input type="text" class="form-control" onChange={(e) => setPostal_code(e.target.value)} id="postalCode" placeholder="Enter postal code" />
              </div> <br />
              <div className=" justify-content-center d-flex ">
                <button type="submit" class="btn btn-primary  ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Wholesale
