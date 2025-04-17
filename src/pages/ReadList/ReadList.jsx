import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    //worst case

    const [sort , setSort] = useState('')
    const [ReadList , setReadList] = useState([])
    const bookData = useLoaderData();

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const myReadList = bookData.filter(book => convertedStoredBook.includes(book.bookId))
        setReadList(myReadList)
    },[])

    const handleSort = (type) => {
        setSort(type)

        if(type === 'pages'){
            const sortedByPage = [...ReadList].sort((a,b)=>a.totalPages - b.totalPages);
            setReadList(sortedByPage)
        }
        if(type === 'ratings'){
            const sortedByRatings = [...ReadList].sort((a,b) => a.rating - b.rating)
            setReadList(sortedByRatings)
        }
    }


    return (
        <div>
            <div className='flex justify-center mt-5'>
            <details className="dropdown">
                <summary className="btn m-1">sort by : {sort ? sort : " "} </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleSort('pages')}>Pages</a></li>
                    <li><a onClick={()=> handleSort('ratings')}>Ratings</a></li>
                </ul>
                </details>
            </div>
             <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                {
                    ReadList.map(b => <Book key={b.bookId} book={b}> </Book>)
                }
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;