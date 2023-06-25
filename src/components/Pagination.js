
import React from 'react'

const Pagination = ({page,totalPosts,pageSize,onPageChange}) => {
   
    const pageCount = Math.ceil(totalPosts / pageSize);

    const isNextDisabled=()=>{
        return page>=pageCount;
    };

    const isPrevDisabled=()=>{
        return page<=1;
    }
    const handlePagination= async(direction)=>{
         if(direction===1 && isNextDisabled()){
            return;
         }

         if(direction===-1 && isPrevDisabled()){
            return;
         }
        onPageChange(page+direction);
    }
  return (
    <div className='flex justify-center mt-24'>
        <button onClick={()=>handlePagination(-1)} className={`bg-primary-dark py-2 px-4 text-white w-24 rounded ${isPrevDisabled()?'disabled':''}`}>Previous</button>
        <button onClick={()=>handlePagination(1)} className={`bg-primary-dark py-2 px-4 text-white w-24 rounded ml-4 ${isNextDisabled()?'disabled':''}`}>Next</button>
    </div>
  )
}



export default Pagination