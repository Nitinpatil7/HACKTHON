import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "./context/QuizContext";

const App = () => {
  const navigate = useNavigate();
  const { setuser, setpaymentdone } = useContext(QuizContext);

  const clickhandler = () => {
    setuser({
      name: "",
      email: "",
    });
    setpaymentdone(false);
    navigate("/subject");
  };

  return (
    <>
      <div className="flex w-full pl-[10%] pt-10  gap-2 sm:pt-10 sm:pl-[10%]">
        <img className="h-10" src="bird.png" alt="" />
        <h1 className="text-green-600 text-4xl font-extrabold font-myfont">
          LangLoop
        </h1>
      </div>


{/* first part */}
      <div className="w-full max-h-max flex flex-col-reverse justify-center gap-[24%] items-center mt-[10%] mb-[10%] md:flex-row md:gap-5 xl:mt-[2%] xl:mr-2 ">
        <div>
          <img
            className="ml-[5%] lg:h-96 xl:h-[600px]"
            src="Croods - Party Time.png"
            alt=""
            srcset=""
          />
        </div> 
        <div className=" flex flex-col gap-10 md:gap-5 items-center mt-10 ">
          <h1 className="text-gray-800 text-5xl font-bold text-center max-w-lg leading-tight md:text-4xl lg:text-5xl  ">
            Unlock fluency through fun, bite-sized lessons.
          </h1>

          <button
            onClick={() => clickhandler()}
            className="cursor-pointer 
            w-[50%]  transition-all bg-green-500 text-white px-10 py-2 rounded-lg lg:text-2xl
border-green-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Get Started
          </button>
        </div>
      </div>


{/* second part */}
      

   <div className="w-full max-h-max flex flex-col mt-[15%] mb-[5%] items-center md:flex-row md:justify-center md:gap-10 lg:gap-0 lg:px-[15%] ">
  {/* Left Text Content */}
  <div className="max-w-md flex flex-col gap-5 justify-center text-center md:text-left px-6 ">
    <h1 className="text-4xl font-extrabold text-green-500 lg:text-5xl xl:text-6xl">
      Free . fun . effective
    </h1>
    <p className="text-gray-500 font-semibold xl:text-2xl">
      Learning with LangLoop is fun, and research shows that it works! With quick, bite-sized lessons, here you learn skills and visualize your learning through chats.
    </p>
  </div>

  {/* Right Image */}
  <div className="flex justify-center mt-10 md:mt-0">
    <img
      className="max-w-xs md:max-w-md xl:h-[500px]  "
      src="Allura - Giant Phone.png"
      alt="App preview"
    />
  </div>
</div>



{/* third part */}
      <div className="w-full max-h-max flex flex-col-reverse justify-center gap-[10%] items-center mt-[15%] mb-[12%] md:flex-row md:gap-[5%] md:justify-center md:items-center xl:gap-[2%] ">
        <div>
          <img className=" mt-20 lg:h-96 xl:h-[500px]" src="Stuck at Home - Brainstorming.png" alt="" />
        </div>

        <div className="flex flex-col gap-5 max-w-md items-center mx-10 md:mx-1 md:px-5">
          <h1 className="text-green-500 text-4xl font-extrabold lg:text-5xl xl:text-6xl">
            Grounded in Research
          </h1>
          <h2 className="text-gray-500 font-semibold xl:text-2xl">
            Our courses are built on proven teaching methodologies and engaging
            content to help learners master reading, writing, listening, and
            speaking.
          </h2>
        </div>
      </div>

    {/* fourth part */}

      <div className="w-full max-h-max flex flex-col justify-center gap-[5%] items-center mt-[15%] mb-[15%] md:gap-[0%] md:flex-row md:justify-center  md:items-center md:mt-[0%]">
        <div className="flex flex-col gap-5 max-w-md  mx-10 md:mx-1 md:px-10">
          <h1 className="text-green-500 text-4xl font-extrabold lg:text-5xl xl:text-6xl">
            Stay Motivated
          </h1>
          <h2 className="text-gray-500 font-semibold xl:text-2xl">
            We help you build a consistent language-learning habit through
            interactive features, engaging challenges, and timely reminders from
            LangLoop
          </h2>
        </div>

        <div>
          <img className="h-[500px] px-5 md:px-0" src="motivation-7-37.png" alt="" />
        </div>
      </div>


      <div className="w-full h-100%  bg-sky-100">
        <h1 className=" text-[#042c60] text-2xl font-extrabold flex text-center justify-center pt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Learn Anytime , anywhere
        </h1>
        <img
        className="mb-[50%] md:mb-[15%] lg:mb-[5%] xl:mb-[0%]"
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/229d5f88cc9df2eb0b68f39466500911.svg"
          alt=""
        />
      </div>

      <div className="relative w-full  mx-auto">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/890eb76de9a395b182c1c28322721405.svg"
          alt="Background SVG"
          className="w-full"
        />

        <div className="absolute inset-0 flex flex-col justify-center pb-[45%] md:pb-[25%] items-center gap-10 text-center px-4">
          <p className="text-green-500 font-extrabold text-4xl drop-shadow-md xl:text-5xl">
            Start a Learning with LangLoop
          </p>
          <button
          onClick={()=> navigate("/subject")}
            className="cursor-pointer w-[35%] mb-30 bg-green-500 text-white px-6 py-2 rounded-lg border-b-4 border-green-600
            xl:px-30 xl:text-3xl
      hover:brightness-110 hover:-translate-y-[1px] hover:border-b-6
      active:border-b-2 active:brightness-90 active:translate-y-2 transition-all " 
          >
            Get Started
          </button>
        </div>
      </div>

      <footer className="bg-[#58CC02] text-white py-8 w-full flex justify-evenly">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-sm xl:text-2xl">
          <div>
            <h5 className="font-semibold mb-2 xl:text-3xl">About us</h5>
            <ul className="space-y-1">
              <li>Courses</li>
              <li>Mission</li>
              <li>Approach</li>
              <li>Efficacy</li>
              <li>Research</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 xl:text-3xl">Products</h5>
            <ul className="space-y-1">
              <li>LangLoop</li>
              <li>LangLoop for Schools</li>
              <li>LangLoop Test</li>
              <li>LangLoop Math</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2 xl:text-3xl">Support</h5>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Status</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-xs xl:text-xl">
          &copy; {new Date().getFullYear()} Duolingo Clone
        </div>
      </footer>
    </>
  );
};

export default App;
