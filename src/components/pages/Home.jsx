import backtop from '../../assets/backtop.png';
import imgtop from '../../assets/imgtop.svg';
import bb from '../../assets/bb.png';
import bd from '../../assets/bd.png';
import line from '../../assets/line.png';
import joe from '../../assets/joe.png';
import ade from '../../assets/ade.png';
import emma from '../../assets/emma.png';
import adu from '../../assets/adu.png';
import chisom from '../../assets/chisom.png';
import chidi from '../../assets/chidi.png';
import woman from '../../assets/woman.png';


function Home() {
  return (
    <div className="w-screen  my-5 items-center lg:relative">
      {/* Hero Section */}
      <section className="flex flex-wrap container mx-auto px-8 lg:px-[94px] ">
        <div className="lg:w-1/2 lg:py-[128px] py-[64px]">
          <h2 className="my-[24px] lg:text-[48px] text-4xl lg:leading-[50px] font-bold text-black">
            <span className="block">Amazing</span>
            <span className="block">Experiences from Our</span>
            <span className="block">Wonderful Customers</span>
          </h2>
          <p className="text-[#494949]">
            <span className="block">
              Here is what customers and vendors are saying about
            </span>{' '}
            <span className="block">
              us, you can share your stories with us too.
            </span>
          </p>
        </div>
        <div className="lg:w-1/2 lg:flex block justify-center lg:relative">
          <img
            src={imgtop}
            alt=""
            className="lg:absolute lg:bottom-0 lg:right-0 relative lg:h-[450px] lg:w-[600px]"
          />
          <img
            src={backtop}
            alt=""
            className="lg:absolute lg:-z-10 lg:right-0 lg:h-[600px] lg:w-[600px] lg:-bottom-40 hidden"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className=" bg-black lg:w-full px-8">
        <div className="lg:px-[137px] pt-32  lg:flex lg:relative flex  lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 block lg:items-center lg:flex-row  justify-center lg:relative items-center relative">
            <img
              src={bb}
              alt=""
              className="lg:absolute lg:left-0 lg:h-[550px] lg:w-[550px] z-50 lg:bottom-0 absolute bottom-0"
            />
            <img
              src={bd}
              alt=""
              className="lg:left-0 lg:h-[530px] lg:w-[530px] z-[1] lg:absolute lg:bottom-0"
            />
          </div>

          <div className="lg:w-1/2 lg:px-16 px-8 lg:py-[64px]">
            <h4 className="my-[24px] text-[32px] text-white">
              Tolu & Joy’s Experience
            </h4>
            <p className="text-white py-[7px] px-[10px] border rounded-sm w-[95px] mb-12">
              CUSTOMER
            </p>

            <p className="text-white">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <div className="my-8">
              <p className=" text-[16px] uppercase text-white">
                Share your own story!
              </p>
              <img src={line} alt="" className="w-[200px]" />
            </div>
          </div>
        </div>
      </section>

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

      {/* Forth Section */}

         {/*  */}
         <section className=" bg-white lg:w-full px-8">
        <div className="lg:px-[70px] pt-24 lg:flex lg:relative flex  lg:flex-row flex-col-reverse">
         
          <div className="lg:w-1/2  px-8 lg:py-[64px]">
            <h4 className="my-[24px] text-[32px] text-black">
              Tolu & Joy’s Experience
            </h4>
            <p className="text-[#FF5C00] py-[7px] px-[10px] border text-center border-[#FF5C00] uppercase rounded-sm w-[95px] mb-12">
              Vendor
            </p>

            <p className="text-black lg:max-w-lg">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <div className="my-8">
              <p className=" text-[16px] uppercase text-[#FF5C00]">
                Share your own story!
              </p>
              <img src={line} alt="" className="w-[200px]" />
            </div>
          </div>
          <div className="lg:w-1/2 block lg:items-center lg:flex-row  justify-center lg:relative items-center relative">
            <img
              src={woman}
              alt=""
              className="lg:absolute lg:left-0 lg:h-[550px] lg:w-[550px] z-50 lg:bottom-0 absolute bottom-0"
            />
            <img
              src={backtop}
              alt=""
              className="lg:left-0 lg:h-[530px] lg:w-[530px] z-[1] lg:absolute lg:bottom-0"
            />
          </div>
        </div>
      </section>

      {/* Last Section */}

      <section className="flex flex-col lg:grid-cols-3 lg:grid lg:gap-12 container lg:items-center px-8 lg:px-24 space-y-24 lg:space-y-0 my-16 mx-auto lg:my-24">
        {/* First Content */}
        <div className="">
          <img src={joe} alt="" className=" w-[200px] h-[200px]" />
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

        {/* Second Content */}
        <div className="">
          <img src={ade} alt="" className=" w-[200px] h-[200px]" />
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

        {/* Third Content */}
        <div className="">
          <img src={emma} alt="" className=" w-[200px] h-[200px]" />
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

export default Home;
