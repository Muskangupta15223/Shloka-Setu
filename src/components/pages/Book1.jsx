import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Slok1 from "./Slok1";

const Book1 = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/Shloka-Setu/gyan.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load gyan.json");
        return res.json();
      })
      .then((data) => {
        setPages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="book-container flex justify-center mt-8 overflow-hidden px-2 sm:px-2">
    <HTMLFlipBook
  width={450}
  height={520}
  className="mx-3 md:mx-16 shadow-xl rounded-lg text-black-900 p-1 "
  size="stretch"
  minWidth={350}
  maxWidth={450}
  minHeight={500}
  maxHeight={520}
  showCover={true}
  mobileScrollSupport={true}
>
        {/* Front Cover */}
        <div className="cover-page flex items-center justify-center ">
         <img
  src="/Shloka-Setu/images/mainpage.jpeg"
  alt="front"
  className="w-full h-full object-cover rounded"
/>
        </div>

        {/* Dynamic Slok Pages */}
        {pages.map((item, idx) => (
          <div key={`${item.chapter}-${item.verse}-${idx}`} className="bg-yellow-100 h-full">
            <Slok1 slokData={item} />
          </div>
        ))}

        {/* Back Cover */}
        <div className="cover-page flex items-center justify-center">
         <img
  src="/Shloka-Setu/images/backpage.jpg"
  alt="back"
  className="w-full h-full object-cover rounded"
/>

        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book1;