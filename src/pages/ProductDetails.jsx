// Imports
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// Created an arrow funtion named ProductDetails that sets the state of the product and the loading state
const ProductDetails = () => {
// used useParams to get the id from the url
    const {id} = useParams();
// set the state of the product to an empty object
    const [product, setProduct] = useState([]);
// set the state of the loading to false by default
    const [loading, setLoading] = useState(false);
// Created useEffect with a function that will fetch the product data from the API by the id and setLoading to true until the data is fetched then set to
// false 
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [id]);
// Created a function name Loading that returns a loading message if the loading state is true
    const Loading = () => {
        return(
            <>
            Loading.........
            </>
        )
    }
// Created a function name ShowProduct stylized with bootstrap that returns the product data if the loading state is false
    const ShowProduct = () => {
        return(
        <>
        <div className="col-md-6 mt-5 mb-5">
            <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6 mt-5 mb-5">
            <h4 className="text-uppercase fw-bold text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
               Rating: {product.rating && product.rating.rate}
               <i class="fa fa-star" ></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
                $ {product.price}
            </h3>
            <p className="lead">
                {product.description}
            </p>
            
            <button className="btn btn-outline-danger px-4 py-2">
            <i
                  className="fa fa-shopping-cart me-1"
                  aria-hidden="true"
                ></i>
                Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-danger ms-2 px-3 py-2">
            <i
                  className="fa fa-shopping-cart me-1"
                  aria-hidden="true"
                ></i>
               Go to Cart
            </NavLink>
        </div>
        </>
        )
    }


  return (
    <div>
       <div className="container">
           <div className="row">
               {loading ? <Loading /> : <ShowProduct />}
           </div>
       </div>
    </div>
  )
}

export default ProductDetails