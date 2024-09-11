import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Header() {

    const [user, Setuser] = useState(JSON.parse(localStorage.getItem('user')))
    const logOut = () => localStorage.removeItem('user', Setuser(''))


    return (
        <div>
            <header>
                <div className='top-header'>
                    <marquee className="marque-text" behavior="" direction="">Get upto 10% Cashback on paying via MobiKwik wallet on a minimum transaction of Rs.5000</marquee>
                </div>

                <nav class="navbar navbar-expand-sm">
                    <div class="container-fluid main-div">
                        <div class='img-div'>
                            <Link class="navbar-brand" to="/"><img class='logo-img' src="https://www.seenunseendesign.com/logo.png" alt="" /></Link>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav items w-100">
                                <li class="nav-item">
                                    <div class="input-group rounded-pill border">
                                        <input type="search" class="form-control border-0 rounded-pill" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        <span class="input-group-text rounded-pill border-0" id="search-addon">
                                            <a href=""><i class="fa fa-search text-black"></i></a>
                                        </span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/wholesale">Wholesale</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/narrative">Narrative</Link>
                                </li>

                                <li className="nav-item">
                                    <Link class="nav-link" to="/cart"><i class="fa fa-shopping-cart text-black" aria-hidden="true"></i></Link>
                                </li>
                                <li class="nav-item">
                                    {user && user.name ? (<div class="dropdown">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                            {user.name}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item"><Link to={'/profile_detail'} >Profile</Link></li>
                                            <button className='btn btn-danger' onClick={logOut}  >logOut</button>
                                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                    ) : (<Link to={'/profile'}><button className='btn btn-outline-success'>Login</button>  </Link>)}
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
