import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    
    const {id} = useParams();

    const bookData = useLoaderData()
    const singleBook = bookData.find (book => book.bookId === parseInt(id))
    
    const{bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = singleBook;

    const handleMarkAsRead = id =>{
        addToStoreDB(id);

        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked read button!",
        //     icon: "success"
        //     });
        
            toast("Book added to the Read List");
    }

    return (
        <div className='flex flex-col md:flex-row gap-5 w-3/4 mx-auto my-7'>
            <div className='bg-stone-200 rounded-xl flex justify-center items-center '>
                <img className='md:p-15 h-[500px] ' src={image} alt="" />
            </div>
            <ToastContainer />
            <div className='w-[50%] space-y-3'>
                <h1 className='text-2xl font-semibold'>{bookName}</h1>
                <p className='font-medium'>By:{author} </p>
                <div className='border-y-1 border-dashed  p-1.5 border-stone-300'>
                  <h3 className='text-xl'>{category}</h3>
                </div>
                <p><span className='font-semibold'>Review:</span> {review}</p>
                <div className='flex  gap-4 border-b-1 border-dashed  p-1.5 border-stone-300'>
                 <h3 className='font-semibold'>Tags: </h3>   
                <div className="badge badge-outline badge-success">{tags[0]}</div>
                <div className="badge badge-outline badge-success">{tags[1]}</div>
                </div>
                <div className='flex gap-6'>
                    <div className='text-stone-600'>
                        <h3>Number of Pages:</h3>
                        <h3>Publisher:</h3>
                        <h3>Year of Publishing:</h3>
                        <h3>Rating:</h3>
                    </div>
                    <div className='font-semibold'>
                        <h3>{totalPages}</h3>
                        <h3>{publisher}</h3>
                        <h3>{yearOfPublishing}</h3>
                        <h3>{rating}</h3>
                    </div>
                </div>
               <div className='flex gap-2'>
               <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline btn-success">Read</button>
               <button className="btn btn-active btn-info text-white">Wishlist</button>
               </div>
            </div>
          
        </div>
    );
};

export default BookDetails;