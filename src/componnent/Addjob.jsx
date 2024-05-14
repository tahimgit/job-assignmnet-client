import React, { useContext, useState } from "react";
import { AuthContext } from "./Authprovider/Authprovider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Datepicker from "react-tailwindcss-datepicker";
const Addjob = () => {
  const { user, loadding } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setSelectedDate(newValue);
  };
  if (loadding) {
    return (
      <div className="flex justify-center items-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.url.value;
    const category = form.category.value;
    const title = form.title.value;
    const vacancyNo = form.vacancyNo.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const userName = user.displayName;
    const userEmail = user.email;
    const newData = {
      userEmail,
      image,
      title,
      category,
      expiredIn: selectedDate.startDate,
      postedOn: new Date(),
      description,
      salary,
      userEmail,
      userName,
      vacancyNo,
    };

    console.log(newData);

    fetch("http://localhost:5000/addJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Turists spot addeded successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }).catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="bg[#000000ad] shadow-2xl">
      <div className="max-w-[1280px] mx-auto content-center min-h-scree">
        <form
          onSubmit={handleAdd}
          className="lg:w-4/5 mx-auto bg-black shadow-sm shadow-gray-700 px-6  py-10 mb-10"
          action=""
        >
          <h1 className="text-5xl text-center text-white font-bold mb-4">
            Add Your Job
          </h1>
          <hr className=" border-gray-500 border-2" />

          <div className="justify-center grid grid-cols-2 gap-4 mt-32">
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="url"
              name="url"
              placeholder="Photo URL"
              id=""
            />
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="text"
              name="title"
              placeholder="Job Title"
              id=""
            />
            <select
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              name="category"
            >
              <option selected value="remote">
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
              id=""
            />
           
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]"
              type="number"
              name="vacancyNo"
              placeholder="No of vacancy"
              id=""
            />
            {/* <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="email" name="email" placeholder='Email' id="" /> */}
            {/* <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="userName" placeholder='User Name' id="" /> */}
            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700] col-span-2"
              type="text"
              name="description"
              placeholder="Short Description"
              id=""
            />
            <input
              className="w-full py-1 rounded px-2 cursor-pointer bg-orange-400 text-white font-bold col-span-2 mt-8"
              type="submit"
              name="submit"
              value="Add Job"
              placeholder=""
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjob;
