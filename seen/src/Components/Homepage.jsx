import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';


function Homepage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
    document.title = "Home "
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://seenunseendesign.com/seen_unseen/api/all/products')
      const jsonData = await response.json();
      setData(jsonData)
    } catch (error) {
      console.error("error", error);
    }
  }


  return (
    <>
      <main>
        <Slider {...settings}>
          <div>
            <img className='w-100' src="https://seenunseendesign.com/seen_unseen/images/banners/1682502182.jpg" alt="" />
          </div>
          <div>
            <img className='w-100' src="https://seenunseendesign.com/seen_unseen/images/banners/1682923238.jpg" alt="" />
          </div>
          <div>
            <img className='w-100' src="https://seenunseendesign.com/seen_unseen/images/banners/1690522623.jpg" alt="" />
          </div>
          <div>
            <img className='w-100' src="https://seenunseendesign.com/seen_unseen/images/banners/1682923222.jpg" alt="" />
          </div>
        </Slider>

        <div className='container text-center'>
          <p className='p-5 fs-5 text-secondary'>
            <p className='fs-5 d-inline text-dark'>Seen Unseen</p> creates meaningful designs using natural materials and traditional techniques, showcasing the beauty and richness of nature. Our artisans weave together a story with every piece, honoring their craft and bringing it to life for others to enjoy.
          </p>
        </div>

      </main>
      <div className="container">

        {/* {JSON.stringify(data)} */}
        {data && (
          <div className='row'>
            {data && data.data && data.data.map((item, index) => (

              <div className='col-md-3 mb-2' key={index}>
                <div class="card " >
                  <Link to={'/Product_info/' + item.id + '/' + item.name.replace(/ /g, "-")}>
                    <img src={'https://seenunseendesign.com/seen_unseen/images/product/' + item.image} class="card-img-top " alt="..." />
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.sell_price}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>
    </>
  )
}

export default Homepage
