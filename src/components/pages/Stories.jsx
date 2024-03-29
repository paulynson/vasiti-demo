import React from "react";
import sus from "../../assets/success.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import zigzag from "../../assets/zigzag.svg";

function Stories() {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [story, setStory] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pix, setPix] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  // Handles popup menu
  const handleShow = (e) => {
    setShow((prevShow) => !prevShow);
  };

  // handles shared post button

  // Handles close popup menu
  const handleClosePost = () => {
    setShow(false);
    clearInputFields()
  };

  // clear input
  const clearInputFields = () => {
    setFname("");
    setLname("");
    setComment("");
    setTitle("");
  };

  // Handles close popup menu
  const handleClose = () => {
    setStory(false);
    setShow(false);
     clearInputFields()
    navigate("/stories");
  };

  // handles radio button
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  //   Handle pix upload
  function handleUpload(e) {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.addEventListener("load", () => {
        setPix(reader.result);
      });
  
      reader.readAsDataURL(file);
    }
  }

  // Handles Fetch Data
  const handlesFetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://airy-verdant-shoemaker.glitch.me/posts`
    );
    setPosts(res.data);
    // console.log(res.data);
    setLoading(false);
  };

  // Handles Fetch Data
  useEffect(() => {
    handlesFetchData();
  }, []);

  // handles Post request
  const handleSubmit = (e) => {
    e.preventDefault();
    let postData = { pix, fname, lname, comment, title };
    setIsPending(true);
    fetch("https://airy-verdant-shoemaker.glitch.me/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    }).then(() => {
      setIsPending(false);
      setStory(!story);
      handlesFetchData();
    });
  };



  return (
    <div className="container mx-auto lg:px-[64px] px-8 lg:my-24">
      <div className="container flex justify-center mx-auto mb-24 mt-12">
        <button
          className="text-[#FF5C00] hover:text-white hover:bg-[#FF5C00] px-6 py-3 rounded-md  hover:cursor-pointer uppercase border-[#FF5C00] border-2"
          onClick={() => handleShow()}
        >
          Add Story
        </button>
      </div>
      {/* ---------------------------------Displays Pop up----------------------------------- */}
      <>
        {show ? (
          <div className="w-screen top-0 left-0 fixed bg-slate-50 lg:h-screen h-screen z-40 flex justify-center items-center ">
            <div className="lg:max-h-[600px] lg:max-w-[527px] bg-white rounded-xl drop-shadow-lg text-center lg:px-12 px-8 position-relative">
              <p
                className="fixed -right-10 top-4 -translate-y-2 -translate-x-12 h-8 w-8 flex justify-center items-center hover:bg-red-400 hover:text-white p-2 bg-slate-200 z-10 rounded-full cursor-pointer hover:rotate-180 transition-all"
                onClick={handleClosePost}
              >
                X
              </p>
              <h2 className="lg:mt-[24px] mt-12 font-bold lg:text-3xl text-2xl">
                Share your amazing story!
              </h2>

              {/* Form Section */}

              <form className="py-6" onSubmit={handleSubmit}>
                {/* Form Title */}
                <div className="flex flex-col justify-start text-left space-y-2">
                  <label className="text-xs">Upload your Picture </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                    required
                    accept="image/*,capture=camera"
                    // capture="”camera"
                    onChange={handleUpload}
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

                <div className="flex lg:justify-between py-6 lg:flex-row lg:flex  flex-wrap lg:flex-wrap lg:items-center items-center justify-center text-center">
                  <div className="flex lg:justify-start text-center lg:text-left">
                    <p>What did you interact with Vasiti as?</p>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    {/* Checkbox */}
                    <div className="flex justify-center flex-row">
                      <div className="flex justify-center flex-row space-x-4">
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer"
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
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer"
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
                  {!isPending && (
                    <button className="text-white bg-[#FF5C00] px-6 py-4 rounded-md  hover:cursor-pointer uppercase">
                      Share Your Story
                    </button>
                  )}
                  {isPending && (
                    <button
                      className="text-white bg-[#FF5C00] px-6 py-4 space-x-3 gap-x-2 items-center  justify-center rounded-md  uppercase flex position-relative"
                      disabled
                    >
                      <img src={zigzag} alt="zigzag" />
                      Sharing
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </>

      {/* Shared Message Pop up */}
      {story ? (
        <div className="w-screen top-0 left-0 fixed bg-slate-50 lg:h-screen h-screen z-40 flex justify-center items-center ">
          <div className="lg:max-h-[550px] lg:max-w-[527px] bg-white rounded-xl drop-shadow-lg text-center lg:px-12 px-8">
            <div className="mt-28 w-[155px] bg-red-200 h-[155px] mx-auto rounded-full flex justify-center items-center space-y-8">
              <img src={sus} alt="success" />
            </div>
            <article className="my-8 text-center">
              <h2 className="text-black font-bold text-2xl my-4 px-5 text-center">
                Thank you for sharing your story!
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae neque expedita est unde perferendis, vero omnis, nemo
                atque{" "}
              </p>
            </article>
            <div className="my-16">
              <button
                className="bg-[#FF5C00] rounded-lg text-white py-4 px-14 cursor-pointer
"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Loader */}
      <div className="my-6">{loading && <Loader />}</div>

      <section className="lg:grid grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-4 grid-cols-1 gap-4 my-6 text-left flex-start">
        {/* Fetching Stories from the Server */}
        {posts
          ?.slice(0)
          .reverse()
          .map((post) => (
            <div className="bg-white rounded-lg p-4 items-start content-start min-w-full">
              <img
                src={post.pix}
                alt={post.fname}
                className="w-[100px] h-[100px] rounded-full self-start inline-block"
              />
              <h5 className="font-bold text-xl">
                {post.fname} {post.lname}
              </h5>
              <div className="uppercase space-x-4 flex my-4 items-center font-bold">
                {/* <p>{}</p> */}
                <p
                  className={
                    post.title === "vendor"
                      ? "bg-green-100 p-2 text-[#049A01] text-sm"
                      : "bg-blue-100 p-2 text-sm"
                  }
                >
                  {post.title}
                </p>
              </div>
              <p className="text-gray-600 text-sm my-4">{post.comment}</p>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Stories;
