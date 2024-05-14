import { Link, useLoaderData } from "react-router-dom";

import SpotCard from "./SpotCard";
import { useEffect, useState } from "react";
import GetInTouchSection from "./GetInTouch";
import AutoCarousel from "./Caurosel";
import JobsType from "./JobsType";

const Home = () => {
  const spotdata = useLoaderData();
  const [jobsTypes, setJobsTypes] = useState([
    {
        id: "remote",
        name: "REMOTE",
        image: "https://info.recruitics.com/hubfs/BEST_PRACTICES_FOR_ADVERTISING_REMOTE_JOB_POSTINGS.jpg"
    },
    {
        id: "onsite",
        name: "ONSITE",
        image: "https://www.payscale.com/wp-content/uploads/2023/08/hybrid-job-scaled.jpg"
    },
    {
        id: "hybrid",
        name: "HYBRID",
        image: "https://www.theladders.com/wp-content/uploads/coder_190517-800x450.jpg"
    },
    {
        id: "contract",
        name: "CONTRACTUAL",
        image: "https://res.cloudinary.com/highereducation/images/f_auto,q_auto/g_face,c_fill,fl_lossy,q_auto:best,w_448,h_382/v1662131318/ComputerScience.org/GettyImages-1180183927_73387d16/GettyImages-1180183927_73387d16.jpg?_i=AA"
    },
    {
        id: "parttime",
        name: "PART-TIME",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_a_software_engineer.jpg"
    }
  ]);
  const [con, setCon] = useState(spotdata);

  console.log(con);
  return (
    <div className="overflow-x-hidden	">
      <div>
        <AutoCarousel />
      </div>
      <div>
        <h1 className="text-4xl text-center my-5 mt-10">
          Select Your Best Preferrence Jobs Type
        </h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4 my-6">
          {jobsTypes.map((coun) => (
            <JobsType key={coun._id} counList={coun} />
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl text-center my-5 mt-10">
          Most Trending Jobs For You
        </h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
        {con.map((spot) => (
          <SpotCard key={spot._id} spotData={spot}></SpotCard>
        ))}
      </div>
      <div className="px-12">
        <GetInTouchSection />
      </div>
    </div>
  );
};

export default Home;
