import React , { useContext , useState} from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'

const Quizes = () => {
  const {questions , currentquestion , setcurrentquestion , score , setscore} = useContext(QuizContext);
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">No questions available</h2>
        <p>Please select a subject and difficulty level to start the quiz.</p>
      </div>
    );
  }

  const handleanswer = (answer) => {
    if (isAnswered) return; // Prevent multiple answers
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === q.answer) {
      setscore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentquestion + 1 < questions.length) {
      setcurrentquestion(currentquestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      navigate('/subject/dificulty/quiz/result');
    }
  };

  const getButtonColor = (opt) => {
    if (!isAnswered) return 'bg-gray-100 hover:bg-gray-200 transition-all duration-300';
    if (opt === q.answer) return 'bg-green-400 text-white transition-all duration-300';
    if (opt === selectedAnswer) return 'bg-red-400 text-white transition-all duration-300';
    return 'bg-gray-200 transition-all duration-300';
  };

  const q = questions[currentquestion] ?? {};

  return (
  <>
    <div className="p-6 bg-gradient-to-tr from-green-50 via-white to-blue-50 min-h-screen transition-all duration-500 ease-in-out ">
      <h1 className='text-4xl font-extrabold text-green-500 '>LangLoop</h1>
      <div className='flex items-center justify-center mx-[6%] flex-col   mt-10 w-[95%] lg:w-[85%] lg:px-10 '>
        <div className= "  bg-white p-5 rounded shadow-md mt-10 transition-all duration-500 hover:shadow-xl hover:scale-[1.01] ">
        <h2 className="flex items-center justify-center  text-xl font-semibold mb-4 mt-5 sm:text-2xl">
          Quize Question {currentquestion + 1} / {questions.length}
        </h2>
          <p className="text-xl mb-4 font-semibold text-gray-800 sm:text-2xl sm:py-5 lg:px-5">{q.question}</p>
          <div className="space-y-2 ">
            {q.options?.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleanswer(opt)}
                disabled={isAnswered}
                className={`block w-full p-2 rounded ${getButtonColor(opt)} cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]`}
              >
                <h3 className='text-xl font-semibold text-gray-700'>{opt}</h3>
              </button>
            ))}
          </div>

          {/* Show Next Button only after answering */}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  </>
  )
}

export default Quizes
