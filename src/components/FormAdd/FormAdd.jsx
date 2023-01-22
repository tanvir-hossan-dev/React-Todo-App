import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { addCard } from "../../Redux/features/card/card";

const FormAdd = () => {
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameError, setNameEror] = useState("");
  const [sectorError, setSectorError] = useState("");
  const [agreeError, setAgreeError] = useState("");

  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

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
      dispatch(addCard({ name, sector, agree, _id: uniqid() }));
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
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats{" "}
              </option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building
              </option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion
              </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners{" "}
              </option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting
              </option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding
              </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
              <option>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing
              </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
              <option>Other</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
              <option>Service</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
              <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
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
