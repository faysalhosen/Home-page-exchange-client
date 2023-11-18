import { Link } from "react-router-dom";
import React, {  useRef } from "react";
import Lottie from "lottie-react";
import Error from '../../assets/Animation .json'

const ErrorPage = () => {
  const container = useRef(null);

  return (
    <div>
      
      <div className="container max-w-3xl mx-auto" >
         <Lottie animationData={Error}></Lottie>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className=" text-center  bg-blue-950 text-white p-3 rounded "
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
