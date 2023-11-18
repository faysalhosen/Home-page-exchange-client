import { useContext,  useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationDot } from "react-icons/fa6";

const Services = () => {
  const { user } = useContext(AuthContext);
  const allServices = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  // console.log("here is all services", allServices);

  const filteredServices = allServices.filter((service) =>service.serviceName.toLowerCase().includes(searchResult)
  );
  const displayAllServices = showAll ? filteredServices: filteredServices.slice(0, 6);

  return (
    // 
    <div className="grid grid-cols-1  max-w-4xl mx-auto mt-20">
      <span className="mx-auto">
        <img className=" w-20" src="https://i.imgur.com/JHOf3wu.jpg" alt="" />
      </span>
      <h1 className="text-center text-5xl  font-bold ">
        Our All Home Services
      </h1>
      {/* search button */}
      <div className="form-control mx-auto mt-5">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered "
            value={searchResult}
            onChange={(e) => setSearchResult(e.target.value.toLowerCase())}
          />
          <button className="btn p-4 text-white bg-black">search</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 mt-10">
        {displayAllServices?.map((service) => (
          <div
            key={service._id}
            className="card lg:card-side rounded-md bg-base-100 border mb-6"
          >
            <figure>
              <img className=" h-80" src={service.photo} alt="interior img" />
            </figure>
            <div className="card-body w-[65%]">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-xl mb-3 font-bold text-black">
                    {service.serviceName}
                  </h2>
                  <p className="text-black font-serif font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
              <span className="my-6 ">
                <p className="font-md text-black gap-1 font-serif flex items-center">
                  <FaLocationDot></FaLocationDot>
                  Service Area : {service.serviceArea}
                </p>

                <p className="font-md text-black font-serif">
                  Service Price : {service.price}
                </p>
              </span>
              <span className="flex ">
                <span>
                  <p className="ml-16 font-bold">service Provider:</p>
                  <p className="ml-16 ">{service.name}</p>
                </span>
                <img
                  className="rounded-full w-14 h-14 absolute  mb-20"
                  src={service.userPhoto}
                  alt=""
                />
              </span>

              <span className="flex justify-end relative top-4 left-3  ">
                <Link to={`/services/${service._id}`}><button className="bg-black p-3 text-white rounded ">
                  View Details
                </button></Link>
              </span>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <p className="mx-auto mb-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-rose-500 px-7 py-4 text-white font-bold rounded-sm "
          >
            Show All
          </button>
        </p>
      )}
    </div>
  );
};

export default Services;

