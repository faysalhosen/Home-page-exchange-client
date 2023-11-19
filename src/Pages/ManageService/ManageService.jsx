import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ManageServiceRow from "./ManageServiceRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [manageService, setManageService] = useState([]);

  const url = `http://localhost:5000/purchase?email=${user?.email}`;
  // https://home-service-exchange-server.vercel.app
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageService(data))
  },[url]);

  const handleDeleteService = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/purchase/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json)
        .then(data => {
          console.log(data);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        const remaingService = manageService.filter(service => service._id !== id)
        setManageService(remaingService)
       
      }
    });
  }


  return (
    <div>
        <Helmet>
                <title> Home-Exchane | Manage service</title>
            </Helmet>
      <h2 className="text-2xl mt-16 text-center mb-8 font-bold text-rose-700">
        Manage Your service: {manageService.length}
      </h2>

      <div className="overflow-x-auto max-w-6xl mx-auto mb-20 border">
        <table className="table ">
          {/*table header */}
          <thead className="text-rose-700 bg-base-200">
            <tr>
              <th>photo</th>
              <th>Service Name</th>
              <th>Job</th>
              <th>date</th>
              <th>status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
                {
                    manageService.map(service => <ManageServiceRow key={manageService._id}
                    handleDeleteService={handleDeleteService}
                    service={service}
                    ></ManageServiceRow>)
                  }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
