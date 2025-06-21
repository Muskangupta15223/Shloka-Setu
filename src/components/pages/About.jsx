import React from 'react'
import { useState } from 'react';

const About = () => {
   const [language, setLanguage] = useState("English");

  const content = {
   English:
  <>
  <p className="text-center text-lg mt-1 px-[18vw] py-8">
  <span className="text-center text-3xl font-bold font-edu"> Bhagavad Gita: The Essence of Life</span>< br/>
        The Bhagavad Gita, also called the Gita or “The Song of the Divine,” is a spiritual treasure and life guide that teaches us how to live with clarity, strength, and purpose. It is a sacred conversation between Lord Krishna and the warrior Arjuna,
        set on the battlefield of Kurukshetra, just before a great war begins.
        When Arjuna sees his loved ones on both sides of the war, he feels deeply confused,
        sad, and helpless.
        He doesn’t want to fight and turns to Lord Krishna for guidance.
        What follows is a powerful dialogue where Krishna explains the meaning of life, duty (dharma), selfless action (karma), devotion (bhakti), and the eternal nature of the soul.
          The Bhagavad Gita is not just for saints or scholars—it’s for everyone. Whether you’re a student, professional, or homemaker, its timeless lessons help us face challenges, make the right choices, and walk

        <br />
        Across its 700 Sanskrit shlokas divided into 18 chapters, the Gita teaches us:
    <br/>
       How to rise above fear, doubts, and attachments,<br/>
          How to perform our duties with balance and faith,<br/>
           how to discover peace through spiritual wisdom and self-awareness.<br/>
        
      </p>
     
</>
   ,
   Hindi:
   <>
<p className="text-center text-lg mt-1 px-[18vw] py-8">
  <span className="text-center text-3xl font-bold mt-9"> भगवद गीता: जीवन का सार</span>< br/>
भगवद गीता, जिसे गीता या “ईश्वर का गीत” भी कहा जाता है, एक आध्यात्मिक खजाना है जो हमें स्पष्टता, शक्ति और उद्देश्य के साथ जीना सिखाती है। यह भगवान श्रीकृष्ण और योद्धा अर्जुन के बीच हुआ एक पवित्र संवाद है, जो कुरुक्षेत्र के युद्ध क्षेत्र में आरंभ होता है।

जब अर्जुन अपने अपने प्रियजनों को युद्ध के दोनों पक्षों में देखता है, तो वह उलझन, दुख और असहायता महसूस करता है। वह युद्ध नहीं करना चाहता और भगवान कृष्ण से मार्गदर्शन माँगता है।

इसके बाद जो संवाद होता है, उसमें श्रीकृष्ण जीवन का अर्थ, धर्म, निष्काम कर्म, भक्ति और आत्मा की अनंतता को विस्तार से समझाते हैं।
भगवद गीता केवल संतों या विद्वानों के लिए नहीं है — यह हर किसी के लिए है। चाहे आप छात्र हों, प्रोफेशनल हों या गृहस्थ, इसकी अनंत सीखें हमें जीवन की चुनौतियों का सामना करने, सही निर्णय लेने और सत्य के मार्ग पर साहस और करुणा के साथ चलना सिखाती हैं।

<br />
700 संस्कृत श्लोकों और 18 अध्यायों में विभाजित यह ग्रंथ हमें सिखाती है:

<br/>
  कैसे भय, संदेह और मोह से ऊपर उठें,<br/>
  कैसे अपने कर्तव्यों को संतुलन और विश्वास के साथ निभाएं,<br/>
  कैसे आत्म-ज्ञान और आध्यात्मिक बुद्धि से शांति प्राप्त करें।<br/>

</p>



   </>

   ,
   Hinglish:
<>
<p className="text-center text-lg mt-1 px-[18vw] py-8">
  <span className="text-center text-3xl font-bold mt-9"> Bhagavad Gita: Jeevan Ka Saar</span>< br/>
Bhagavad Gita, jise hum “Gita” ya “Bhagwan ka Geet” bhi kehte hain, ek spiritual guide hai jo hume clarity, strength aur life ka purpose sikhata hai. Ye ek pavitra samvaad hai Bhagwan Krishna aur warrior Arjuna ke beech, jo Kurukshetra ke yuddh ke maidan mein hota hai.

Jab Arjuna apne apno ko dono side me dekhta hai, to uska mann udas, confused aur nirash ho jata hai. Wo yuddh nahi karna chahta aur Krishna se guidance maangta hai.

Uske baad Krishna usse jeevan ka matlab, dharm (duty), nishkaam karma (selfless action), bhakti (devotion), aur aatma ke anant roop ke baare mein batate hain.
Bhagavad Gita sirf saints ya scholars ke liye nahi hai — ye har insaan ke liye hai. Chahe aap student ho, professional ya ghar sambhalne wale, Gita ke timeless lessons hume problems face karne, sahi decision lene aur sachchai ke path par himmat aur daya ke saath chalna sikhate hain.

<br />
700 Sanskrit shlok aur 18 chapters mein divided, Gita hume sikhati hai:
<br/>
  Kaise hum fear, doubt aur attachments se upar uth sakte hain,<br/>
  Kaise apna kaam balance aur shraddha ke saath karein,<br/>
  Kaise spiritual wisdom aur self-awareness se peace paayein.<br/>
</p>

</>
   

  };
  return (
    <div className="p-6 text-center mb-4 ">
      {/* Dynamic Content */}
      <div className=" rounded-lg p-4 text-justify ">
        {content[language]}
      </div>
    <div className="mb-4 space-x-4 block">
        <button onClick={() => setLanguage("English")} className="px-4 py-2 bg-blue-500 text-white rounded">English</button>
        <button onClick={() => setLanguage("Hindi")} className="px-4 py-2 bg-green-500 text-white rounded">हिंदी</button>
        <button onClick={() => setLanguage("Hinglish")} className="px-4 py-2 bg-yellow-500 text-black rounded">Hinglish</button>
      </div>

    </div>
  )
}

export default About
