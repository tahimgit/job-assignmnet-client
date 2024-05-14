import moment from "moment";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";

const SpotCard = ({ spotData }) => {
  // console.log(spotData);
  const navigate = useNavigate();
  const { user, loadding } = useContext(AuthContext);
  const {
    _id,
    userEmail,
    image,
    title,
    category,
    salary,
    expiredIn,
    postedOn,
    description,
    vacancy,
    userName
  } = spotData;

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
    <div className="">
      <div className=" bg[#000000ad] shadow-2xl mt-5 ">
        <div>
          <img className="h-52 w-full" src={image} alt="" />
        </div>
        <div className="p-5">
          <h1 className="text-4xl">{title}</h1>
          {/* <p><span className='text-gray-600	'>Jobs Type</span>  {category}</p>
            <p><span className='text-gray-600	'>Net</span>  {salary}</p>
            <p><span className='text-gray-600	'>Posted On</span>  {moment(postedOn).format('YYYY-MM-DD')}</p>
            <p><span className='text-gray-600	'>Expired On</span> {expiredIn}</p>
            <p>{description}</p>
            <p><span className='text-gray-600	'>PostedBy</span> {userEmail}</p> */}
        </div>
        <div className="flex justify-between	px-4 py-2">
          <button className="btn btn-outline btn-info" onClick={handleApplyjob}>Apply to job</button>
          <button className="btn btn-outline btn-secondary" onClick={handleSavedJob}>Saved Job</button>
          <Link className="btn btn-outline btn-primary" to={`/details/${_id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
