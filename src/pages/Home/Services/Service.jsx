import React from "react";

const Service = ({service}) => {
    const {icon,name,price,description} = service
  return (
    
        
    <div className="card w-[370px] bg-slate-200 mx-auto">
    
      <div className="card-body">
      <figure>
        <img className="w-20"
          src={icon}
          alt="Movie"
        />
      </figure>
        <h2 className=" text-center">{name}</h2>
        <p className="text-center">{price}</p>
        <p className="text-center">{description}</p>
      </div>
    
    </div>
    
  );
};

export default Service;
