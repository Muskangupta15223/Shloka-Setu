import React from 'react'

const Slok1 = ({ slokData }) => {
  if (!slokData) return <div>Loading slok...</div>;

   const handleClick = () => {
    const text = slokData.sanskrit;
    const val = new SpeechSynthesisUtterance(text);
    val.lang = 'hi-IN'; // Set language to Hindi
    val.rate = 0.80; // Set the rate of speech 
    val.pitch = 1.2; // Set the pitch of speech
    val.volume = 2; // Set the volume of speech
    speechSynthesis.speak(val);
   }


  return (
    <div className="p-5 bg-yellow-100 flex flex-col justify-center h-full text-black">
      <h2 className="text-xl font-bold mb-4 text-orange-500">
        अध्याय {slokData.chapter} : श्लोक {slokData.verse}
      </h2>
      <p className="text-md font-sanskrit font-medium mb-3 whitespace-pre-line">{slokData.sanskrit}</p>
      <button onClick ={handleClick} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors mb-3">
        Listen  </button>
      <h3 className="text-md font-bold mt-2">Transliteration:</h3>
       
      <p className="mb-3 mt-2 font-sora italic text-md">{slokData.transliteration}</p>
      <h3 className="text-md font-bold mt-2">Explaination:</h3>
      <p className="text-md font-explain py-3">{slokData.meaning_hinglish}</p>
    </div>
  );
};


export default Slok1

