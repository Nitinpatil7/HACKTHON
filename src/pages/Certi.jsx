import React, { useContext ,useState } from "react";
import { QuizContext } from "../context/QuizContext";
import Rezorpay from "../component/Rezorpay";
import Certificate from "../component/Certificate";
import certificateBg from "/Certificate of Appreciation.png";
import { AnimatePresence , motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Certi = () => {
  const { subject, paymentdone, user, setuser } = useContext(QuizContext);
  const [open, setopen] = useState(false)

  const navigate = useNavigate();
  console.log(subject);

  const clickhandler = () => {
    setopen(false);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  return (
    <>
      <div>
        <h1 className="text-4xl font-extrabold text-green-500 absolute top-5 left-10 ">
          LangLoop
        </h1>
        <div className="text-center mt-24 flex flex-col items-center justify-center ">
          <h2 className="font-bold text-3xl text-gray-800 lg:text-4xl ">
            You’ve Earned It! Make It Count.
          </h2>
          <h3 className="font-semibold text-gray-600 mt-2 lg:text-xl">
            Download your verified certificate and showcase your achievement.
          </h3>
        </div>

        <div className="mt-15 flex flex-col lg:flex-row lg:mx-10 lg:mt-20 items-center gap-15 justify-center">
          <div className=" max-w-xl  mx-10 lg:mx-1 md:mx-2">
            <h2 className="text-3xl md:text-4xl text-green-500 font-semibold lg:text-4xl xl:text-5xl">
              🎓 You've Officially Completed the Journey!
            </h2>
            <p className="mt-5 text-gray-600 font-semibold md:text-xl xl:text-2xl lg:text-lg ">
              Your hard work, dedication, and consistency have paid off. This
              certificate is more than just a piece of paper – it's a powerful
              tool that showcases your skills to the world.
            </p>
            <ul className="mt-5 text-gray-600 font-semibold md:text-xl xl:text-lg lg:text-lg">
              <li>✔️ Verified proof of your achievement</li>
              <li>✔️ Increases credibility with employers</li>
              <li>✔️ Perfect addition to your resume and LinkedIn</li>
              <li>✔️ Helps you stand out in interviews</li>
              <li>✔️ Just in 200/- any Subject of Certificate</li>
            </ul>
          </div>
          <div>
            <img
              className="rounded-bl-3xl rounded-tl-3xl rounded-br-3xl rounded-tr-3xl h-[300px] md:h-[400px] lg:h-[300px]  "
              src={certificateBg}
             
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button
          onClick={() => setopen(true)}
          className="cursor-pointer mb-10 
              transition-all bg-green-500 text-white px-10 py-2 rounded-lg w-[70%] text-xl mt-10 md:py-3
border-green-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] lg:w-[30%] xl:mt-10"
        >
          {paymentdone === true ? "Download your Certificate" : "Pay Just 200/- and get Certificate"}
        </button>
        </div>
       <AnimatePresence>
  {open && (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-gray-300  z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
      />

      {/* Popup Card */}
      <motion.div
        className="fixed top-1/2 left-1/2 z-50 bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-lg transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Get Certificate by Just ₹200
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setuser({ ...user, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <div className="mb-4">
          <Rezorpay />
        </div>

        {paymentdone === true ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Certificate/>
          </motion.div>
        ): ""}

        <button
          onClick={() => clickhandler()}
          className="mt-4 text-red-600 hover:underline text-center w-full"
        >
          Close
        </button>
      </motion.div>
    </>
  )}
</AnimatePresence>

      </div>
    </>
  );
};

export default Certi;
