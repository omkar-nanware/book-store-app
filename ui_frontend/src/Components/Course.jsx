import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from 'axios'
import { Link } from "react-router-dom";

export const Course = () => {
  const [book,setBook] = useState([])

  useEffect(()=> {
      const getBook = async ()=> {
        try {
          const res= await axios.get('http://localhost:4001/book')
          console.log(res.data);
          setBook(res.data)
          
        } catch (error) {
          console.log("error : ", error);
          
        } 
      }
      getBook()
  },[])

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl   md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem id
            magnam sunt provident alias itaque nesciunt culpa in aspernatur.
            Distinctio debitis eaque exercitationem aperiam neque et
            voluptatibus, eos culpa sint!
          </p>
        
          <Link  to="/">  <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700  duration-300">
            Back
          </button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((data) => {
            return <Cards key={data.id} item={data} />;
          })}
        </div>
      </div>
    </>
  );
};
