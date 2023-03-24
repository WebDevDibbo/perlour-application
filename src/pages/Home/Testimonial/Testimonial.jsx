import React from "react";
import dany from "../../../assets/images/dany.png";
import ruok from '../../../assets/images/ruok.png';
import gentle from '../../../assets/images/gentle.png';

const Testimonial = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-16">Testimonials</h2>
      <div className="testimonial-section grid md:grid-cols-3 gap-8 mb-36">

      <div className="bg-slate-200 card max-w-[370px] mx-auto px-4 py-8">
        <div className="client-data flex items-center my-8">
          <div className="avatar mr-4">
            <div className="w-20 rounded-full ring-offset-base-100 ring-offset-2">
              <img src={dany} alt="client-img" />
            </div>
          </div>
          <div className="client-data-details">
            <p className="text-xl font-semibold">Nash Patrik</p>
            <p className="font-medium text-base">CEO, Manpol</p>
          </div>
        </div>
        <p className="mb-4 w-[326px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat
        </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        </div>


        <div className="bg-slate-200 card max-w-[370px] mx-auto px-4 py-8">
        <div className="client-data flex items-center my-8">
          <div className="avatar mr-4">
            <div className="w-20 rounded-full ring-offset-base-100 ring-offset-2">
              <img src={ruok} alt="client-img" />
            </div>
          </div>
          <div className="client-data-details">
            <p className="text-xl font-semibold">Miriam Barron</p>
            <p className="font-medium text-base">CEO, Manpol</p>
          </div>
        </div>
        <p className="mb-4 w-[326px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{" "}
        </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        </div>

        
        <div className="bg-slate-200 card max-w-[370px] mx-auto px-4 py-8">
        <div className="client-data flex items-center my-8">
          <div className="avatar mr-4">
            <div className="w-20 rounded-full ring-offset-base-100 ring-offset-2">
              <img src={gentle} alt="client-img" />
            </div>
          </div>
          <div className="client-data-details">
            <p className="text-xl font-semibold">Bria Malone</p>
            <p className="nyfont-medium text-base">CEO, Manpol</p>
          </div>
        </div>
        <p className="mb-4 w-[326px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{" "}
        </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
