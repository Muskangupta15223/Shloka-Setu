import React from 'react'

const Slok1 = ({ slokData }) => {
  if (!slokData) return <div>Loading slok...</div>;

   const handleClick = () => {
    const text = slokData.sanskrit;
    const val = new SpeechSynthesisUtterance(text);
    val.lang = 'hi-IN'; 
    val.rate = 0.80;  
      val.pitch = 1.2; 
        window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(val);
   }


  return (
    <div className="p-2 bg-yellow-100 flex flex-col justify-center h-full text-black">
      <h2 className="text-lg font-bold mb-3 text-orange-500">
        अध्याय {slokData.chapter} : श्लोक {slokData.verse}
      </h2>
      <p className="text-md font-sanskrit font-medium mb-2 whitespace-pre-line">{slokData.sanskrit}</p>
      <button onClick ={handleClick} 
       title="Please use Chrome browser to explore this feature."
      className="px-3 py-2 bg-orange-500 mx-11 text-white rounded hover:bg-orange-700 transition-colors mb-1">
        Listen  </button>
      <h3 className="text-md font-bold mt-2">Transliteration:</h3>
       
      <p className="mb-2 mt-1 font-sora italic text-md">{slokData.transliteration}</p>
      <h3 className="text-md font-bold mt-1">Explaination:</h3>
      <p className="text-md font-explain py-3">{slokData.meaning_hinglish}</p>
    </div>
  );
};


export default Slok1

