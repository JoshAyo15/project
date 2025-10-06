import axios from "axios";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Productss = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // const fetchData =()=> {
    //     fetch('https://dummyjson.com/products')
    //         .then(res=>res.json())
    //         // .then((res)=>{return res.json()})
    //         .then(res=>setProducts(res.products))
    //         .catch((error)=>{console.log(error.message)})
    // }
    // fetchData()

    const fetchDataAsync = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        // const result = await res.json();
        // console.log(res)
        if (res.data.products) {
          setIsLoading(false);
          setProducts(res.data.products);
        }
        // console.log(res)
      } catch (error) {
        console.log("Error Occured: ", error.message);
        setIsError(true);
        setErrorMsg("Network Error, Try again");
        setIsLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <>
      {isError && (
        <div className="h-screen w-full flex flex-col gap-2 items-center justify-center">
          <p className="text-red-600 font-semibold text-4xl">Error Occured</p>
          <p className="text-red-600 text-1g">{errorMsg}</p>
        </div>
      )}
      {isLoading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="blue"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 p-4">
          {products.map((product, index) => (
            <Link
            to={`/products/${product.id}`}
              key={index}
              className="relative p-4 rounded-md shadow-lg flex flex-col justify-between gap-2"
            >
              <div className="w-7 h-7 flex items-center justify-center bg-black text-white rounded-full absolute top-2 left-2">
                {product.id}
              </div>
              <div>
                <img
                  alt={product.title}
                  src={product.images[0]}
                  className="w-auto h-56 object-cover"
                />
              </div>
              <h2 className="text-black font-semibold text-base">
                {product.title}
              </h2>
              <p className="text-slate-850 text-sm">{product.description}</p>
              <div className="flex items-center justify-start">
                <div className="text-sm bg-gray-200 py-1 px-3 rounded-sm">
                  Category:{" "}
                  <span className="text-black font-semibold">
                    {product.category}
                  </span>{" "}
                </div>
              </div>
              <button className="py-3 text-white rounded-sm bg-blue-700 hover:bg-blue-600">
                Add to cart
              </button>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Productss;
