import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/gyan.json')
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setCurrent(0); // start from first quote
      });
  }, []);

  const nextQuote = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
  };
  
   const handleClick = () => {
    const text = quotes[current].meaning_hinglish;
    const val = new SpeechSynthesisUtterance(text);
    val.lang = 'hi-IN'; // Set language to Hindi
    val.rate = 0.9;
    val.pitch=1.16 // Set the rate of speech 
  
    speechSynthesis.speak(val);
   }




  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-[#E7E9AA] rounded-xl shadow p-8 mx-[20vw] my-10">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Quote Of The Day </h2>
      <p className=" px-[1vw] text-[22px] text-gray-800 text-center font-edu">
        {quotes.length > 0 ? quotes[current].meaning_hinglish : "Loading..."}
      </p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
        Listen
        </button>
  <div className="mt-6 flex gap-4">

  <button onClick={prevQuote} className="text-black hover:text-orange-500 cursor-pointer">
    <span className="material-symbols-outlined">arrow_back_ios</span>
  </button>
  <button onClick={nextQuote} className="text-black cursor-pointer hover:text-orange-500 ">
    <span className="material-symbols-outlined">arrow_forward_ios</span>
  </button>
</div>
    </div>
  );
};

export default Quote;
