import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photourl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photourl, email, password);

    if (password.length < 6) {
      swal.fire("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal.fire("Password should be at least one uppercase");
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      swal.fire("Password should be at least one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        swal.fire("Registration successful.please login!!!");

        updateProfile(result.user, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            navigate(location?.state ? location.state : "/");
            window.location.reload();
          })
          .catch(() => {});
        //  window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        swal.fire("auth email already in used");
      });
  };

  return (
    <div>
      <Helmet>
                <title>Home service</title>
            </Helmet>
      <div className="mb-32">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1
              className="text-5xl   p-4 
                    font-bold mb-2"
            >
              Please Register!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md   bg-base-500">
            <div className="card-body bg-slate-100  rounded-xl">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-800">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered text-sm
                          border  "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-gray-800">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter your photo url"
                    className="input input-bordered text-sm border "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-800">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered text-sm border "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-800">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered text-sm border "
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-gray-800">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button
                    className="btn text-white bg-black font-semibold 
                              hover:bg-slate-500 "
                  >
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center mt-2 text-gray-800">
                Already have an account?{" "}
                <Link className="text-amber-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
