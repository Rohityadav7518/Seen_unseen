import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { json, useParams } from 'react-router-dom'



function Product_info() {

    let { id, name } = useParams();
    const [data, setData] = useState([])
    const [subcatid, setDataid] = useState([])
    const [image, setImage] = useState([])

    const [product, setProduct] = useState('');
    useEffect(() => {
        fetchData();
        document.title = name;

    })

    const fetchData = async () => {
        try {
            const response = await axios.post('https://seenunseendesign.com/seen_unseen/api/single/product/detail', { product_id: id })
            setData(response.data.data)
            setDataid(response.data.data.sub_cat_id)
            setImage(response.data.image)
            // console.log(response.data.data);
        } catch (error) {
            ("error is here ", error);
        }

    }




    const [subdata, setDatasub] = useState([])
    // const [subimage, setImagesub] = useState([])




    useEffect(() => {
        const SubfetchData = async () => {
            try {
                const response = await axios.get('https://seenunseendesign.com/seen_unseen/api/all/products', {
                    params: { sub_cat_id: subcatid }
                });
                console.log('Response received');
                setDatasub(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        SubfetchData();
    }, []);

    return (
        <>
            {/* <p>{subcatid}</p> */}
            <hr />
            {/* <p className='p-4'>{JSON.stringify(data.data)}</p> */}
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://seenunseendesign.com/seen_unseen/images/product/' + data.image} alt="" style={{ width: '400px' }} />
                    </div>
                    <div className="col-md-6">

                        <h2>{data.name}</h2>
                        <h2> <del> {data.sell_price}</del></h2>
                        <h2>{data.regular_price}</h2>
                        <form action="">

                            {/* <input type="text" value={qun} /> */}
                            <button type='submit' className='btn btn-outline-primary'>Add To Cart</button>
                        </form>
                        <p>{data.description}</p> <br />
                        <p>{data.long_description}</p>
                    </div>


                </div>


                <div className='row'>
                    {subdata && subdata.data && subdata.data.map((itm, key) => (
                        <div className='col-md-3 mb-2' key={key}>
                            <div className="card">
                                <img src="https://seenunseendesign.com/seen_unseen/images/product/1693908665.jpg" className="card-img-top" alt="Product Image" />
                                <div className="card-body">
                                    <h5 className="card-title">dewdwe</h5>
                                    <p className="card-text">qdwede</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div >


        </>
    )
}

export default Product_info