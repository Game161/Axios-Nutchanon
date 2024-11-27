import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);
  
  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);
// ง่วงนอนนนอ้าาาาาาาาาาาา
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-blue-100 to-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-12">
        คอร์สเรียนของเรา
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-blue-200 hover:shadow-2xl transition">
      <div className="h-48 overflow-hidden">
        <img
          src={props.picture}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          {props.title}
        </h2>
        <p className="text-gray-600 text-sm mb-6">{props.detail}</p>
        <NavLink
          to={"/course/" + props.id}
          className="w-full bg-teal-500 text-white text-center py-3 font-medium rounded hover:bg-teal-600 transition"
        >
          ดูรายละเอียด
        </NavLink>
      </div>
    </div>
  );
};

export default Course;
