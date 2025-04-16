import React from 'react';

const Book = ({book}) => {

    // const bookData = use(bookPromise)
   const{bookName, author, image, rating, category, tags} = book;

    return (
        <div className="card bg-base-100 shadow-sm p-[24px]">
            <figure className='p-4 bg-[#F3F3F3] h-[230px]'>
                <img className='w-[100px]'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
               <div className='flex gap-2'>
               <div className="badge badge-outline badge-success">{tags[0]}</div>
               <div className="badge badge-outline badge-success">{tags[1]}</div>
               </div>
                <h2 className="card-title">
                {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">{rating}</div>
                </div>
            </div>
            </div>
    );
};

export default Book;