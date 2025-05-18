import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import data from "../data/data.json";

const Dificulty = () => {
  const { subject, setdificullty, setquestions } = useContext(QuizContext);
  const navigate = useNavigate();

  const handledificulty = (level) => {
    setdificullty(level);
    const selected = data[subject].questions.filter((q) => q.level === level);
    if (selected.length === 0) {
      alert("No questions available for this difficulty level.");
      return;
    }
    setquestions(selected);
    console.log(selected);
    navigate("/subject/dificulty/wait");
  };

  return (
    <>
      <div className="p-6 ">
        <div>
          <h1 className="text-4xl font-extrabold text-green-500 mb-4 mt-5 ml-5">
            LangLoop
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center px-[15%] gap-5 mt-20">
          <h2 className="text-3xl font-semibold text-gray-700 pb-5">
            Select Your Difficulty Level for {subject}
          </h2>
          {["easy", "medium", "hard"].map((level) => (
            <button
              key={level}
              onClick={() => handledificulty(level)}
              className="
    block w-full max-w-md mx-auto my-4 px-6 py-4
    bg-gradient-to-r from-green-600 to-green-500
    text-white rounded-2xl
    shadow-md
    transform transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-2xl
    active:scale-95 active:shadow-inner
    focus:outline-none focus:ring-4 focus:ring-green-300
    select-none
    capitalize
    text-2xl font-semibold tracking-wide drop-shadow-sm
    text-center
  "
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dificulty;
