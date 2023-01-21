import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editCard } from "../../Redux/features/card/card";

const FormEdit = () => {
  const { card } = useSelector((state) => state.card);
  const { id } = useParams();
  const currentCard = card?.find((item) => item._id === id);
  const [name, setName] = useState(currentCard.name || "");
  const [sector, setSector] = useState(currentCard.sector || "");

  const [nameError, setNameEror] = useState("");
  const [sectorError, setSectorError] = useState("");

  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameEror("Enter your Name");
      if (sector) {
        setSectorError("");
      }
    }
    if (!sector) {
      setSectorError("Enter your Sector");
      if (name) {
        setNameEror("");
      }
    }

    if (name && sector) {
      setNameEror("");
      setSectorError("");

      setSuccess("Updated Successfully");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
      dispatch(editCard({ name, sector, _id: currentCard._id }));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px] m-auto  p-4 bg-gray-300 rounded-md">
        <h1 className="mt-4 text-[26px] font-semibold text-center">EDIT FORM</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full py-[10px]">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full input-info"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          {nameError && <p className="text-red-600">{nameError}</p>}
          <div className="w-full py-[10px]">
            <select className="select select-info w-full" onChange={(e) => setSector(e.target.value)} value={sector}>
              <option defaultValue="Select Role">Select Sector</option>
              <option>Front-end Development</option>
              <option>Back-end Development</option>
              <option>Full-stack Development</option>
              <option>IOS Development</option>
              <option>Grapich Desiging</option>
              <option>Web Designing</option>
            </select>
          </div>
          {sectorError && <p className="mb-2 text-red-600">{sectorError}</p>}

          <div>
            <button type="submit" className="btn btn-primary w-full py-[10px] my-[15px]">
              Submit
            </button>
          </div>
        </form>
        <p>
          {" "}
          <Link className="underline" to="/result">
            Go to Result Page
          </Link>{" "}
        </p>
        {success && (
          <div className="py-2 my-4 alert alert-success shadow-lg">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{success}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormEdit;
