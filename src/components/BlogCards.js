

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../Images/profile.png'
import { formatDate } from '../utils';

const BlogCards = ({title,body,id}) => {

    const [author, setAuthor] = useState('');
    


    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?postId=${id}`);
            setAuthor(response.data[id].name)
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchPosts();
      }, []);

  return (
    <div>
        <Link  to={`/posts/${id}`}> 
            <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>
                {title}
            </h1>
        </Link>
        <div className='flex items-center'>
            <div className='flex items-center my-4'>
                <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
                    <img src={profile} alt='author image' height={40} width={40}></img>
                </div>
                <span className='text-sm font-bold text-gray-600'>
                    {author} on &nbsp;
                    <span className='text-gray-400'>
                    {formatDate()}
                </span>
                </span>
            </div>
        </div>
        <div className='text-gray-500'>
           {body.slice(0,250)}{body.length>250?'...':''}
        </div>
    </div>
  )
}

export default BlogCards