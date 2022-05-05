// Imports
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
// Created component named Products
const Products = () => {
  // Setting up state for data to an empty array
  const [data, setData] = React.useState([]);
  // Setting up state for filter and setting it to data
  const [filter, setFilter] = React.useState(data);
  // Setting up state for loading and setting it to false for default
  const [loading, setLoading] = React.useState(false);
  // Setting componentMount to true for default using let variable
  let componentMount = true;

  // Setting useEffect that runs getProducts async function that calls the API and if componentMount is true, it will setData to server response
  // and setFilter to response data and setLoading to false
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMount = false;
      };
    };

    getProducts();
    
  }, []);
  // Created function for loading skeleton
  const Loading = () => {
    return (
    <>
    <div className="col-md-3">
        <Skeleton height={300}/>
    </div>
    <div className="col-md-3">
        <Skeleton height={300}/>
    </div>
    <div className="col-md-3">
        <Skeleton height={300}/>
    </div>
    <div className="col-md-3">
        <Skeleton height={300}/>
    </div>
    </>
    );
  };
  // Created a function for displaying the products by mapping through the data and filter and returning a div with the product name and price and image
  const filterProducts = (cat) => {
      const updatedList = data.filter((x) =>x.category === cat);
        setFilter(updatedList);
  }
  // Created a function for displaying the products by filtered data
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-danger fw-bold me-2" id="box-shadow" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-danger fw-bold me-2" id="box-shadow" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-danger fw-bold me-2" id="box-shadow" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-danger fw-bold me-2" id="box-shadow" onClick={() => filterProducts("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-danger fw-bold me-2" id="box-shadow" onClick={() => filterProducts("electronics")}>Electronics</button>
        </div>
        {filter.map((product) => {
            return(
                <>
                <div className="col-md-3 mb-4" >
                <div className="card h-100 text-center p-4" key={product.id} id="box-shadow">
  <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
  <div className="card-body">
    <h5 className="card-title fw-bold">{product.title}</h5>
    <p className="card-text lead fw-bold">${product.price}</p>
    <NavLink to={`/products/${product.id}`} className="btn btn-outline-danger fw-bold" id="box-shadow">Buy Now</NavLink>
  </div>
</div>
                </div>
                </>
            )

        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-3 fw-bolder text-center text-shadow-navlinks">
              Latest Arrivals
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
    </div>
  );
};

export default Products;

