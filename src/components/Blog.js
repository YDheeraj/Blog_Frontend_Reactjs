import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils";
import blogImg from "../Images/blogimg.jpg";
import avatar from "../Images/profile.png";
import Comments from "./Comments";

const Blog = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comment, setComment] = useState(null);


  useEffect(() => {
    const fetchPostAndAuthor = async () => {
      try {
        const [postResponse, authorResponse, commentResponse] =
          await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
            axios.get(
              `https://jsonplaceholder.typicode.com/users?postId=${postId}`
            ),
            axios.get(
              `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            ),
          ]);
        setPost(postResponse.data);
        setAuthor(authorResponse.data);
        setComment(commentResponse.data);
      } catch (error) {
        console.error("Error fetching post and author:", error);
      }
    };

    fetchPostAndAuthor();
  }, [postId]);

  const isPostInFavourites = () => {
    const existingFavouritePosts = JSON.parse(localStorage.getItem("favouritePosts")) || [];
    return existingFavouritePosts.some(existingPost => existingPost.id === post.id);
  };

  const handleAddToFavourite = () => {
    const existingFavouritePosts = JSON.parse(localStorage.getItem("favouritePosts")) || [];
    const updatedFavouritePosts = existingFavouritePosts.filter(existingPost => existingPost.id !== post.id);

    if (isPostInFavourites()) {
      localStorage.setItem("favouritePosts", JSON.stringify(updatedFavouritePosts));
    } else {
      const updatedFavouritePosts = [...existingFavouritePosts, post];
      localStorage.setItem("favouritePosts", JSON.stringify(updatedFavouritePosts));
    }
  };
  
  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="my-12 grid lg:grid-cols-3 gap-12 single-article">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold py-2">{post.title}</h1>

          <div className="flex flex-col md:flex-row items-center my-4">
            <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
              <img src={avatar} height={40} width={40} alt="Avatar" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-sm font-bold text-gray-600">
                {author.name}
                &nbsp;
                <span className="text-gray-400">{formatDate()}</span>
              </span>
                 <button
        className={`bg-primary hover:bg-primary-dark text-white font-bold py-1 px-2 mx-2 rounded mt-2 md:mt-0 ${isPostInFavourites() ? 'bg-red-500' : ''}`}
        onClick={handleAddToFavourite}
      >
        {isPostInFavourites() ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
            </div>
          </div>

          <div className="text-lg text-gray-600 leading-8">
            <img className="w-full my-12 mb-6" src={blogImg} alt={post.title} />
            {post.body.repeat(3)}
            <br></br>
            {post.body.repeat(3)}
            <br></br>
            {post.body.repeat(3)}
          </div>
        </div>
        <div className="sticky top-0">
          <h2 className="font-bold text-gray-600 text-lg">
            Signup to our newsletter
          </h2>
          <p className="mt-4 text-gray-500">
            Get the latest article on all things data delivered straight to your
            inbox
          </p>
          <input
            className="border w-full p-2 pl-3 my-6 outline-primary"
            type="email"
            placeholder="Your work email"
          />
          <button className="border-2 border-primary rounded py-1 px-6 text-primary font-bold">
            Subscribe
          </button>
          <hr className="my-6 border-gray-100" />
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <span className="text-gray-500 mr-2">Share</span>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              > 
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
          <hr className="my-6 border-gray-100" />
        </div>
      </div>
      <Comments comments={comment}></Comments>
    </>
  );
};

export default Blog;
