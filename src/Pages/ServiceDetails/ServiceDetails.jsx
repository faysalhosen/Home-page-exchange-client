import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const singleService = useLoaderData();
  console.log(singleService);

  const { user } = useContext(AuthContext);

  const handleAddServices = (e) => {
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
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Service purchase successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>Details service</title>
      </Helmet>
      <h1 className="text-4xl text-center  mt-10 mb-10">
        Our Singe Service Details
      </h1>
      <div className="card card-side w-[70%] bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="h-96" src={singleService.photo} alt="service img" />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-2xl">{singleService.serviceName}</h2>
          <p>{singleService.description}</p>

          <div className="pt-5">
            <div className="flex items-center">
              <TbLocationFilled className="text-xl text-green-800"></TbLocationFilled>
              <p>{singleService.serviceArea}</p>
            </div>
            <div className="flex items-center  gap-2">
              <MdOutlinePriceChange className="text-lime-500 mb-10 text-xl"></MdOutlinePriceChange>
              <span className="mb-11">price:{singleService.price}</span>
            </div>
          </div>

          <div className="flex">
            <span>
              <img
                className="rounded-full w-14 h-14 "
                src={singleService.userPhoto}
                alt=""
              />
            </span>
            <span>
              <p className="ml-2  font-bold">service Provider:</p>
              <p className="ml-1 ">{singleService.name}</p>
            </span>
          </div>
          {/* book Now */}
          <div className="card-action flex justify-end mr-10 relative ">
            <button
              className="btn bg-black p-3 text-white rounded-sm"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg text-center">Book Service</h3>
                <form onSubmit={handleAddServices}>
                  {/* service  name */}
                  <div className="md:flex justify-center gap-5">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">service Name</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="serviceName"
                          value={singleService.serviceName}
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

                      <input
                        type="date"
                        name="date"
                        className="input input-bordered"
                      />
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
                          value={singleService.email}
                          className="input input-bordered w-full"
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
                          value={singleService.price}
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
                          value={singleService.photo}
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
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
