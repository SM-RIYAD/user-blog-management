import React from 'react';
import Marquee from "react-fast-marquee";
const Concern = () => {
    return (
        <div className='grid'>
            <div className='lg:max-w-6xl mx-auto my-10'>
            <h1 className='text-3xl mb-5 uppercase font-bold text-black text-center '>Popular Users</h1>
            <p className=' font-bold  text-gray-400  text-center p-2'>Taskify serves a dynamic community, from busy professionals and diligent students to entrepreneurs and freelancers. Our user-friendly platform adapts to your specific needs, providing a seamless task management experience for all. </p>
            </div>
          
            <Marquee>
<div className="hover:scale-95 me-5  " >
        <div className="card xl:w-96  lg:w-80 md:w-96 w-56 bg-base-100 shadow-xl image-full border  border-stone-100">
          <figure className="h-56">
            <img
              className=" w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.2.2010618524.1694701074&semt=sph"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions h-40 justify-end items-end">
              <h2 className="card-title font-bold text-2xl">Doctors</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hover:scale-95 mx-5   " >
        <div className="card xl:w-96  lg:w-80 md:w-96 w-56 bg-base-100 shadow-xl image-full border  border-stone-100">
          <figure className="h-56">
            <img
              className=" w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=sph"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions h-40 justify-end items-end">
              <h2 className="card-title font-bold text-2xl">Teachers</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="hover:scale-95 mx-5   " >
        <div className="card xl:w-96  lg:w-80 md:w-96 w-56 bg-base-100 shadow-xl image-full border  border-stone-100">
          <figure className="h-56">
            <img
              className=" w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/portrait-young-man-while-studying-books_641386-449.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions h-40 justify-end items-end">
              <h2 className="card-title font-bold text-2xl">Students</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="hover:scale-95 mx-5   " >
        <div className="card xl:w-96  lg:w-80 md:w-96 w-56 bg-base-100 shadow-xl image-full border  border-stone-100">
          <figure className="h-56">
            <img
              className=" w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.2010618524.1694701074&semt=sph"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions h-40 justify-end items-end">
              <h2 className="card-title font-bold text-2xl">Developers</h2>
            </div>
          </div>
        </div>
      </div>
          </Marquee>
        </div>
    );
};

export default Concern;