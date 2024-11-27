import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        ตารางการเรียนรู้
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((chapter) => (
          <ChapterCard key={chapter.id} {...chapter} />
        ))}
      </div>
    </div>
  );
};

const ChapterCard = (props) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
          เรื่อง: {props.ch_title}
        </h2>
        <div className="relative pb-[56.25%] h-0 mb-4">
          <iframe
            src={"https://www.youtube.com/embed/" + props.ch_url}
            title={props.ch_title}
            className="absolute top-0 left-0 w-full h-full rounded"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-gray-700 space-y-2">
          <p>
            <span className="font-bold">View:</span> {props.ch_view}
          </p>
          <p>
            <span className="font-bold">Time:</span> {props.ch_timetotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
