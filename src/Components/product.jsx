import React, { useEffect, useState } from "react"
import './Product.css'

function Product() {
    
    const [detail , setdetail] = useState([])
    
    function fetchdata() {
        fetch("http://localhost:3000/product")
        .then((res) => {
            return res.json()
        })
        .then((data) => {setdetail(data)})
        .catch((err) => console.log(err))
    }
    function cards() {
        fetch("https://fakestoreapi.com/products")
        .then((res) => {
            return res.json()
        })
        .then((data) => {setdetail(data)})
        .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchdata()
        // cards()
    },[detail])

    return(
        <>
         <h1>Show Product</h1>
         <div className="card-container">
                {detail.map((el) => (
                    <div className="card" key={el.id}>
                        <img className="card-image" src={el.image} alt={el.title} />
                        <div className="card-content">
                            <h2 className="card-title">{el.title}</h2>
                            <p className="card-description">{el.description}</p>
                            <h3 className="card-category">{el.category}</h3>
                            <h4 className="card-price">{el.price}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Product