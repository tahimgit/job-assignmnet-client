import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";
const JobTypeCard = () => {
  const { id } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setCategoryList(data);
      });
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
      {categoryList.length === 0 && <h1 className="mt-10 text-center	 text-2xl">No Jobs Available with this category</h1>}
      {categoryList.map((spot) => (
        <SpotCard key={spot._id} spotData={spot}></SpotCard>
      ))}
    </div>
  );
};

export default JobTypeCard;
