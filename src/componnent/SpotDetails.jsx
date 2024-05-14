import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./Authprovider/Authprovider";
import moment from "moment";
import Swal from "sweetalert2";

const SpotDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const details = useLoaderData();
  const { _id } = useParams();
  const detail = details.find((detail) => detail._id === _id);
  console.log(detail);

  const {
    userEmail,
    image,
    title,
    category,
    salary,
    expiredIn,
    postedOn,
    description,
  } = detail;
  const handleApplyjob = async() => {
    const postData = {
      userEmail,
      userName,
      image,
      title,
      category,
      salary,
      expiredIn,
      postedOn,
      vacancy,
      description,
      appliedBy: user?.email
    }
    if(!user) {
      navigate('/login')
    }
    else {
      const res = await axios.post('http://localhost:5000/appliedjob', postData, {withCredentials: true})
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job Applied",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
  const handleSavedJob = async() => {
    const postData = {
      userEmail,
      userName,
      image,
      title,
      category,
      salary,
      expiredIn,
      postedOn,
      vacancy,
      description,
      appliedBy: user?.email
    }
    if(!user) {
      navigate('/login')
    }
    else {
      const res = await axios.post('http://localhost:5000/savedjob', postData, {withCredentials: true})
      // console.log(res)
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job Saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
  return (
    <div className="max-w-[1280px] mx-auto ">
      <div className=" bg[#000000ad] mt-5  gap-2 border-2 border-orange-400 min-h-screen">
        <div className="flex flex-1 border-2 border-orange-400">
          <img className=" w-full" src={detail?.image} alt="" />
        </div>

        <table className="table flex-1 ">
          {/* head */}
          <thead>
            <tr className="text-4xl text-orange-400 font-bold">
              <th>Job Title</th>
              <th> {detail?.title}</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Net Salary</td>
              <td> {detail?.salary}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Category</td>
              <td> {detail?.category}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>PostedOn</td>
              <td>{moment(detail?.postedOn).format('YYYY-MM-DD')}</td>
            </tr>
            <tr>
              <td>ExpiredOn</td>
              <td>{detail?.expiredIn}</td>
            </tr>
        
            <tr>
              <td>No Of Vacancy</td>
              <td>{detail?.vacancy}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{detail?.description}</td>
            </tr>
            <tr>
              <td>Posted BY</td>
              <td>{detail?.userName}</td>
            </tr>
          </tbody>
          <div className="flex justify-center	px-4 py-2">
          <button className="btn btn-outline btn-info mx-4" onClick={handleApplyjob}>Apply to job</button>
          <button className="btn btn-outline btn-secondary" onClick={handleSavedJob}>Saved Job</button>
          
        </div>
        </table>
      </div>
    </div>
  );
};

export default SpotDetails;
