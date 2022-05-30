import React from 'react';
import joe from '../../assets/joe.png';
import ade from '../../assets/ade.png';
import emma from '../../assets/emma.png';
import adu from '../../assets/adu.png';
import chisom from '../../assets/chisom.png';
import chidi from '../../assets/chidi.png';
import { useState } from 'react';
// import axios from 'axios';

function Stories() {
  const [show, setShow] = useState(false);
  const [pix, setPix] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');

  //   let { vendor, customer } = title;

  const handleShow = (e) => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { pix, fname, lname, comment, title };
    // console.log(post);
    fetch('https://airy-verdant-shoemaker.glitch.me/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(() => {
      console.log('New Post Added');
    });
  };

  return (
    <div className="container mx-auto lg:px-[64px] px-8 lg:my-24">
      <div className="container flex justify-center mx-auto mb-24 mt-12">
        <button
          className="text-white bg-[#FF5C00] px-6 py-3 rounded-md  hover:cursor-pointer uppercase"
          onClick={() => handleShow()}
        >
          Share Story
        </button>
      </div>
      {/* Displays Pop up */}
      {show ? (
        <div className="w-screen top-0 left-0 fixed bg-slate-50 lg:h-screen z-50 flex justify-center items-center ">
          <div className="lg:h-[550px] lg:w-[527px] bg-white rounded-xl drop-shadow-lg text-center lg:px-12 px-8">
            <h2 className="lg:mt-[37px] mt-6 font-bold lg:text-3xl text-2xl">
              Share your amazing story!
            </h2>

            {/* Form Section */}

            <form className="lg:mt-[43px] mt-6" onSubmit={handleSubmit}>
              {/* Form Title */}
              <div className="flex flex-col justify-start text-left space-y-2">
                <label htmlFor="" className="text-xs">
                  Upload your Picture{' '}
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                  required
                  value={pix}
                  onChange={(e) => setPix(e.target.value)}
                />
              </div>
              {/* Names Section */}
              <div className="flex space-x-3 justify-between  my-8">
                {/* First Name */}
                <div className="flex flex-col flex-1 justify-start text-left space-y-2">
                  <label
                    for="large-input"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-[#FF5C00] focus:border-[#FF5C00] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF5C00] dark:focus:border-[#FF5C00]"
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col flex-1 justify-start text-left space-y-2">
                  <label
                    for="large-input"
                    className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="flex-1 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-[#FF5C00] focus:border-[#FF5C00] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF5C00] dark:focus:border-[#FF5C00]"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>

              {/* TextArea */}
              <div className="text-left space-y-2">
                <label
                  for="message"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Share Your Story
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#FF5C00] focus:border-[#FF5C00] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF5C00] dark:focus:border-[#FF5C00]"
                  placeholder="Leave a comment..."
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              {/* Checklist */}

              <div className="flex lg:justify-between py-6 lg:flex-row flex-col space-y-4 justify-center text-center">
                <div className="flex lg:justify-start text-center lg:text-left">
                  <p>What did you interact with Vasiti as?</p>
                </div>
                <div className="flex items-center space-x-2 ">
                  {/* Checkbox */}
                  <div className="flex justify-center flex-row">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="Customer"
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault1"
                        >
                          Customer
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          //   checked
                          value="vendor"
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault2"
                        >
                          Vendor
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Checkbox */}
                </div>
              </div>
              {/* Submit Button */}
              <div className="container flex justify-end mx-auto mb-24">
                <button className="text-white bg-[#FF5C00] px-6 py-4 rounded-md  hover:cursor-pointer uppercase">
                  Share Your Story
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ''
      )}
      <section className="flex flex-col lg:grid-cols-3 lg:grid lg:gap-12 container lg:items-center px-8 lg:px-24 space-y-24 lg:space-y-0 my-16 mx-auto">
        {/* First Content */}
        <div className="">
          <img src={joe} alt="" className=" w-[200px] h-[200px]" />
          <h5 className="font-bold text-2xl">Joseph Ike</h5>
          <div className="uppercase space-x-4 flex my-4 items-center font-bold">
            <p>In Ikeja</p>
            <p className="bg-blue-100 p-2">customer</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            minima, officiis vel quasi, blanditiis soluta nulla eveniet libero
            nemo est esse aliquid, rerum delectus dolore laboriosam molestias
            assumenda quisquam autem veritatis voluptatem eaque dicta?
          </p>
        </div>

        {/* Second Content */}
        <div className="">
          <img src={ade} alt="" className=" w-[200px] h-[200px]" />
          <h5 className="font-bold text-2xl">Adetola Fashina</h5>
          <div className="uppercase space-x-4 flex my-4 items-center font-bold">
            <p>Ibadan</p>
            <p className="bg-blue-100 p-2">customer</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            minima, officiis vel quasi, blanditiis soluta nulla eveniet libero
            nemo est esse aliquid, rerum delectus dolore laboriosam molestias
            assumenda quisquam autem veritatis voluptatem eaque dicta?
          </p>
        </div>

        {/* Third Content */}
        <div className="">
          <img src={emma} alt="" className=" w-[200px] h-[200px]" />
          <h5 className="font-bold text-2xl">Emmanuel Fayemi</h5>
          <div className="uppercase space-x-4 flex my-4 items-center font-bold">
            <p>In Akoka</p>
            <p className="bg-blue-100 p-2">customer</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            minima, officiis vel quasi, blanditiis soluta nulla eveniet libero
            nemo est esse aliquid, rerum delectus dolore laboriosam molestias
            assumenda quisquam autem veritatis voluptatem eaque dicta?
          </p>
        </div>

        {/* Forth Content */}
        <div className="">
          <img src={chisom} alt="" className="w-[200px] h-[200px]" />
          <h5 className="font-bold text-2xl">Joseph Ike</h5>
          <div className="uppercase space-x-4 flex my-4 items-center font-bold">
            <p>In Ikeja</p>
            <p className="bg-green-100 p-2 text-[#049A01]">vendor</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            minima, officiis vel quasi, blanditiis soluta nulla eveniet libero
            nemo est esse aliquid, rerum delectus dolore laboriosam molestias
            assumenda quisquam autem veritatis voluptatem eaque dicta?
          </p>
        </div>

        {/* Fifth Content */}
        <div className="">
          <img src={adu} alt="" className=" w-[200px] h-[200px]" />
          <h5 className="font-bold text-2xl">Adetola Fashina</h5>
          <div className="uppercase space-x-4 flex my-4 items-center font-bold">
            <p>Ibadan</p>
            <p className="bg-green-100 p-2 text-[#049A01]">vendor</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            minima, officiis vel quasi, blanditiis soluta nulla eveniet libero
            nemo est esse aliquid, rerum delectus dolore laboriosam molestias
            assumenda quisquam autem veritatis voluptatem eaque dicta?
          </p>
        </div>

        {/* Sixth Content */}
        <div className="">
          <img src={chidi} alt="" className=" w-[200px] h-[200px]" />
          <h5 className="font-bold text-2xl">Emmanuel Fayemi</h5>
          <div className="uppercase space-x-4 flex my-4 items-center font-bold">
            <p>In Akoka</p>
            <p className="bg-green-100 p-2 text-[#049A01]">vendor</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            minima, officiis vel quasi, blanditiis soluta nulla eveniet libero
            nemo est esse aliquid, rerum delectus dolore laboriosam molestias
            assumenda quisquam autem veritatis voluptatem eaque dicta?
          </p>
        </div>
      </section>
    </div>
  );
}

export default Stories;
