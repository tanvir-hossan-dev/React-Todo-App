import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormAdd = () => {
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameError, setNameEror] = useState("");
  const [sectorError, setSectorError] = useState("");
  const [agreeError, setAgreeError] = useState("");

  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameEror("Enter your Name");
      if (sector) {
        setSectorError("");
      }
      if (agree) {
        setAgreeError("");
      }
    }
    if (!sector) {
      setSectorError("Enter your Sector");
      if (name) {
        setNameEror("");
      }
      if (agree) {
        setAgreeError("");
      }
    }
    if (!agree) {
      setAgreeError("You need to agree the terms and conditions");
      console.log(sector);
      if (name) {
        setNameEror("");
      }
      if (sector) {
        setSectorError("");
      }
    }

    if (name && sector && agree) {
      setNameEror("");
      setSectorError("");
      setAgreeError("");
      setName("");
      setSector("");
      setAgree(!agree);
      setSuccess("Created Successfully");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px] m-auto  p-4 bg-gray-300 rounded-md">
        <h1 className="mt-4 text-[26px] font-semibold text-center">ADD FORM</h1>
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
            <label className="cursor-pointer flex">
              <input
                type="checkbox"
                onChange={() => setAgree(!agree)}
                checked={agree}
                className="checkbox checkbox-primary"
                value={agree}
              />
              <span className="ml-4 label-text">Are you agree with terms and conditoin?</span>
            </label>
          </div>
          {agreeError && <p className="mt-2 text-red-600">{agreeError}</p>}
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

export default FormAdd;
