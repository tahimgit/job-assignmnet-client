import React from "react";
import "../index.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { update } from "firebase/database";
import Swal from "sweetalert2";
import moment from "moment";

const ListCard = ({ list }) => {
  const {
    _id,
    userEmail,
    image,
    title,
    category,
    salary,
    description,
    expiredIn,
    postedOn,
    userName,
    vacancyNo
  } = list;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-assignment-beige.vercel.app/job/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-[1280px] mx-auto bg[#000000ad] shadow-2xl shadow-gray-800 listcard">
      <div className="  mt-5  gap-2   flex  ">
        <div className="flex  w-[635px] border-r border-orange-400  h-[410px] ">
          <img className=" w-full" src={image} alt="" />
        </div>

        <table className="table flex-1 h-[300px] flex ">
          {/* head */}
          <thead>
            <tr className="text- text-orange-400 font-bold">
              <th>Job Title</th>
              <th> {title}</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Job Category</td>
              <td> {category}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Salary</td>
              <td> {salary}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>PostedOn</td>
              <td>{moment(postedOn).format("YYYY-MM-DD")}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Expired In</td>
              <td>{expiredIn}</td>
            </tr>
            <tr>
              <td>No Of Vacancy</td>
              <td>{vacancyNo}</td>
            </tr>
           
            <tr>
              <td>DESCRIPTION</td>
              <td>{description}</td>
            </tr>
            <tr>
              <td>Posted BY</td>
              <td>{userName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" p-2  delete bg[#000000ad] ">
        <div className="flex justify-center items-center	">
          <Link to={`/update/${_id}`} className="text-4xl text-orange-400	">
            <FaEdit />
          </Link>
          <Link
            onClick={() => handleDelete(_id)}
            className="text-4xl px-4 text-rose-500	"
          >
            <MdDeleteForever className=" " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
