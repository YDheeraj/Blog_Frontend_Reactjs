import { useState } from "react";
import { formatDate } from "../utils";


const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  return (
    <>
    <div className="my-12">
      <h2 className="border-solid border-l-2 border-primary-dark px-2 my-2 text-black text-lg">
        Comments
      </h2>
      <hr className="mb-8"></hr>
      {comments.map((data, index) => (
        <div key={index} className="mb-4">
          <span className="text-sm font-bold text-gray-600">
            {(data.name).split(" ").slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}&nbsp; on &nbsp;
            <span className="text-gray-400">
              {formatDate()}
            </span>
          </span>
          <p className="text-gray-700">{data.body}</p>
        </div>
      ))}
      <hr></hr>
      <form onSubmit={handleSubmit} className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Leave a comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
          placeholder="Type your comment here"
          className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4"
        />
        <br />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mb-20"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Comments;
