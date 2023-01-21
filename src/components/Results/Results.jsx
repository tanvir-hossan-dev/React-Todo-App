import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { deleteCard } from "../../Redux/features/card/card";
import { useState } from "react";

const Results = () => {
  const { card } = useSelector((state) => state.card);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
  };

  return (
    <div className="w-[1200px] m-auto p-6 rounded-md bg-gray-300 mt-4">
      <div className="flex justify-between">
        <div className="form-control w-[400px]">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <h1 className="text-[26px] font-semibold uppercase text-center">Results</h1>
      </div>
      {card?.length > 0 ? (
        <div className="mt-4 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-4 md:gap-3 ">
          {card
            ?.filter(
              (item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.sector.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((item) => (
              <div key={item._id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Name: {item.name}</h2>
                  <p>Sector: {item.sector}</p>
                  <div className="m-0 p-0 flex justify-end">
                    <Link to={`/edit/${item._id}`} className="flex-grow-0 cursor-pointer">
                      <AiTwotoneEdit />
                    </Link>
                    <p onClick={() => handleDelete(item._id)} className="flex-grow-0 ml-4 text-red-600 cursor-pointer">
                      <AiFillDelete />
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="my-8 alert w-full alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>No details here</span>
          </div>
        </div>
      )}

      <p className="py-4">
        {" "}
        <Link className="underline" to="/">
          Go to Add Form Page
        </Link>{" "}
      </p>
    </div>
  );
};

export default Results;
