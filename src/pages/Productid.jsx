import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

const Productid = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        // const result = await res.json();
        console.log(res.data);
        if (res.data) {
          setIsLoading(false);
          setProduct(res.data);
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
  });

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
        <div className="relative gap-10 flex items-center justify-center h-screen max-w-4xl mx-auto">
          <Link
            to={"/products"}
            className="flex items-center justify-center size-12 bg-black text-white absolute top-5 left-5 rounded-full"
          >
            <ArrowLeft />
          </Link>
          <img
            alt={product.title}
            src={product.thumnail}
            className="w-auto h-[500px] shadow-md shadow-gray-200 rounded-md"
          ></img>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-black">
              {product.title}
            </h3>
            <p className="text-gray-500 text-base text-justify">
              {product.description}
            </p>
            <p className="text-sm  text-justify text-blue-500">
              Price: ${product.price}
            </p>
            <button className="w-full py-2 text-white rounded-sm bg-blue-500  hover:bg-blue-600">
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Productid;
