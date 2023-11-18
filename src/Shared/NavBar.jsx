import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLink = (
    <>
      <li className="font-bold text-white m">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-white bg-black">
        <NavLink to="/services">Services</NavLink>
      </li>
      { user?.email? <li className="font-bold text-white bg-black"><NavLink to="/purchase">Manage Services</NavLink>
      </li> : ''
      
      }
      {
        user? (
      <li>
      <details>
        <summary className="text-white">
          Dashboard
        </summary>
        <ul className="p-1 border-none rounded-none bg-base-200">
          <li className="bg-base-200"><NavLink to='/myservice'> My services</NavLink></li>
          <li className="bg-base-200"><NavLink to='/addservices'>Add services</NavLink></li>
          <li className="bg-base-200"><NavLink to='/myschedules'>My schedules</NavLink></li>
        </ul>
      </details>
    </li>
        )
        :
        null
      }
      <li className="font-bold text-white bg-black">
        <NavLink to="/addservices">Add Services</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-70% bg-black sticky top-0 z-20 shadow-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex ml-5">
          <img
            className="h-10 w-14"
            src="https://i.imgur.com/5DCw3mi.png"
            alt=""
          />
          <p className=" text-sm font-serif font-bold normal-case text-transparent  bg-clip-text bg-gradient-to-r from-white to-rose-400">
            Home Service <br /> Exchange
          </p>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div>
      </div>

      <div className="">
        {user ? (
          <div className="flex items-center justify-center gap-3 ">
            <p className="text-white ml-2">{user.displayName}</p>
            <img
              className="w-12 h-10 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <button
              onClick={handleSignOut}
              className="btn bg-black text-white px-1 md:px-2 "
            >
              sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn rounded-md bg-black text-white px-3 py-0 ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
