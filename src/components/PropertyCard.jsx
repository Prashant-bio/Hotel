import React from 'react';
import {useNavigate} from 'react-router-dom';
import {IoLocationOutline} from "react-icons/io5"
import {PiBuildingsBold} from "react-icons/pi"
import {LiaBathSolid, LiaBedSolid} from "react-icons/lia"
import {BsArrowsExpand} from "react-icons/bs"
const PropertyCard = ({ id, name, img ,price}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
    navigate(`/property/${id}`);
  };
    return (
        <div className="w-[25%] h-[100%] bg-white rounded  shadow-lg m-4 " 
        onClick={handleCardClick}
        >
            
                <div className="p-2" style={{
                    height: '50%',
                    width: '100%',
                    position: 'relative',
                }}>
                    <img src={img} alt='name' style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }} 
                    className='rounded-md'    
                    />
                    <div className='flex items-center gap-2 mt-2 pl-2'>
                    <IoLocationOutline />
                    <p>8558 Ocean st.</p>
                    </div>
                    <p className="text-lg font-semibold pl-2 my-1">{name}</p>
                    <div className='flex justify-evenly'>
                        <div className='flex flex-col gap-1 '>
                        <PiBuildingsBold />
                        <p>3 Room</p>
                        </div>
                        <div className='flex flex-col gap-1 '>
                        <LiaBedSolid />
                        <p>4 Bed</p>
                        </div>
                        <div className='flex flex-col gap-1 '>
                        <LiaBathSolid />
                        <p>1 Bath</p>
                        </div>
                        <div className='flex flex-col gap-1 '> 
                        <BsArrowsExpand />
                            <p>732 sft.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-2 pl-2'>
                        <p>${price}/month</p>
                        
                            <button className='border-[#4660f8] border rounded-full mx-4 px-4 py-2 text-[#4660f8]'>
                            Read More</button>
                        
                    </div>
                </div>
        </div>
    );
};

export default PropertyCard;
