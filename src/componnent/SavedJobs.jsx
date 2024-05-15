import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";

const SavedJobs = ({ }) => {
  const { user, loadding } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-assignment-beige.vercel.app/savedjobs`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setJobs(data);
    
      });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
      {jobs && jobs.map((jb, index) => {
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
          userName,
        } = jb;
        return (
          <div key={_id} className=" bg[#000000ad] shadow-2xl mt-5 ">
            <div>
              <img className="h-52 w-full" src={image} alt="" />
            </div>
            <div className="p-5">
              <h1 className="text-4xl">{title}</h1>
              <p>
                <span className="text-gray-600	">Jobs Type</span> {category}
              </p>
              <p>
                <span className="text-gray-600	">Net</span> {salary}
              </p>
              <p>
                <span className="text-gray-600	">Posted On</span>{" "}
                {moment(postedOn).format("YYYY-MM-DD")}
              </p>
              <p>
                <span className="text-gray-600	">Expired On</span> {expiredIn}
              </p>
              <p>{description}</p>
              <p>
                <span className="text-gray-600	">PostedBy</span> {userEmail}
              </p>
              <p>
                <span className="text-gray-600	">PostedBy</span> {vacancy}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedJobs;
