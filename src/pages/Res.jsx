import React , {useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'

const Res = () => {
  const {score ,setscore,subject , questions , dificullty , setcurrentquestion} = useContext(QuizContext);
  const navigate = useNavigate();
  

  const handleContinue = () => {
    setscore(0);
    setcurrentquestion(0);
    if (dificullty === "easy") {
      navigate("/subject");
    } else if (dificullty === "medium") {
      navigate("/subject");
    } else 
      if (score > 5) {
      navigate("/subject/dificulty/quiz/result/certificate");
    
    }else{
      navigate("/subject");
    }
    
  };

  return (
  <>
   <div className="p-6 text-center">
    <h1 className='text-4xl font-extrabold text-green-500 absolute'>LangLoop</h1>
      <h2 className="text-5xl font-bold mt-35  text-green-600 shadow-green-900">Congratulation🥳🤩🎉
 </h2>
      <h3 className="text-2xl font-bold mt-10" >You scored in sub : {subject} at {dificullty} level = {score} / {questions.length}</h3>
    

      <p className='text-gray-700 font-semibold pt-2 sm:text-xl'>{score > 5 ? "Keep Growing and Unlock New Skills" : "Try Again!  Don't Give up  You are Champion!"}</p>

      <button
          onClick={handleContinue}
            className="cursor-pointer 
            w-[40%] sm:text-xl mt-5  transition-all bg-green-500 text-white px-10 py-2 rounded-lg
border-green-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
md:w-[30%] xl:w-[25%]

"
          >
            {(dificullty === "hard" && score > 5 )? "Claim Certificate" : "Try Again Next Time better!"}
          </button>
          <p className='font-semibold text-gray-800 max-w-md absolute bottom-5 left-[15%] right-[15%]  sm:text- md:left-[29%] md:right-[25%] md:text-xl lg:left-[27%] xl:left-[34%]'>Note :- You Have To Complete More Than 5 Hard Questions For Certificate </p>
    </div>
  </>
  )
}

export default Res