import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FindService.css';

const ContentFindService = () => {
  const [formData, setFormData] = useState({
    date: '',
    income: null,
    catagory: [],
    dtype: '',
    dpercentage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckBox = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;

    if (checked) {
      setFormData({ ...formData, catagory: [...formData.catagory, value] });
    } else {
      setFormData({
        ...formData,
        catagory: formData.catagory.filter((c) => c !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/search-results?catagory=${formData.catagory}&dob=${formData.date}&income=${formData.income}&dprecentage=${formData.dpercentage}`
    );
  };

  return (
    <div className='container my-12 mx-auto w-[700px] shadow-lg rounded custom-border'>
      <div className=' px-8 py-4 rounded-t'>
        <h3 className='font-semibold text-2xl'>
          Let us help you find relevant scheme and services for you!
        </h3>
      </div>
      <form className='space-y-8 px-8 py-4' onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-4'>
          <div>
            <label className='font-medium'>Date of birth</label>
            <span className='float-right font-normal text-gray-600'>
              (Required)
            </span>
          </div>
          <input
            className='px-4 py-2 rounded border-2 outline-none transition hover:border-[#02B86B] focus:border-[#02B86B]'
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <div>
            <label className='font-medium'>Annual family income</label>
            <span className='float-right font-normal text-gray-600'>
              (Optional)
            </span>
          </div>
          <input
            className='px-4 py-2 border-2 rounded outline-none transition hover:border-[#02B86B] focus:border-[#02B86B]'
            type='number'
            min={0}
            name='income'
            value={formData.income}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <div>
            <label className='font-medium'>
              Any specific category of scheme and services, you are interested
              in
            </label>
            <span className='float-right font-normal text-gray-600'>
              (Optional)
            </span>
          </div>
          <div className='flex flex-wrap'>
            <div className='grow'>
              <input
                type='checkbox'
                className='hidden peer'
                id='educational'
                name='catagory'
                onChange={handleCheckBox}
                value='1'
              />
              <label
                htmlFor='educational'
                className='block text-center font-medium mb-2 mr-1 py-4 px-6 border-2 rounded transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02b86b] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Educational
              </label>
            </div>
            <div className='grow'>
              <input
                type='checkbox'
                className='hidden peer'
                id='financial'
                name='catagory'
                onChange={handleCheckBox}
                value='2'
              />
              <label
                htmlFor='financial'
                className='block text-center font-medium mb-2 mr-1 py-4 px-6 border-2 rounded transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Financial
              </label>
            </div>
            <div className='grow'>
              <input
                type='checkbox'
                className='hidden peer'
                id='health'
                name='catagory'
                onChange={handleCheckBox}
                value='3'
              />
              <label
                htmlFor='health'
                className='block text-center font-medium mb-2 mr-1 py-4 px-6 border-2 rounded transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Health
              </label>
            </div>
            <div className='grow'>
              <input
                type='checkbox'
                className='hidden peer'
                id='travel'
                name='catagory'
                onChange={handleCheckBox}
                value='4'
              />
              <label
                htmlFor='travel'
                className='block text-center font-medium mb-2 mr-1 py-4 px-6 border-2 rounded transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Travel
              </label>
            </div>
            <div className='grow'>
              <input
                type='checkbox'
                className='hidden peer'
                id='skills'
                name='catagory'
                onChange={handleCheckBox}
                value='5'
              />
              <label
                htmlFor='skills'
                className='block text-center font-medium mb-2 mr-1 py-4 px-6 border-2 rounded transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Skills
              </label>
            </div>
          </div>
        </div>

        {/* <div className='relative'>
          <div className='notification w-56 p-4 shadow-md'>
            Have you got yourself or the concerned person's screening &
            diagnosis done? Check the steps and nearest clinics.
          </div> */}
        <div className='flex flex-col space-y-4'>
          <div>
            <label className='font-medium'>Type of disability</label>
            <span className='float-right font-normal text-gray-600'>
              (Optional)
            </span>
          </div>
          <div className='flex flex-wrap'>
            <div className='grow'>
              <input
                type='radio'
                className='hidden peer'
                id='physical'
                name='dtype'
                value='1'
              />
              <label
                htmlFor='physical'
                className='block text-center font-medium mb-2 mr-1 p-4 border-2 rounded-full transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Physical Disability
              </label>
            </div>
            <div className='grow'>
              <input
                type='radio'
                className='hidden peer'
                id='intellectual'
                name='dtype'
                value='2'
              />
              <label
                htmlFor='intellectual'
                className='block text-center font-medium mb-2 mr-1 p-4 border-2 rounded-full transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Intellectual Disability
              </label>
            </div>
            <div className='grow'>
              <input
                type='radio'
                className='hidden peer'
                id='mental'
                name='dtype'
                value='3'
              />
              <label
                htmlFor='mental'
                className='block text-center font-medium mb-2 mr-1 p-4 border-2 rounded-full transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Mental Disability
              </label>
            </div>
            <div className='grow'>
              <input
                type='radio'
                className='hidden peer'
                id='neuro'
                name='dtype'
                value='4'
              />
              <label
                htmlFor='neuro'
                className='block text-center font-medium mb-2 mr-1 p-4 border-2 rounded-full transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Neurological Disability
              </label>
            </div>
            <div className='grow'>
              <input
                type='radio'
                className='hidden peer'
                id='blood'
                name='dtype'
                value='5'
              />
              <label
                htmlFor='blood'
                className='block text-center font-medium mb-2 mr-1 p-4 border-2 rounded-full transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Blood Disorder
              </label>
            </div>
            <div className='grow'>
              <input
                type='radio'
                className='hidden peer'
                id='multiple'
                name='dtype'
                value='5'
              />
              <label
                htmlFor='multiple'
                className='block text-center font-medium mb-2 mr-1 p-4 border-2 rounded-full transition hover:border-[#02B86B] hover:text-[#02B86B] peer-checked:bg-[#02B86B] peer-checked:text-white peer-checked:border-[#02B86B]'
              >
                Multiple Disability
              </label>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className='flex flex-col space-y-4'>
          <div>
            <label className='font-medium'>Disability percentage</label>
            <span className='float-right font-normal text-gray-600'>
              (Optional)
            </span>
          </div>
          <input
            className='px-4 py-2 border-2 rounded outline-none transition hover:border-[#02B86B] focus:border-[#02B86B]'
            type='number'
            min={0}
            max={100}
            step={5}
            name='dpercentage'
            value={formData.dpercentage}
            onChange={handleChange}
          />
        </div>

        <div className='flex justify-around items-center'>
          <button
            className='h-12 w-32 bg-[#02B86B] text-white px-4 py-2 rounded custom-submit'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContentFindService;
