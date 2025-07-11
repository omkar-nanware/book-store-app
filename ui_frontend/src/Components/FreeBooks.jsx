import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

const FreeBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getFilteredBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const filterData = res.data.filter((data) => data.category === "Free");
        setBooks(filterData);
      } catch (error) {
        console.log("error : ", error);
      }
    };
    getFilteredBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
            modi qui, libero tempora, iusto at itaque commodi est repellendus
            nihil suscipit ea deleniti?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {books.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBooks;
