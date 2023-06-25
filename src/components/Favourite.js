import React, {useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import { debounce } from "debounce";

const Favourite = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');


const handleSearch = (query) => {
  setSearchQuery(query);
};

const debouncedSearch = debounce(handleSearch, 300); 

const indexOfLastPost = currentPage * 5;
const indexOfFirstPost = indexOfLastPost - 5;

const favpost = JSON.parse(localStorage.getItem("favouritePosts")) || [];


const filteredPosts = favpost.filter(
  (post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase()) 
);
const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);


const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};


  return (
    <>
     <main className='pb-32'>
      <div className='flex item-center justify-between'>
      <h2 className='border-solid border-l-2 border-primary-dark px-2 my-2'>Blogs</h2>
      <div className="flex items-center">
                <svg
                    className="h-4 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input
                   onChange={(e) => debouncedSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1"
                />
            </div> 
      </div>
      <hr></hr>
      <div className='grid lg:grid-cols-2 gap-16 grid-gap-16 mt-8'>
         {
          currentPosts.map((blogs,id)=>{
            return <BlogCards key={id} title={blogs.title} body={blogs.body} id={blogs.id}></BlogCards> 
          })
         }
      </div>
      <Pagination
        page={currentPage}
        pageSize={5}
        totalPosts={favpost.length}
        onPageChange={paginate}
      />
      </main>
    </>
  )
}

export default Favourite