import React from 'react';
import bookimg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center p-10 bg-stone-100 rounded-2xl my-7'>
            <div className='md:pl-24'>
                <h1 className=' text-5xl md:w-[60%] leading-16 font-semibold'>Books to freshen up your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white mt-3 text-lg">View The List</button>
            </div>
            <div className='md:pr-24'>
                <img className='w-[100%]' src={bookimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;