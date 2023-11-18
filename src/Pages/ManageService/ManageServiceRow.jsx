// import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const ManageServiceRow = ({ service ,handleDeleteService}) => {
  const {_id, serviceName, date, price, photo } = service;
  



  return (
    <tr>
      <th><img className="w-12 h-12" src={photo} alt="" /></th>
      <td>{serviceName}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td></td>
      <td>
        <Link to={`/updateService/${_id}`}className="bg-gray-100">update</Link>
      </td>
      <td>
        <button onClick={() => handleDeleteService(_id)} className="btn btn-circle btn-sm text-white bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>

  );
};

export default ManageServiceRow;
