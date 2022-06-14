import React, { useState } from "react";

function Footer() {
  const [moreOption, setMoreOption] = useState(false);

  return (
    <div className="">
      <footer>
        <section className="mt-12 text-white py-8 md:py-12 bg-[#25201D] p-8">
          <section className="container ">
            <section className="flex flex-wrap justify-center w-full  relative">
              <div className="bg-no-repeat bg-contain bg-center  w-full py-52 hidden sm:w-1/2 sm:inline-block md:-mt-20 laglag"></div>
              <div className="w-full py-4 sm:w-1/2 md:py-8 lg:pl-8 lg:w-1/3">
                <div className="text-2xl lg:text-3xl font-black">
                  Be a member <br /> of our community 🎉
                </div>
                <div className="text-gray-100 text-sm leading-relaxed py-4 md:py-8">
                  We’d make sure you’re always the first to know what’s
                  happening at Vasiti.
                </div>
                <form id="vasiti-newsletter-form">
                  <section className="flex items-center text-sm rounded p-1 bg-[#ffffff33]">
                    <input
                      id="vasiti-newsletter-input"
                      placeholder="enter your email address"
                      className="bg-transparent w-full h-full text-white rounded px-4 py-2 mr-1 focus:outline-none"
                      name="email"
                    />
                    <button
                      id="vasiti-newsletter-button"
                      className="flex space-x-3 text-[#242120] text-xs bg-white hover:bg-primary-light font-medium rounded px-3 py-2"
                    >
                      <span>SUBSCRIBE</span>
                    </button>
                  </section>
                </form>
              </div>
            </section>
            <div className="text-white text-xs flex justify-center space-x-3 w-full py-6 lg:hidden md:hidden">
              <div className="flex py-2 items-center">
                <img
                  src="https://www.vasiti.com/icon/footer/email.svg"
                  className="h-6 mr-3 w-auto"
                  alt="email"
                />
                <a href="mailto:contact@vasiti.com">contact@vasiti.com</a>
              </div>
              <div className="flex py-2 items-center">
                <img
                  src="https://www.vasiti.com/icon/footer/phone.svg"
                  className="h-6 mr-3 w-auto"
                  alt="phone"
                />
                <a href="tel:+2348146439559">+234 814 643 9559</a>
              </div>
            </div>
          </section>
          <nav className="border-t border-dark-light font-medium text-xs text-center pt-4 md:hidden">
            <div
              className="cursor-pointer flex p-4 justify-center items-center hover:text-primary-light"
              onClick={() => setMoreOption(!moreOption)}
            >
              <div>Show More Option</div>
              <img
                src="https://www.vasiti.com/icon/footer/arrow-up.svg"
                className="transform rotate-180 w-8 h-auto ml-4"
                alt="arrow-toggle"
              />
            </div>
          </nav>
          <section
            className={
              moreOption ? " flex flex-col uppercase mt-2" : " hidden md:block"
            }
          >
            <section className="flex flex-col lg:flex lg:flex-row  lg:px-[120px] mx-auto lg:mx-5 lg:text-left text-center py-4 md:py-12">
              <div className="px-2 pt-4 w-full justify-center md:px-4 lg:w-1/5">
                <div className="font-bold text-base py-4 text-gray-100">
                  Company
                </div>
                <a
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                  href="/about"
                >
                  About Us
                </a>
                <a
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                  href="/terms-of-use"
                >
                  Term of Use
                </a>
                <a
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                  href="/#press-media"
                >
                  Press &amp; Media
                </a>
              </div>
              <div className="px-2 pt-4 w-full md:px-4 lg:w-1/5">
                <div className="font-bold text-base py-4 text-gray-100">
                  Products
                </div>
                <a
                  href="https://marketplace.vasiti.com"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Marketplace
                </a>
                <a
                  href="https://seller.vasiti.com"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Magazine
                </a>
                <a
                  href="https://wholesale.vasiti.com"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Seller
                </a>
                <a
                  href="https://logistics.vasiti.com"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Wholesale
                </a>
                <a
                  href="https://events.vasiti.com"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Services
                </a>
              </div>
              <div className="px-2 pt-4 w-full md:px-4 lg:w-1/5">
                <div className="font-bold text-base py-4 text-gray-100">
                  Career
                </div>
                <a
                  href="https://wholesale.vasiti.com/Campus-Rep"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Become a Campus Rep
                </a>
                <a
                  href="https://wholesale.vasiti.com/Campus-Rep-Signup"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Become a Vasiti Influencer
                </a>
                <a
                  href="https://wholesale.vasiti.com/Campus-Rep-Signup"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Become a Campus Writer
                </a>
                <a
                  href="https://vasiti.com/contact#/career"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Become an Affliate
                </a>
              </div>
              <div className="px-2 pt-4 w-full md:px-4 lg:w-1/5">
                <div className="font-bold text-base py-4 text-gray-100">
                  Get in touch
                </div>
                <a
                  href="https://vasiti.com/contact"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Contact us
                </a>
                <a
                  href="https://vasiti.com/contact#/partner-with-us"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Partner with us
                </a>
                <a
                  href="https://vasiti.com/return-refund"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Advertise with us
                </a>
                <a
                  href="https://vasiti.com/faq"
                  className="font-medium my-1 text-xs py-2 text-gray-300  block hover:text-[#FF5C00]"
                >
                  Help/FAQs
                </a>
              </div>
              <div className="flex-grow items-center justify-center text-center lg:text-left px-2 pt-4 md:px-4">
                <div className="font-bold py-4">Join us on Social Media</div>
                <div className="flex py-4 items-center justify-center text-center lg:justify-start">
                  <a
                    href="https://www.facebook.com/VasitiMarketplace/"
                    className="mr-2 p-1"
                  >
                    <img
                      src="https://www.vasiti.com/icon/footer/fb.png"
                      className="h-6"
                      alt="Fa"
                    />
                  </a>
                  <a
                    href="https://twitter.com/vasitidotcom"
                    className="mr-2 p-1"
                  >
                    <img
                      src="https://www.vasiti.com/icon/footer/tw.png"
                      className="h-6"
                      alt="Tw"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/vasitidotcom/"
                    className="mr-2 p-1"
                  >
                    <img
                      src="https://www.vasiti.com/icon/footer/ig.png"
                      className="h-6"
                      alt="In"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vasiti.com"
                    className="mr-2 p-1"
                  >
                    <img
                      src="https://www.vasiti.com/icon/footer/in.png"
                      className="h-6"
                      alt="Li"
                    />
                  </a>
                </div>
              </div>
            </section>
          </section>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
