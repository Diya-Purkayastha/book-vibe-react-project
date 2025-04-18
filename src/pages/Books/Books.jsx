import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({bookData}) => {

    // const [allBooks, setAllBooks] = useState([])

    // useEffect(()=>{
    //     fetch('booksData.json')
    //       .then(res=> res.json())
    //       .then(data=>setAllBooks(data))
    // }, [])

    // const bookPromise = fetch ('./booksData.json').then(res => res.json());

    return (
        <div className='my-20'>
            <h1 className='text-3xl font-semibold text-center'>Books</h1>
            <Suspense fallback={<h1>loading....</h1>}>
               <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 my-6'>
               {
                    bookData.map(book => <Book book ={book} key={book.bookId}> </Book>)
                }
               </div>
            </Suspense>

            {/* {
                allBooks.map(book => <Book book={book} key={book.id}> </Book>)
            } */}

        </div>
    );
};

export default Books;