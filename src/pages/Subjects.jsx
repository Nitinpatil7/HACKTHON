import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import data from "../data/data.json";



const Subjects = () => {
  const {setsubject} = useContext(QuizContext);
  const navigate = useNavigate();


  const handleSubject = (subject) => {
    setsubject(subject);
    navigate('/subject/dificulty');
    console.log(subject);
   
  }

  const iconMap = {
 Mathematics: '/mathmetics.png',
  Science: '/science.png',
  History: '/history.png',
  Geography: '/geography.png',
  'English Language': '/english.png',
  'Computer Science': '/cs.png',
  Physics: '/physics.png',
  Chemistry: '/chemistry.png',
  Biology: '/biology.png',
  Economics: '/eco.png',
  'Political Science': '/ps.png',
  'General Knowledge': '/gk.png',
  Sports: '/sports.png',
  Literature: '/literature.png',
  'Current Affairs': '/ca.png',
};


  return (
    <>
      <div>
        <h1 className="text-4xl  font-extrabold text-green-500 mx-10 mt-5">LoopLang</h1>
        
        <div className="flex flex-col justify-center items-center px-[5%]  gap-5 mt-10">
          <h2 className="items-center text-3xl lg:text-4xl 
          xl:text-5xl 
          font-semibold text-gray-700 pb-5">I want to Learn...</h2>
         <div className="flex flex-wrap ">
           {Object.keys(data).map((sub)=>{
            return(
              <button
  onClick={() => handleSubject(sub)}
  className="
    flex flex-col items-center gap-4
    w-full sm:w-[48%] xl:w-[30%] lg:w-[48%]  max-w-md mx-auto my-4 px-6 py-4
    bg-gradient-to-r from-green-600 to-green-500
    text-white rounded-2xl
    shadow-md
    transform transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-2xl
    active:scale-95 active:shadow-inner
    focus:outline-none focus:ring-4 focus:ring-green-300
    select-none
  "
  key={sub}
>
  {iconMap[sub] && (
    <img
      src={iconMap[sub]}
      alt={`${sub} icon`}
      className="w-10 h-10 object-contain drop-shadow-md"
      loading="lazy"
    />
  )}
  <span className="text-2xl font-semibold tracking-wide drop-shadow-sm">
    {sub}
  </span>
</button>

            )
          })}
         </div>
        </div>

      </div>
    </>
  );
};

export default Subjects;
