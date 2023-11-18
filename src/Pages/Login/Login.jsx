import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("login page location:", location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    if (password.length < 6) {
      Swal.fire({
        title: "Success!",
        text: "Password should be at least 6 charecters",
        icon: "success",
        confirmButtonText: "Cool",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Success!",
        text: "Password should be at least one uppercase",
        icon: "success",
        confirmButtonText: "Cool",
      });
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      Swal.fire({
        title: "Success!",
        text: "Password should be at least one special character",
        icon: "success",
        confirmButtonText: "Cool",
      });

      return;
    }

    login(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          text: "login successful",
          timer: 1000,
        });

        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.error(error);
        Swal.fire({
          text: "Invalid mail or password,please try again",
          timer: 4000,
        });
      });
  };
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mb-20 mt-12">
      <Helmet>
        <title>Login service</title>
      </Helmet>
      <div className=" ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl  font-bold mb-2 ">Please Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md  bg-base-500">
            <div className="card-body bg-slate-100 rounded-xl">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered text-sm
                                border  "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-gray-700">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered text-sm border "
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-gray-700"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button
                    className="btn text-white  font-semibold 
                          bg-black         "
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center mt-2 text-gray-800">
                Do not have an account?{" "}
                <Link className="text-amber-600 font-bold" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center btn-outline p-4 text-gray-700 bg-slate-300 mx-auto "
      >
        <FcGoogle></FcGoogle>Login with google
      </button>
    </div>
  );
};

export default Login;
