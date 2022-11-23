import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FindService.css";

const ContentFindService = () => {
  const [formData, setFormData] = useState({
    date: "",
    income: 0,
    catagory: "0",
    dtype: "",
    dpercentage: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results?catagory=${formData.catagory}&dob=${formData.date}&income=${formData.income}&dprecentage=${formData.dpercentage}`);
  };

  return (
    <div className="container my-12 shadow-lg w-[800px] rounded m-auto custom-border">
      <div className=" px-8 py-4 rounded-t">
        <h3 className="font-semibold text-xl">
          Let us help you find relevant scheme and services for you!
        </h3>
      </div>
      <form className="space-y-4 px-8 py-4" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">Date of Birth?</label>
          <input
            className="px-4 py-2 border rounded"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">Annual Family Income (Optional)</label>
          <input
            className="px-4 py-2 border rounded"
            type="number"
            min={0}
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">
            Any specific category of scheme and services, you are interested in?
            (Optional)
          </label>
          <select
            name="catagory"
            className="px-4 py-2 border rounded"
            value={formData.catagory}
            onChange={handleChange}
          >
            <option value="0">All</option>
            <option value="1">Educational</option>
            <option value="2">Health</option>
            <option value="3">Financial</option>
            <option value="4">Travel</option>
            <option value="5">Skill & employment</option>
          </select>
        </div>
        <div className="relative">
          {" "}
          {/* container */}
          <div className="flex flex-col space-y-2">
            {" "}
            {/* label - input */}
            <div className="notification w-56 p-4 shadow-md">
              Have you got yourself or the concerned person’s screening &
              diagnosis done? Check the steps and nearest clinics.
            </div>
            <label className="font-medium">Type of disability?</label>
            <select
              name="dtype"
              className="px-4 py-2 border rounded"
              value={formData.dtype}
              onChange={handleChange}
            >
              <option value="">Select a disability</option>
              <option value="Physical disability">Physical disability</option>
              <option value="Intellectual disability">
                Intellectual disability
              </option>
              <option value="Mental disability">Mental disability</option>
              <option value="Neurological">Neurological</option>
              <option value="Blood disorder">Blood disorder</option>
              <option value="Multiple disability">Multiple disability</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">
            Disability percentage % (Optional)
          </label>
          <input
            className="px-4 py-2 border rounded"
            type="number"
            min={0}
            max={100}
            name="dpercentage"
            value={formData.dpercentage}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-around items-center">
          <button
            className="w-28 border  hover:bg-gray-100 px-4 py-2 rounded-md custom-reset"
            type="reset"
          >
            Reset
          </button>
          <button
            className="w-28 bg-teal-800 text-white px-4 py-2 rounded custom-submit"
            type="submit"
          >
            Search
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContentFindService;
