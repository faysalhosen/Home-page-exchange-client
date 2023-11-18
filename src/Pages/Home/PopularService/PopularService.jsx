import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const PopularService = ({ popularServices }) => {
  const { user ,loading} = useContext(AuthContext);
 
  console.log(popularServices);
  // console.log("here is popular services", popularServices);
  // const popularService = popularServices.slice(0,4)

  if (loading) {
    return 'loading...'
}

  return (
    <div className="p-5 md:p-10 bg-gray-100">
        <img className="mx-auto" src="https://i.imgur.com/rRGn8pM.png" alt="" />
      <h1 className="text-5xl font-bold text-center">
        Our popular services
      </h1>
      <p className="text-center mt-4">
        Popular home services include interior design ,electrical 
        repairs, shifting and <br /> painting services. These services help homeowners
        maintain their  homes, tackle repairs, and enhance 
        their living spaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  ml-0 md:ml-40 mt-10 md:mt-16 max-w-5xl mx-auto">
        {popularServices.slice(0,4).map((service) => (
          <div
            key={service.id}
            className="card w-96 h-[89%] bg-base-100 border p-2"
          >
            <figure>
              
              <img 
              src={service?.photo} alt="Popular Service" />
            </figure>
            <div className="">
              <h2 className="card-title font-bold">{service?.serviceName}</h2>
              <p>{service.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <p>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </p>
                <div>
                  <p className="font-semibold">Service Provider:</p>
                  <p>{user?.displayName}</p>
                </div>
              </div>
              <p className="font-semibold mt-3">
                Service Price : {service?.price}
              </p>
              <div className="flex justify-end mr-2 mb-2">
                <Link to={`/services/${service?._id}`}><button className="btn bg-black text-white  ">
                  View Details
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularService;
