import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
    const [update, setUpdate]= useState([])
    // const data = useLoaderData();
    const {id} = useParams();
    console.log(id);
     useEffect(() => {
       fetch(`http://localhost:5000/purchase/${id}`)
       .then(res=> res.json())
       .then(data => {
        setUpdate(data);
       })
     } ,[id])
     console.log(update);

  
    const handleUpdateServices = (e) => {
      e.preventDefault();
      const form = e.target;
      // const name = form.yourName.value;
      const serviceName = form.serviceName.value;
      const email = user?.email;
      const date = form.date.value;
      const price = form.price.value;
      // const description = form.description.value;
      const serviceArea = form.serviceArea.value;
      const photo = form.photo.value;
  
      const booking = {
        serviceName,
        email,
        date,
        price,
        serviceArea,
        photo,
      };
      console.log(booking);
    
    }
    
    return (
        <div className="max-w-6xl mx-auto my-20">
            <h1 className="text-3xl text-center mb-8">Update service</h1>
            <form onSubmit={handleUpdateServices}>
                  {/* service  name */}
                  <div className="md:flex justify-center gap-5 ">
                    
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">service Name</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="serviceName"
                          // value={updateServices.serviceName}
                          placeholder="service Name"
                          className="input input-bordered w-full"
                          readOnly
                        />
                      </label>
                    </div>
                    {/* date Name */}
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Date</span>
                      </label>
                    
                        <input type="date" name="date" className="input input-bordered" />
                    </div>

                  </div>

                  {/*user email*/}
                  <div className="md:flex justify-center gap-5">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Your email</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="email"
                          value={user?.email}
                          placeholder="Your Email"
                          className="input input-bordered w-full"
                          readOnly
                        />
                      </label>
                    </div>
                    {/* Provider email*/}
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Provider Email</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="email"
                          // value={updateServices.email}
                          className="input input-bordered w-full"
                          readOnly
                        />
                      </label>
                    </div>
                  </div>

                  {/* description */}
                  <div className="md:flex justify-center gap-5">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">price</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="price"
                          // value={updateServices.price}
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                    {/* Service Area*/}
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text"> Service Area</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="serviceArea"
                          placeholder="Service Area"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                  </div>
                  {/* service photo Url*/}
                  <div className=" justify-center gap-5">
                    <div className="form-control  w-1/2">
                      <label className="label">
                        <span className="label-text">
                          Photo URL of the service
                        </span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="photo"
                          // value={updateServices.photo}
                          placeholder="Photo URL"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>

                    <input
                      type="submit"
                      value="purchase"
                      className="btn btn-block border-2 bg-black text-white mt-5"
                    />
                  </div>
                </form>
        </div>
    );
};

export default UpdateService;