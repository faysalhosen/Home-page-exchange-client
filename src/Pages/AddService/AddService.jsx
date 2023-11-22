import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.yourName.value;
    const serviceName = form.serviceName.value;
    const email = user?.email;
    const price = form.price.value;
    const description = form.description.value;
    const serviceArea = form.serviceArea.value;
    const photo = form.photo.value;
    const userPhoto = form.userPhoto.value;


    const addService = {
      name,
      serviceName,
      email,
      price,
      description,
      serviceArea,
      photo,
      userPhoto
    };
    console.log(addService);

    fetch("https://home-page-service.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Service added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-20">
      <Helmet>
        <title>home-exhange | add services </title>
      </Helmet>
      <h2 className="text-center mb-5 text-3xl  font-bold font-serif">
        Add A Service
      </h2>
      <form onSubmit={handleAddServices}>
        {/* Your  name */}
        <div className="md:flex justify-center gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="yourName"
                value={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered w-full"
                readOnly

              />
            </label>
          </div>
          {/* service Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* email*/}
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
          {/* Price*/}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* description */}
        <div className="md:flex justify-center gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="description"
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
              <span className="label-text">Photo URL of the service</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*  user photo Url*/}
        <div className=" justify-center gap-5">
          <div className="form-control  w-1/2">
            <label className="label">
              <span className="label-text">user photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="userPhoto"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Add A Service"
            className="btn btn-block border-2 bg-black text-white mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
