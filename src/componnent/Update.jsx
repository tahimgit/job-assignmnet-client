import React, { useContext, useState } from "react";
import { AuthContext } from "./Authprovider/Authprovider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Datepicker from "react-tailwindcss-datepicker";
const Update = () => {
  const { user, loadding } = useContext(AuthContext);
  const updateSpot = useLoaderData();
 

  const {
    _id,
    userEmail,
    title,
    category,
    image,
    description,
    salary,
    vacancyNo,
    expiredIn
  } = updateSpot;
  const [selectedDate, setSelectedDate] = useState({startDate: expiredIn, endDate:expiredIn});

  const handleDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setSelectedDate(newValue);
  };
  

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.url.value;
    const category = form.category.value;
    const title = form.title.value;
    const vacancyNo = form.vacancyNo.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const userName = user.displayName;
    const userEmail = user.email;
    // const email = user.email;
    const updateDate = {
        userEmail,
        image:photo,
        title,
        category,
        expiredIn: selectedDate.startDate,
        description,
        salary,
        vacancyNo,
    };

    console.log(updateDate);

    fetch(`http://localhost:5000/job/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updateDate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Turists spot Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-black">
      <div className="max-w-[1280px] mx-auto content-center min-h-scree">
        <form
          onSubmit={handleUpdate}
          className="lg:w-4/5 mx-auto bg-black shadow-sm shadow-gray-700 px-6  py-10 mb-10"
          action=""
        >
          <h1 className="text-5xl text-center text-white font-bold mb-4">
            Update Your Job
          </h1>
          <h1 className="text-2xl text-[#FFC700]">Job Posted From '{userEmail}'</h1>
          <hr className=" border-gray-500 border-2" />

          <div className="justify-center grid grid-cols-2 gap-4 mt-32">
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="url"
              defaultValue={image}
              name="url"
              placeholder="Photo URL"
              id=""
            />
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="text"
              defaultValue={title}
              name="title"
              placeholder="Job Title"
              id=""
            />
            
            
            <select
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              name="category"
              defaultValue={category || 'remote'}
            >
              <option  value="remote">
                Remote
              </option>
              <option value="onsite">OnSite</option>
              <option value="hybrid">Hybrid</option>
              <option value="contract">Contract</option>
              <option value="parttime">Part-time</option>
            </select>
           
            <Datepicker
              showShortcuts={true}
              asSingle={true}
              useRange={false}
              numberOfMonths={1}
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              value={selectedDate}
              onChange={handleDateChange}
              name="expiredOn"
              placeholder="Expired Date"
            />
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="text"
              name="salary"
              placeholder="Salary"
              defaultValue={salary}
              id=""
            />
             <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="number"
              defaultValue={vacancyNo}
              name="vacancyNo"
              placeholder="No of vacancy"
              id=""
            />
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700] col-span-2"
              type="text"
              defaultValue={description}
              name="description"
              placeholder=""
              id=""
            />
            <input
              className="w-full py-1 rounded px-2 cursor-pointer bg-[#f8731a] text-white font-bold col-span-2 mt-8"
              type="submit"
              name="submit"
              value="Update Job"
              placeholder=""
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
